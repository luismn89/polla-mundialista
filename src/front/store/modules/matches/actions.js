import API from '../../../services/api'

const getMatches = (context, date) => {
  API.fetchMatches(date)
    .then(response => {
      context.commit('clearMatchesList')
      context.commit('setMatches', response.body)
    })
    .catch(error => {
      console.log(error)
    })
}
const activate = (context, index) => context.commit('setActive', {
  index: index,
  status: true
})
const deactivate = (context, index) => context.commit('setActive', {
  index: index,
  status: false
})
const makeCurrent = (context, index) => context.commit('setCurrent', {
  index: index,
  status: true
})
const notCurrent = (context, index) => context.commit('setCurrent', {
  index: index,
  status: false
})
const makeSelected = (context, index) => context.commit('setSelected', {
  index: index,
  status: true
})
const deselected = (context, index) => context.commit('setSelected', {
  index: index,
  status: false
})
const selectDay = (context, data) => {
  context.commit('setSelectedDay',  {
    index: data.index,
    indexDays: data.indexDay,
    status: true
  })
  let phaseDay = context.state.datesPhases[data.index].listDates[data.indexDay]
  context.dispatch('getMatches' , {
    day: phaseDay.day,
    month: phaseDay.month,
    ano: '2018'
  })
}
const setBetMatch = (context, data) => {
  API.betMatch(data.id, data.databet)
    .then(response => {
      // console.log('response:', response)
      context.commit('setUpdatePercentBet', {id: data.id, percent: response.body.percents})
      context.dispatch('modal/showDialog', { type: 'success', message: 'Su resultado fue registrado exitosamente.' }, { root: true })
      context.dispatch('renderListMatches', null)
    })
    .catch(error => {
      console.log('error:', error)
      // context.dispatch('modal/showDialog', { type: 'error', message: `${error}.` }, { root: true })
    })
}
const getFixture = (context) => {
  API.fetchFixture()
    .then(response => {
      context.commit('includeFixture', response.body)
    })
    .catch(error => {
      console.log(error)
    })
}
const searchStadistic = (context, id) => context.commit('setMatchStadistic', id)
const setPhaseCurrent = (context, phase) => context.commit('setPhaseCurrent', phase)
const renderListMatches = (context) => {
  let phaseDay = null;
  context.state.datesPhases.forEach(phase => {
    if (phase.selected) {
      phaseDay = phase.listDates.filter(item => item.selected)
    }
  })
  if (phaseDay && phaseDay.length > 0) {
    context.dispatch('getMatches', {
      day: phaseDay[0].day,
      month: phaseDay[0].month,
      ano: '2018'
    })
  }
}

export default {
  getMatches,
  activate,
  deactivate,
  makeCurrent,
  notCurrent,
  makeSelected,
  deselected,
  selectDay,
  setBetMatch,
  getFixture,
  searchStadistic,
  setPhaseCurrent,
  renderListMatches
}

