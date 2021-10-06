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
    },
    removeMember(index) {
      this.members.splice(index, 1);
    }
  }
}).mount('#app');