import { createStore } from "vuex"

export default createStore({
  state: {
    name: 'Biblee'
  },
  // 同步操作
  mutations: {
    changeName(state, val) {
      state.name = val
    }
  },
  // 异步操作
  actions: {
    getData(store, val) {
      setTimeout(()=>{
        store.commit('changeName',val)
      },2000)
    }
  },
  modules: {

  }
})