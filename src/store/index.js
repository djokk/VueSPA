import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        profilFoto:[]
    },
    mutations: {
        setFoto(state, payload) {
          state.profilFoto = payload
        },
    },
    actions: {
      SETFOTO({commit} ,payload){
        commit('setFoto', payload)
      }
    },
    getters: {
      profilFoto(state) {
          return state.profilFoto
      },
      // appointments(state) {
      //     return state.appointments
      // }
      // appointments: state => state.appointments,
    }
    
});