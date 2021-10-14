export default {
  counter(state) {
    return state.counter;
  },
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.finalCounter;
    return finalCounter > 20 ? 20 : finalCounter;
  },
};
