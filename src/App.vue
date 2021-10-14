<template>
  <base-container title="Vuex">
    <TheCounter />
    <FavoriteValue />
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import ChangeCounter from "./components/ChangeCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    ChangeCounter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
