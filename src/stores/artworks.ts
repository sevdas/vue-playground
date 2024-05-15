import { defineStore } from 'pinia'
import { MMABasePath } from '@/api/apiPaths'

interface Collection {
  objectIDs: number[]
  total: number
}

interface Artwork {
  department: string
  title: string
  culture: string
  // ... etc
}

interface ArtworkCollection {
  collection: Collection[]
  artworkDetails: Artwork[]
  loading: boolean
}

export const useArtworksStore = defineStore('artworks', {
  state: (): ArtworkCollection => {
    return {
      collection: [],
      artworkDetails: [],
      loading: false
    }
  },

  actions: {
    async fetchArtworks() {
      try {
        this.loading = true
        const response = await fetch(`${MMABasePath}?departmentIds=10|14|21`)

        if (response?.ok) {
          const collection = await response.json()

          const limit = 50

          const limitedCollectionIds = collection.objectIDs.slice(0, limit)
          this.collection.objectIDs = limitedCollectionIds
          this.collection.total = limitedCollectionIds.length
        }
      } catch (error) {
        console.error('Error fetching artworks:', error)
        throw new Error('Failed to fetch artworks')
      } finally {
        this.loading = false
      }
    },

    async fetchAllArtworkDetails() {
      try {
        this.loading = true

        const allCollectionIds = this.collection.objectIDs

        const allArtworkDetailsResponse = await Promise.allSettled(
          allCollectionIds.map(async (id) => {
            try {
              const response = await fetch(`${MMABasePath}/${id}`)

              if (response.ok) {
                return await response.json()
              } else {
                console.error(`Failed to fetch artwork details for ID: ${id}`)
              }
            } catch (error) {
              console.error('Error fetching artwork details:', error)
            }
          })
        )

        // Filter out fulfilled promises and extract their values
        const values = allArtworkDetailsResponse
          .filter((result) => result.status === 'fulfilled')
          .map(({ value }) => value)

        this.artworkDetails = values
      } catch (error) {
        console.error('Error fetching artwork details:', error)
        throw new Error('Failed to fetch artwork details')
      } finally {
        this.loading = false
      }
    }
  }
})

// for (const objectId of this.collectionIds) {}
