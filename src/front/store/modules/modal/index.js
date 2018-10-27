import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  openedLogin: false,
  openedRegister: false,
  openedLoading: false,
  openedStadistic: false,
  openedRecovery: false,
  openedChangePassword: false,
  openedDialog: false,
  idMatch: '',
  type_dialog: '',
  message_loading: '',
  message_dialog: ''
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
