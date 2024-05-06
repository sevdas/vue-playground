<script setup lang="ts">
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import BaseButton from '../components/BaseButton.vue'
import { ref, onBeforeMount } from 'vue'
import { gqlClient } from '@/api/contentful/client/Client'
import { getAllBrands } from '@/api/contentful/queries/AllBrands'

const count = ref(0)
const loading = ref(true)

const handleClick = () => {
  count.value++
}

const clear = () => {
  count.value = 0
}

onBeforeMount(async () => {
  try {
    await gqlClient(getAllBrands, { preview: false })
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <Suspense>
    <template #default>
      <main>
        <h1>This is a playground page</h1>

        <BaseButton
          @onClick="handleClick"
          :aria-label="`Clicked ${count} times`"
          :loading="loading"
          variant="primary"
          size="sm"
        >
          Count is: {{ count }}
        </BaseButton>

        <BaseButton @on-click="clear" :loading="loading" variant="secondary" size="md">
          Clear
        </BaseButton>

        <BaseButton aria-label="Hexagonal icon" :loading="loading">
          <EcosystemIcon />
        </BaseButton>

        <BaseButton :isDisabled="true"> Disabled Button </BaseButton>
      </main>
    </template>
    <template #fallback>...Loading</template>
  </Suspense>
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

<!-- look up into different lifecycle methods, and if can CMS can be prefetched? -->
<!-- Adding button variants -->
<!-- Content Type ( what you wanna build? - tennis balls brands ) -->
<!-- shopping card - global - pinia -->
<!-- Label and Input Components -->
<!-- add integration test? -->
