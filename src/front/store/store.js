import Vue from 'vue'
import Vuex from 'vuex'
import modalModule from './modules/modal'
import authModule from './modules/auth'
import matchesModule from './modules/matches'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    modal: modalModule,
    auth: authModule,
    matches: matchesModule
  }
});
