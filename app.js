Vue.createApp({
  data() {
    return {
      name: 'John',
    };
  },
  computed: {
    fullname() {
      return `${this.name} Doe`;
    }
  },
  methods: {
    resetInput() {
      this.name = 'John';
    }
  }
}).mount('#app');