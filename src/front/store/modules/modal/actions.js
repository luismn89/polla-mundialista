const showLogin = context => {
  context.commit('toogleLogin', true)
  context.commit('toogleRegister', false)
  context.commit('toogleRecovery', false)
  context.commit('toogleLoading', false)
}
const showRegister = context => {
  context.commit('toogleRegister', true)
  context.commit('toogleLogin', false)
  context.commit('toogleLoading', false)
}
const showLoading = (context, message) => {
  // console.log('entra')
  context.commit('toogleLoading', true)
  context.commit('toogleRegister', false)
  context.commit('toogleLogin', false)
  context.commit('toogleRecovery', false)
  context.commit('setMessageLoading', message)
}
const showStadistic = (context, id) => {
  context.dispatch('matches/searchStadistic', id, { root: true })
  context.commit('toogleStadistic', true)
}
const showDialog = (context, data) => {
  context.commit('setTypeDialog', data.type)
  context.commit('setMessageDialog', data.message)
  context.commit('toogleDialog', true)
  context.commit('toogleLoading', false)
}
const showRecovery = context => {
  context.commit('toogleRecovery', true)
  context.commit('toogleLogin', false)
  context.commit('toogleLoading', false)
}
const showChangePass = context => {
  context.commit('toogleChangePassword', true)
}
const hideLoading = (context) => context.commit('toogleLoading', false)
const closeModal = context => context.commit('close')

export default {
  showLogin,
  showRegister,
  showLoading,
  showStadistic,
  showDialog,
  showRecovery,
  showChangePass,
  hideLoading,
  closeModal
}
