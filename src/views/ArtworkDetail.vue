<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useArtworksStore } from '@/stores/artworks'

const route = useRoute()

const artworksStore = useArtworksStore()

console.log({ artworksStore })

onMounted(async () => {
  await artworksStore.fetchArtworks()

  const artworkId = parseInt(route.params.id ?? '')
  if (artworkId) {
    await artworksStore.fetchArtworksDetails(artworkId)
  }
})
</script>

<template>
  <main>
    <h1>Artwork Detail</h1>

    <p>{{ route.params.id }}</p>

    <div v-if="artworksStore.loading">Loading...</div>
    <ul v-else>
      <li>{{ artworksStore.allArtworkDetails }}</li>
      <!-- <img :src="artworksStore.artwork.primaryImage" :alt="artwork.title" /> -->
    </ul>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
