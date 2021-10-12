<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //   this.$store.dispatch("increment", { value: 2 });
      this.$store.dispatch({
        type: "increment",
        value: 2,
      });
    },
  },
};
</script>
