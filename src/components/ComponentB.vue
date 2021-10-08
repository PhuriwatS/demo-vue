<template>
  <p>Component B</p>
  <div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
  </div>
  <div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
  </div>
  <p>Checked names: {{ checkedNames }}</p>
  <p>Picked: {{ picked }}</p>
</template>

<script>
export default {
  data() {
    return {
      checkedNames: [],
      picked: "One",
    };
  },
};
</script>

<style scoped>
div {
  margin-bottom: 1rem;
}
</style>
