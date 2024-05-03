<script setup lang="ts">
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import BaseButton from '../components/BaseButton.vue'
import { ref, onMounted } from 'vue'
import { gqlClient } from '@/api/contentful/client/Client';
import {getAllBrands} from "@/api/contentful/queries/AllBrands"

const count = ref(0)
const loading = ref(false)

const handleClick = () => {
  count.value++
}

const clear = () => {
  count.value = 0
}

onMounted(async () => {
  const contentfulResponse = await gqlClient(getAllBrands, { preview: false });
  loading.value = true

  console.log({contentfulResponse})
})

setTimeout(() => {
  loading.value = false
}, 2000)


</script>

<template>
  <main>
    <h1>This is a playground page</h1>

    <BaseButton @on-click="handleClick" :aria-label="`Clicked ${count} times`" :loading="loading">
      Count is: {{ count }}
    </BaseButton>

    <BaseButton @on-click="clear" :loading="loading">
      Clear
    </BaseButton>

    <BaseButton aria-label="Hexagonal icon" :loading="loading">
      <EcosystemIcon />
    </BaseButton>

    <BaseButton :isDisabled="true">
      Disabled Button
    </BaseButton>
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

<!-- add integration test? -->
<!-- plan what to build -->
<!-- look up into different lifecycle methods, and if can CMS can be prefetched? -->
<!-- env variables in Vue-->
<!-- Content Type ( what you wanna build? - tennis balls brands ) -->
<!-- Label and Input Components -->
<!-- shopping card - global - pinia -->
