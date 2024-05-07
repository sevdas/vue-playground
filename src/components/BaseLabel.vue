<script setup lang="ts">
interface LabelProps {
  htmlIdFor: string
  isOptional?: boolean
}

defineProps<LabelProps>()
</script>

<template>
  <label :for="htmlIdFor" class="label">
    <slot />
    <span v-if="isOptional">&nbsp;(Optional)</span>
  </label>
</template>

<style scoped lang="scss">
.label {
  display: flex;
}
</style>
