<script setup lang="ts">
interface ButtonProps {
  isDisabled?: boolean
  loading?: boolean
}

defineProps<ButtonProps>()
</script>

<template>
  <button @click="$emit('onClick')" :disabled="isDisabled" class="button">
    <slot name="loading" v-if="loading">...Loading</slot>
    <slot v-else />
  </button>
</template>

<style scoped lang="scss">
@import "@/styles/global/_base.scss";
.button {
  display: flex;
  align-items: center;
  appearance: none;
  cursor: pointer;
  border: 1px solid $mainBrand;
  border-radius: 0.25rem;
  color: $mainBrand;
  padding: 1rem 2rem;
  background-color: $mainBrandBlack;
  transition: all 0.15s ease-in-out;
  font-size: 1rem;
  line-height: 1.5;

  & svg {
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    border-color: $mainBrand;
    background-color: $mainBrand;
    color: $mainBrandBlack;

    & svg {
      fill: $mainBrandBlack;
    }
  }

  &:active {
    border-color: $mainBrandActive;
    background-color: $mainBrandActive;
    color: $mainBrandBlack;

    & svg {
      fill: $mainBrandBlack;
    }
  }

  &:disabled {
    border-color: $mainBrandDisabled;
    background-color: $mainBrandDisabled;
    color: $mainBrandDisabledText;
    cursor: not-allowed;

    & svg {
      fill: $mainBrandDisabledText;
    }
  }

  // https://stackoverflow.com/questions/37263821/css-buttonfocus
}
</style>
