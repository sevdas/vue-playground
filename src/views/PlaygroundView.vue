<script setup lang="ts">
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { ref, onBeforeMount } from 'vue'
import { gqlClient } from '@/api/contentful/client/Client'
import { getAllBrands } from '@/api/contentful/queries/AllBrands'
import BaseLabel from '@/components/BaseLabel.vue'
import SearchInput from '@/components/SearchInput.vue'
import TextInput from '@/components/TextInput.vue'

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

        <BaseLabel :isOptional="true" id="inputId"> Hello, I am an optional label </BaseLabel>

        <BaseLabel id="inputId"> Hello, I am just a label</BaseLabel>

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

        <BaseButton :is-disabled="true"> Disabled Button </BaseButton>

        <form>
          <BaseLabel :isOptional="true" id="formId">Form Label</BaseLabel>
          <p>{{ searchedValue }}</p>
          <SearchInput
            id="formId"
            :modelValue="searchedValue"
            type="search"
            placeholder="Search..."
            @update:modelValue="(newValue) => (searchedValue = newValue)"
          />

          <p>{{ textValue }}</p>
          <TextInput
            id="textFormId"
            v-model="textValue"
            label="I am a Text Input"
            type="text"
            :isOptional="false"
            placeholder="Type something..."
          />

          <BaseButton type="submit">Submit Button</BaseButton>
        </form>
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

<!-- Content Type ( what you wanna build? - tennis balls brands ) -->
<!-- shopping card - global - pinia -->
<!-- Label and Input Components -->
<!-- add integration test? -->
<!-- add eslint rule for folder import order -->
