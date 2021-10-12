<template>
  <button @click="increment({ value: 2 })">Add 2</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    /*
    addOne() {
      //   this.$store.dispatch("increment", { value: 2 });
      this.$store.dispatch({
        type: "increment",
        value: 2,
      });
    },
    */
    ...mapActions(["increment"]),
  },
};
</script>
