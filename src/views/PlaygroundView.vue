<script setup lang="ts">
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { ref, onMounted } from 'vue'
import BaseLabel from '@/components/BaseLabel/BaseLabel.vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import TextInput from '@/components/TextInput/TextInput.vue'

import { useArtworksStore } from '@/stores/artworks'

const artworksStore = useArtworksStore()

const count = ref(0)
const searchedValue = ref('')
const textValue = ref('')
const loading = ref(true)

const handleClick = () => {
  count.value++
}

const clear = () => {
  count.value = 0
}

onMounted(async () => {
  await artworksStore.fetchArtworks()
  await artworksStore.fetchAllArtworkDetails()

  loading.value = false // use reactive load instead of global shared loading ?
})
</script>

<template>
  <!-- <Suspense>
    <template #default> -->

  <div v-if="loading">Loading...</div>
  <main v-else>
    <h1>This is a playground page</h1>

    <ul v-if="artworksStore.allUniqueDepartments.length > 0">
      <li v-for="department in artworksStore.allUniqueDepartments" :key="department">
        <router-link :to="`/playground/${department}`">{{ department }}</router-link>
      </li>
    </ul>
    <p v-else>No departments available</p>

    <BaseButton
      @onClick="handleClick"
      :aria-label="`Clicked ${count} times`"
      :loading="false"
      variant="primary"
      size="sm"
    >
      Count is: {{ count }}
    </BaseButton>

    <BaseButton @on-click="clear" variant="secondary" size="md" :loading="artworksStore.loading">
      Clear
    </BaseButton>

    <BaseButton aria-label="Hexagonal icon">
      <EcosystemIcon />
    </BaseButton>

    <BaseButton :is-disabled="true"> Disabled Button </BaseButton>

    <BaseLabel :isOptional="true" id="formId" :ssrLabel="true">
      My label is only accessible to the screen readers
    </BaseLabel>

    <form>
      <p>{{ searchedValue }}</p>
      <SearchInput
        id="formId"
        :modelValue="searchedValue"
        type="search"
        placeholder="Search..."
        :ssrLabel="true"
        @update:modelValue="(newValue) => (searchedValue = newValue)"
      />

      <p>{{ textValue }}</p>
      <TextInput
        id="textFormId"
        v-model="textValue"
        label="I am a Text Input"
        type="text"
        :isOptional="true"
        placeholder="Type something..."
      />

      <BaseButton type="submit">Submit Button</BaseButton>
    </form>
  </main>
</template>
<!-- <template #fallback>Loading...</template>
  </Suspense>
</template> -->

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<!-- TODO -->
<!-- add integration test? -->
<!-- add eslint rule for folder import order -->
<!-- Suspense, how to implement? -->
