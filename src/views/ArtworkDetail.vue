<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import { useArtworksStore } from '@/stores/artworks'

const route = useRoute()
const loading = ref(true)

const artworksStore = useArtworksStore()

// automatically update when the data depends on changes.
const department = computed(() => route.params.id)
const artworks = computed(() => artworksStore.artworkByDepartment(department.value as string))

onMounted(async () => {
  await artworksStore.fetchArtworks()
  await artworksStore.fetchAllArtworkDetails()

  loading.value = false
})
</script>

<template>
  <div v-if="loading">Loading...</div>
  <main v-else>
    <h1>Artwork Detail</h1>

    <ul v-if="artworks.length > 0" style="display: flex; flex-direction: column; gap: 3rem">
      <li v-for="artwork in artworks" :key="artwork.title" style="border-bottom: 1px solid red">
        <img
          v-if="artwork.primaryImage"
          :src="artwork.primaryImage"
          alt="Artwork Image"
          style="max-width: 100px; max-height: 100px"
        />
        <a v-else :href="artwork?.artistWikidata_URL" target="_blank" rel="noopener noreferrer">
          View Artwork on MMA
        </a>
        <p>{{ artwork.title }}</p>
        <p>{{ artwork.medium }}</p>
        <p>{{ artwork.culture }}</p>
        <p>{{ artwork.period }}</p>
      </li>
    </ul>
    <p v-else>No artworks available</p>
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

<!-- The rel="noopener noreferrer" is to prevent the newly opened tab from being able to modify the original tab maliciously. 
  For more information about this vulnerability read the following articles: 
https://dev.to/ben/the-targetblank-vulnerability-by-example
https://support.detectify.com/support/solutions/articles/48001048981-external-links-using-target-blank-
-->
