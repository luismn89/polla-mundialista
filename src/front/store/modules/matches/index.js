import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  datesPhases: [
    {
      title: 'fase de grupos',
      name_key: 'fase de grupos',
      active: false,
      current: false,
      selected: false,
      limitDates: { begin: '14/06', end: '28/06' },
      listDates: [
        // { day: '06', month: '06', dayName: 'Mie.', dayMatch: 'active', selected: false, numMatch: '0' },
        // { day: '07', month: '06', dayName: 'Jue.', dayMatch: 'active', selected: false, numMatch: '0' },
        // { day: '08', month: '06', dayName: 'Vie.', dayMatch: 'active', selected: false, numMatch: '0' },
        // { day: '09', month: '06', dayName: 'Sáb.', dayMatch: 'active', selected: false, numMatch: '0' },
        // { day: '10', month: '06', dayName: 'Dom.', dayMatch: 'active', selected: false, numMatch: '0' },
        // { day: '11', month: '06', dayName: 'Lun.', dayMatch: 'active', selected: false, numMatch: '0' },
        // { day: '12', month: '06', dayName: 'Mar.', dayMatch: 'active', selected: false, numMatch: '0' },
        // { day: '13', month: '06', dayName: 'Mie.', dayMatch: 'active', selected: false, numMatch: '0' },
        { day: '14', month: '06', dayName: 'Jue.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '15', month: '06', dayName: 'Vie.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '16', month: '06', dayName: 'Sáb.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '17', month: '06', dayName: 'Dom.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '18', month: '06', dayName: 'Lun.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '19', month: '06', dayName: 'Mar.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '20', month: '06', dayName: 'Mie.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '21', month: '06', dayName: 'Jue.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '22', month: '06', dayName: 'Vie.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '23', month: '06', dayName: 'Sáb.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '24', month: '06', dayName: 'Dom.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '25', month: '06', dayName: 'Lun.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '26', month: '06', dayName: 'Mar.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '27', month: '06', dayName: 'Mie.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '28', month: '06', dayName: 'Jue.', dayMatch:'active', selected: false, numMatch: '0' }
      ]
    },
    {
      title: 'octavos',
      name_key: 'octavos de final',
      active: false,
      current: false,
      selected: false,
      limitDates: { begin: '30/06', end: '03/07' },
      listDates: [
        { day: '29', month: '06', dayName: 'Vie.', dayMatch:'inactive', selected: false, numMatch: '-' },
        { day: '30', month: '06', dayName: 'Sáb.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '01', month: '07', dayName: 'Dom.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '02', month: '07', dayName: 'Lun.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '03', month: '07', dayName: 'Mar.', dayMatch:'active', selected: false, numMatch: '0' }
      ]
    },
    {
      title: 'cuartos',
      name_key: 'cuartos de final',
      active: false,
      current: false,
      selected: false,
      limitDates: { begin: '06/07', end: '07/07' },
      listDates: [
        { day: '04', month: '07', dayName: 'Mie.', dayMatch:'inactive', selected: false, numMatch: '-' },
        { day: '05', month: '07', dayName: 'Jue.', dayMatch:'inactive', selected: false, numMatch: '-' },
        { day: '06', month: '07', dayName: 'Vie.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '07', month: '07', dayName: 'Sáb.', dayMatch:'active', selected: false, numMatch: '0' }
      ]
    },
    {
      title: 'semifinal',
      name_key: 'semifinal',
      active: false,
      current: false,
      selected: false,
      limitDates: { begin: '10/07', end: '11/07' },
      listDates: [
        { day: '08', month: '07', dayName: 'Dom.', dayMatch:'inactive', selected: false, numMatch: '-' },
        { day: '09', month: '07', dayName: 'Lun.', dayMatch:'inactive', selected: false, numMatch: '-' },
        { day: '10', month: '07', dayName: 'Mar.', dayMatch:'active', selected: false, numMatch: '0' },
        { day: '11', month: '07', dayName: 'Mie.', dayMatch:'active', selected: false, numMatch: '0' }
      ]
    },
    {
      title: 'tercer lugar',
      name_key: 'tercer puesto',
      active: false,
      current: false,
      selected: false,
      limitDates: { begin: '14/07' },
      listDates: [
        { day: '12', month: '07', dayName: 'Jue.', dayMatch:'inactive', selected: false, numMatch: '-' },
        { day: '13', month: '07', dayName: 'Vie.', dayMatch:'inactive', selected: false, numMatch: '-' },
        { day: '14', month: '07', dayName: 'Sáb.', dayMatch:'active', selected: false, numMatch: '0' }
      ]
    },
    {
      title: 'final',
      name_key: 'final',
      active: false,
      current: false,
      selected: false,
      limitDates: { begin: '15/07' },
      listDates: [
        { day: '15', month: '07', dayName: 'Dom.', dayMatch:'active', selected: false, numMatch: '0' }
      ]
    }
  ],
  matches: [],
  phaseCurrent: '',
  matchStadistic: null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
