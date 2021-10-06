Vue.createApp({
  data() {
    return {
      name: '',
      fullname: 'John Doe',
    };
  },
  watch: {
    name(lastValue) {
      this.fullname =  `${lastValue} Doe`;
    }
  },
  // computed: {
  //   fullname() {
  //     return `${this.name} Doe`;
  //   }
  // },
  methods: {
    resetInput() {
      this.name = '';
      this.fullname = 'John Doe';
    }
  }
}).mount('#app');