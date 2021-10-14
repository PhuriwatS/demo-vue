<template>
  <button @click="increment({ value: 2 })">Add 2</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    /*
    addOne() {
      //   this.$store.dispatch("counterModule/increment", { value: 2 });
      this.$store.dispatch({
        type: "counterModule/increment",
        value: 2,
      });
    },
    */
    ...mapActions("counterModule", ["increment"]),
  },
};
</script>
