<template>
  <h3>finalCounter: {{ finalCounter }}</h3>
  <h3>normalizedCounter: {{ normalizedCounter }}</h3>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // finalCounter() {
    //   return this.$store.getters.finalCounter;
    // },
    // normalizedCounter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters(["finalCounter", "normalizedCounter"]),
  },
};
</script>
