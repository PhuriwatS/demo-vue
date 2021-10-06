Vue.createApp({
  data() {
    return {
      vueLink: 'https://vuejs.org/',
      outputHtml: '<h2>Sample HTML Header</h2>',
      name: '',
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    }
  }
}).mount('#app');