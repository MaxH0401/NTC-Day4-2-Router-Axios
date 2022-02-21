import { createStore } from 'vuex'
import axios from 'axios'
//action就要記得用axios

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
      return `${getters.title}，${state.age} 歲`
    }
  },
  mutations: {
    setTitle(state, data){
      state.name = data.name
      state.job = data.job
    }
  },
  actions: {
    setTitleByApi(copyVueX, data){
      axios.get(`https://jsonplaceholder.typicode.com/users/${data.id}`)
           .then(res => copyVueX.commit('setTitle', res.data))
           //copyVueX是可以自取的參數名稱，實際是取整個Vuex
    }
  },
  modules: {
  }
})
