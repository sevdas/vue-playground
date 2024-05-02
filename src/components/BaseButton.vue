<script setup lang="ts">
interface ButtonProps {
  isDisabled?: boolean
  loading?: boolean
}

defineProps<ButtonProps>()
</script>

<template>
  <button @click="$emit('onClick')" :disabled="isDisabled">
    <slot name="loading" v-if="loading">...Loading</slot>
    <slot v-else />
  </button>
</template>

<style scoped lang="scss"></style>
