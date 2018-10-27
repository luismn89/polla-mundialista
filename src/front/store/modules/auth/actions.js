import API from '../../../services/api'

const loginUser = (context, dataLogin) => {
  API.login(dataLogin)
    .then(response => {
      context.commit('setUserLogin', response.body)
      context.commit('setFlagLogin')
      context.dispatch('modal/closeModal', null, { root: true })
      context.dispatch('matches/renderListMatches', null, { root: true })
    })
    .catch(error => {
      console.log('error')
      context.dispatch('modal/showLogin', null, {root: true})
      context.commit('setError', JSON.parse(error.response.text).error)
    })
}
const registerUser = (context, dataRegister) => {
  API.register(dataRegister)
    .then(response => {
      context.commit('setUserLogin', response.body)
      context.commit('setFlagLogin')
      context.dispatch('modal/closeModal', null, { root: true })
      context.dispatch('matches/renderListMatches', null, { root: true })
    })
    .catch(error => {
      context.dispatch('modal/showRegister', null, { root: true })
      console.log(error.response)
      context.commit('setError', JSON.parse(error.response.text).error)
    })
}
const fetchUser = (context) => {
  API.userLogged()
    .then(response => {
      let resp = response.body
      if (!resp.error) {
        context.commit('setUserLogin', resp)
        context.commit('setFlagLogin')
      } else
        context.dispatch('modal/showLogin', null, { root: true })
    })
    .catch(error => {
      context.dispatch('modal/showLogin', null, { root: true })
    })
}
const resetPassword = (context, dataReset) => {
  API.change_pass(dataReset)
    .then(response => {
      setTimeout(() => {
        window.location.href = window.location.origin + '/mundial/polla/'
      }, 250);
      context.dispatch('modal/showDialog', { type: 'success', message: `${response.body.message}.` }, { root: true })
    })
    .catch(error => {
      context.dispatch('modal/hideLoading', null, { root: true })
      let errorReq = (JSON.parse(error.response.text).detail) ? JSON.parse(error.response.text).detail : JSON.parse(error.response.text).error
      context.commit('setError', errorReq)
    })
}
const sendMailRecovery = (context, dataRecovery) => {
  API.send_recovery(dataRecovery)
    .then(response => {
      context.dispatch('modal/showDialog', { type: 'success', message: `${response.body.message}.` }, { root: true })
    })
    .catch(error => {
      context.dispatch('modal/showRecovery', null, { root: true })
      context.commit('setError', JSON.parse(error.response.text).error)
    })
}

export default {
    loginUser,
    registerUser,
    fetchUser,
    resetPassword,
    sendMailRecovery
}

