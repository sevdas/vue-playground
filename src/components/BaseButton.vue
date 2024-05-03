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
.button {
  display: flex;
  align-items: center;
  appearance: none;
  cursor: pointer;
  border: 1px solid #00bd7e;
  border-radius: 0.25rem;
  color: #00bd7e;
  padding: 1rem 2rem;
  background-color: #181818;
  transition: all 0.15s ease-in-out;
  font-size: 1rem;
  line-height: 1.5;

  & svg {
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    border-color: #00bd7e;
    background-color: #00bd7e;
    color: #181818;

    & svg {
      fill: #919191;
    }
  }

  &:active {
    border-color: #006946;
    background-color: #006946;
    color: #181818;

    & svg {
      fill: #181818;
    }
  }

  &:disabled {
    border-color: #c8c8c8;
    background-color: #c8c8c8;
    color: #919191;
    cursor: not-allowed;

    & svg {
      fill: #919191;
    }
  }

  // https://stackoverflow.com/questions/37263821/css-buttonfocus
}
</style>
