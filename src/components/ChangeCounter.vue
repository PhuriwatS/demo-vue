<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //   this.$store.commit("increment", { value: 2 });
      this.$store.commit({
        type: "increment",
        value: 2,
      });
    },
  },
};
</script>
