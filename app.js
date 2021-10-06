Vue.createApp({
  data() {
    return {
      members: [],
      name: "",
    };
  },
  methods: {
    addMember() {
      this.members.push(this.name);
      this.name = "";
    },
    removeMember(index) {
      this.members.splice(index, 1);
    },
  },
}).mount("#app");

Vue.createApp({
  template: `
    <h2>{{ serviceName }}</h2>
  `,
  data() {
    return {
      serviceName: "Other Service",
    };
  },
}).mount("#app2");
