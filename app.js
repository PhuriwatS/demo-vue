Vue.createApp({
  data() {
    return {
      members: [],
      name: '',
    };
  },
  methods: {
    addMember() {
      this.members.push(this.name);
      this.name = '';
    }
  }
}).mount('#app');