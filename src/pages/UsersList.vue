<template>
  <button @click="goToTeams">Go to teams</button>
  <button @click="goBack">Go back</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  data() {
    return {
      changesSaved: false,
    };
  },
  components: {
    UserItem,
  },
  inject: ["users"],
  methods: {
    goToTeams() {
      this.$router.push("/teams");
    },
    goBack() {
      this.$router.back();
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("UsersList Cmp beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UsersList Cmp beforeRouteLeave");
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        "Are you sure? You got unsaved changes!"
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
