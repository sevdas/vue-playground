<script setup lang="ts">
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Button :onClick="increment" aria-label="Click">{{ count }}</Button>
    <Button label="Explore Ecosystem"><EcosystemIcon /></Button>
    <Button>I am a teaser button!</Button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
