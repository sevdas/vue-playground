<script setup lang="ts">
interface InputProps {
  id: string
  placeholder?: string
}

const modelValue = defineModel({ required: true })

defineProps<InputProps>()
</script>

<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    :id="id"
    :name="id"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="input"
  />
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
}
</style>

<!-- add hover, focus and disabled states, and idealle move into sass variables -->
<!-- replace browser's build-in "x" clear input with custom icon? clear functionality? -->
<!-- integrade label and make it prop hidden ssrLabel -->
