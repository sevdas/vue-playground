<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary'
type ButtonsSize = 'sm' | 'md'

interface ButtonProps {
  isDisabled?: boolean
  loading?: boolean
  variant?: ButtonVariant
  size?: ButtonsSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'primary',
  secondary: 'secondary'
}

const sizeClasses: Record<ButtonsSize, string> = {
  sm: 'small',
  md: 'medium'
}

defineProps<ButtonProps>()
</script>

<template>
  <button
    @click="$emit('onClick')"
    :disabled="isDisabled"
    :class="['button', variant && variantClasses[variant], size && sizeClasses[size]]"
  >
    <slot name="loading" v-if="loading">...Loading</slot>
    <slot v-else />
  </button>
</template>

<style scoped lang="scss">
@import '@/styles/global/_base.scss';
.button {
  @include button;

  // https://stackoverflow.com/questions/37263821/css-buttonfocus
}

.primary {
  @include buttonPrimary;
}

.secondary {
  @include buttonSecondary;
}

.small {
  @include buttonSmall;
}

.medium {
  @include buttonMedium;
}
</style>
