<script setup lang="ts">
interface ButtonProps {
  isDisabled?: boolean
  loading?: boolean
}

defineProps<ButtonProps>()
</script>

<template>
  <button @click="$emit('onClick')" :disabled="isDisabled">
    <p v-if="loading">...Loading</p>
    <slot v-else />
  </button>
</template>

<style scoped lang="scss"></style>
