<template>
  <p>Component A</p>
  <label for="likedChar"></label>
  <input type="text" name="likedChar" ref="likedChar" />
  <button @click="setLikedChar">Set Character</button>
  <teleport to="body">
    <ErrorAlert v-if="isInputInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter a few characters...</p>
      <button @click="confirmError">OK</button>
    </ErrorAlert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    setLikedChar() {
      const enteredValue = this.$refs.likedChar.value;
      if (!enteredValue) {
        this.isInputInvalid = true;
      }
    },
    confirmError() {
      this.isInputInvalid = false;
    },
  },
};
</script>
