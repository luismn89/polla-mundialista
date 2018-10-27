import Request from 'superagent'
import Cookie from 'js-cookie'

// BASEDIR
// const BASE = '/mundial/polla/api/v1';
const BASE = 'https://elbocon.pe/mundial/polla/api/v1';

// URLS APIS
const URL_LOGIN = `${BASE}/login/`
const URL_REGISTER = `${BASE}/user/new/`
const URL_USER_LOGGED = `${BASE}/user/`
const URL_RECOVERY = `${BASE}/account/change-password/send/`
const URL_CHANGE_PASS = `${BASE}/account/change-password/`
const URL_FIXTURE = `${BASE}/fixture/`
const URL_WINNERS = `${BASE}/winners/`
const URL_MATCHES = (ano, month, day) => `${BASE}/matches/${ano}/${month}/${day}/`
const URL_MATCH = (id) => `${BASE}/match/${id}/score/`

// METHODS
const login = data => Request.post(URL_LOGIN).set('X-CSRFToken', Cookie.get('csrftoken')).send(data)
const register = data => Request.post(URL_REGISTER).set('X-CSRFToken', Cookie.get('csrftoken')).send(data)
const userLogged = () => Request.get(URL_USER_LOGGED)
const send_recovery = data => Request.post(URL_RECOVERY).set('X-CSRFToken', Cookie.get('csrftoken')).send(data)
const change_pass = data => Request.post(URL_CHANGE_PASS).set('X-CSRFToken', Cookie.get('csrftoken')).send(data)
const fetchFixture = () => Request.get(URL_FIXTURE).set('X-CSRFToken', Cookie.get('csrftoken'))
const fetchWinners = () => Request.get(URL_WINNERS).set('X-CSRFToken', Cookie.get('csrftoken'))
const fetchMatches = data => Request.get(URL_MATCHES(data.ano, data.month, data.day))
const betMatch = (id, data) => Request.post(URL_MATCH(id)).set('X-CSRFToken', Cookie.get('csrftoken')).send(data)

export default {
  login,
  register,
  userLogged,
  send_recovery,
  change_pass,
  fetchFixture,
  fetchWinners,
  fetchMatches,
  betMatch
};
