const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0812223333",
          email: "manuel@gmail.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0814445555",
          email: "julie@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ isDetailVisible ? "Hide" : "Show"}} Details
      </button>
      <ul v-if="isDetailVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      isDetailVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0812223333",
        email: "manuel@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailVisible = !this.isDetailVisible;
    },
  },
});

app.mount("#app");
