import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    user: {
      first_name: '',
      last_name: '',
      points: 0
    },
    error: '',
    is_logged: false
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
