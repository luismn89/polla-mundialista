const setUserLogin = (state, data) => {
  state.user.first_name = data.first_name
  state.user.last_name = data.last_name
  state.user.points = data.points 
}
const setFlagLogin = state => state.is_logged = true
const setError = (state, error) => state.error = error

export default {
  setUserLogin,
  setFlagLogin,
  setError
}
