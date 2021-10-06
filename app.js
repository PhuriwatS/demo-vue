Vue.createApp({
  data() {
    return {
      vueLink: 'https://vuejs.org/',
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