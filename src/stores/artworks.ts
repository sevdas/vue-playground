import { defineStore } from 'pinia'

interface ArtworkCollection {
  collectionIds: number[]
  total: number
  loading: boolean
}

export const useArtworksStore = defineStore('artworks', {
  state: (): ArtworkCollection => {
    return {
      collectionIds: [],
      total: 0,
      loading: false
    }
  },

  actions: {
    async fetchArtworks() {
      console.log('Fetching artworks...')
      try {
        this.loading = true
        const response = await fetch(
          'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=10|14|21'
        )

        if (response?.ok) {
          const artworkCollection = await response.json()

          this.collectionIds = artworkCollection.objectIDs
          this.total = artworkCollection.total
        }
      } catch (error) {
        console.error('Error fetching artworks:', error)
        throw new Error('Failed to fetch artworks')
      } finally {
        this.loading = false
      }
    }
  }
})

//   const limitedArtIds = artworkCollection.objectIDs.slice(
//     artworkCollection.total - 100,
//     artworkCollection.total
//   )

//   const limitedArtCollection = {
//     objectIDs: limitedArtIds,
//     total: limitedArtIds.length
//   }

//   console.log(limitedArtCollection?.total)
//   console.log(limitedArtCollection?.objectIDs)

//   this.this.total = limitedArtCollection.total
//   this.paramIds = limitedArtCollection.objectIDs
