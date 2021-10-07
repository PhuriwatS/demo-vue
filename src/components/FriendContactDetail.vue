<template>
  <li>
    <strong>Phone:</strong>
    {{ phone }}
  </li>
  <li>
    <strong>Email:</strong>
    {{ email }}
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
};
</script>
