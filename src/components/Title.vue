<template>
  <h1>
    <slot>I'm default title</slot>
  </h1>
  <p v-if="$slots.description">
    <slot name="description"></slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
#app h1 {
  font-style: italic;
}
</style>
