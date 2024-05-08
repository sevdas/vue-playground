<script setup lang="ts">
import BaseLabel from '@/components/BaseLabel/BaseLabel.vue'

interface InputProps {
  id: string
  placeholder?: string
  label: string
  isOptional: boolean
  ssrLabel: boolean
}

const model = defineModel({ required: true }) // value and change handler

defineProps<InputProps>()
</script>

<template>
  <BaseLabel :id="id" :isOptional="isOptional" :ssrLabel="ssrLabel">{{ label }}</BaseLabel>
  <input :placeholder="placeholder" :id="id" :name="id" v-model="model" class="input" />
</template>

<style scoped lang="scss">
@import '@/styles/global/_base.scss';
.input {
  display: block;
  width: 100%;
  border: 1px solid $primary-brand;
  border-radius: $radius-lg;
  background-color: $white;
  color: $black;
  outline: none;
  transition: $transition-default;
  padding: 1rem 1rem;

  &::placeholder {
    color: $primary-brand;
  }

  input[type='search']::-webkit-search-cancel-button {
    filter: grayscale(1);
  }

  .ssrLabel {
    display: none;
  }
}
</style>

<!-- add hover, focus and disabled states, and idealle move into sass variables -->
<!-- replace browser's build-in "x" clear input with custom icon? clear functionality? -->
