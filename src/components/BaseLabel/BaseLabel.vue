<script setup lang="ts">
interface LabelProps {
  id: string
  isOptional?: boolean
}

defineProps<LabelProps>()
</script>

<template>
  <label :for="id" class="label">
    <slot />
    <span v-if="isOptional">&nbsp;(Optional)</span>
  </label>
</template>

<style scoped lang="scss">
.label {
  display: flex;
}
</style>
