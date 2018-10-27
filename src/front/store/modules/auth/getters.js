const getError = state => state.error;
const userIsLogged = state => state.is_logged;
const getUser = state => state.user;
// const getPointPhaseCurrent = state => state.user.points.filter(item => item.current)

export default {
  getError,
  getUser,
  userIsLogged,
  // getPointPhaseCurrent
}
