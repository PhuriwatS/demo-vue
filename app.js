const app = Vue.createApp({
  data() {
    return {
      isDetailVisible: false,
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
  methods: {
    toggleDetails() {
      this.isDetailVisible = !this.isDetailVisible;
    },
  },
});

app.mount("#app");
