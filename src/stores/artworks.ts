import { defineStore } from 'pinia'
import { MMABasePath } from '@/api/apiPaths'

interface Collection {
  objectIDs: number[]
  total: number
}

interface Artwork {
  objectID: number
  department: string
  title: string
  culture: string
  primaryImage: string
  objectName: string
  period: string
  portfolio: string
  artistRole: string
  artistDisplayName: string
  artistNationality: string
  artistBeginDate: string
  artistEndDate: string
  artistWikidata_URL: string
  medium: string
  city: string
  county: string
  region: string
  repository: string

  // ... etc
}

interface ArtworkCollection {
  collection: Collection
  artworkDetails: Artwork[]
  loading?: boolean
}

export const useArtworksStore = defineStore('artworks', {
  state: (): ArtworkCollection => {
    return {
      collection: {
        objectIDs: [],
        total: 0
      },
      artworkDetails: []
    }
  },

  getters: {
    allUniqueDepartments: (state) => {
      const departments = state.artworkDetails.map(({ department }) => department)
      return [...new Set(departments)]
    },

    allUniqueMediums: (state) => {
      const mediums = state.artworkDetails.map(({ medium }) => medium)
      return [...new Set(mediums)]
    },

    artworkByDepartment: (state) => (department: string) => {
      return state.artworkDetails.filter((artwork) => artwork.department === department)
    }
  },

  actions: {
    async fetchArtworks() {
      try {
        const response = await fetch(`${MMABasePath}`)

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
      }
    },

    async fetchAllArtworkDetails() {
      try {
        const allCollectionIds = this.collection.objectIDs

        const allCollectionIdsArray = Object.values(allCollectionIds)

        const allArtworkDetailsResponse = await Promise.all(
          allCollectionIdsArray.map(async (id) => {
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

        {
          /* all settled comes with status*/
        }
        // Filter out fulfilled promises and extract their values
        // const values = allArtworkDetailsResponse
        //   .filter(({ status }) => status === 'fulfilled')
        //   .map(({ value }) => value)

        this.artworkDetails = allArtworkDetailsResponse
      } catch (error) {
        console.error('Error fetching artwork details:', error)
        throw new Error('Failed to fetch artwork details')
      }
    }
  }
})

// for (const objectId of this.collectionIds) {}
