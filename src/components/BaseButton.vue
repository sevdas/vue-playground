<script setup lang="ts">
import type { Slot } from 'vue'

defineProps<{ children: Slot; onClick: () => void; required: true }>()
defineEmits(['onClick'])
</script>

<template>
  <button @onClick="$emit('onClick')">{{ children }}</button>
</template>

<style scoped lang="scss"></style>
