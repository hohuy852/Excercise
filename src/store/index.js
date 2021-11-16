import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
  },
  actions: {
    login({ commit }) {
      commit('LOG_IN')
    },
    logout({ commit }) {
      commit('LOG_OUT')
    }
  },
  mutations: {
    LOG_IN(state) {
      state.auth = true
    },
    LOG_OUT(state) {
      state.auth = false
    },
  },

  modules: {
  }
})
