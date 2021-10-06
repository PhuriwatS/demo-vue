Vue.createApp({
  data() {
    return {
      vueLink: 'https://vuejs.org/',
      outputHtml: '<h2>Sample HTML Header</h2>',
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');