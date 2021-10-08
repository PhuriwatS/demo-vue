<template>
  <li>
    <strong>Phone:</strong>
    {{ phone }}
  </li>
  <li>
    <strong>Email:</strong>
    {{ email }}
  </li>
  <li>
    <strong>My Friends:</strong>
    {{ myFriends }}
  </li>
</template>

<script>
export default {
  props: {
    phone: {
      type: String,
    },
    email: {
      type: String,
      default: "",
    },
  },
  inject: ["friends"],
  computed: {
    myFriends() {
      return this.friends.map((cv) => cv.name).join(", ");
    },
  },
};
</script>
