Vue.createApp({
  data() {
    return {
      name: 'John',
    };
  },
  methods: {
    outputFullname() {
      return `${this.name} Doe`;
    },
    resetInput() {
      this.name = 'John';
    }
  }
}).mount('#app');