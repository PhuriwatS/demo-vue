<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <FriendContactDetail :phone="phone" :email="email" />
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
import FriendContactDetail from "./FriendContactDetail.vue";

export default {
  components: {
    FriendContactDetail,
  },
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      validator: function(value) {
        return isNaN(value);
      },
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      default: "",
    },
    isFavorite: {
      type: Boolean,
    },
  },
  emits: ["toggle-favorite", "delete"],
  // emits: {
  //   "toggle-favorite": function(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing!");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
      // this.$emit("toggle-favorite");
    },
  },
};
</script>
