const getMatches = state => state.matches;
const getDates = state => state.datesPhases;
const getMatchStadistic = state => {
  if (state.matchStadistic == null) {
    return state.matches[0]
  } else {
    return state.matchStadistic
  }
}
const getFixtures = state => state.fixture;
const getPhaseCurrent = state => state.phaseCurrent;

export default {
  getMatches,
  getDates,
  getMatchStadistic,
  getFixtures,
  getPhaseCurrent
}
