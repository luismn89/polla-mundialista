const setMatches = (state, data) => {
  state.matches = data;
}
const setActive = (state, data) => state.datesPhases[data.index].active = data.status
const setCurrent = (state, data) => {
  state.datesPhases[data.index].current = data.status;
  state.phaseCurrent = state.datesPhases[data.index].name_key;
}
const setSelected = (state, data) => {
  state.datesPhases.forEach(item => item.selected = false)
  state.datesPhases[data.index].selected = data.status
}
const setSelectedDay = (state, data) => {
  state.datesPhases.forEach(item => {
      item.listDates.forEach(date => date.selected = false)
  })
  state.datesPhases[data.index].listDates[data.indexDays].selected = data.status
}
const clearMatchesList = state => state.matches = [];
const includeFixture = (state, data) => {
  state.datesPhases.forEach(phase => {
      let fixtureDate = null;
      data.forEach(item => {
        if (phase.name_key == item.level.toLowerCase()) {
          fixtureDate = item.dates;
        }
      })
      fixtureDate.forEach(date => {
        let d = date.date_local.split('-')[2],
            m = date.date_local.split('-')[1];
        phase.listDates.forEach( datePhase => {
          if (datePhase.day == d && datePhase.month == m) datePhase.numMatch = date.count
        })
      })
  })
}
const setUpdatePercentBet = (state, data) => {
  state.matches.forEach(item => {
    if (item.id == data.id) {
      item.equip_percent.local_win = data.percent.local_win
      item.equip_percent.visit_win = data.percent.visit_win
      item.user_percent.same_wager = data.percent.same_wager
      item.user_percent.user_wager = true
    }
  })
}
const setMatchStadistic = (state, id) => {
  let match = state.matches.filter(item => item.id == id)
  state.matchStadistic = match[0];
}

const setPhaseCurrent = (state, phase) => state.phaseCurrent = phase;

export default {
  setMatches,
  setActive,
  setCurrent,
  setSelected,
  setSelectedDay,
  setMatchStadistic,
  clearMatchesList,
  includeFixture,
  setPhaseCurrent,
  setUpdatePercentBet
}
