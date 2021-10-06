const app = Vue.createApp({
  data() {
    return {
      members: [],
      name: "",
    };
  },
  methods: {
    addMember() {
      this.members.push(this.$refs.name.value);
      this.name = "";
    },
    removeMember(index) {
      this.members.splice(index, 1);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <h2>{{ serviceName }}</h2>
  `,
  data() {
    return {
      serviceName: "Other Service",
    };
  },
});

app2.mount("#app2");
