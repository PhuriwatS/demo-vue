<template>
  <h1>
    <slot></slot>
  </h1>
  <p>
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
