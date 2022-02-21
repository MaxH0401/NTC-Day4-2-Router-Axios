import { createStore } from 'vuex'

export default createStore({
  state: {
    message: 'Hey Mate!',

    name: 'Max',
    age: 27,
    job: 'student'

  },
  getters: {
    title(state) {
      return `${state.name}:${state.job}`
    },
    fullTitle(state, getters) {
      return `${getters.title},${state.age} 歲`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
