<template lang="pug" src="./phases.pug"></template>
<style lang="stylus" src="./phases.styl"></style>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data () {
            return {
                options: {
                    infinite: true,
                    arrows: true,
                    dots: false
                }
            }
        },
        props: ['type', 'origin', 'datenow'],
        watch: {
          phaseCurrent(newVal, oldVal){
            this.listPhases.forEach((item, index) => {
              if (item.name_key == this.phaseCurrent) {
                this.$refs.carousel.setSlide(index)
              }
            })
          }
        },
        computed: {
          ...mapGetters({
            'phaseCurrent' : 'matches/getPhaseCurrent',
            'listPhases' : 'matches/getDates'
          }),
        },
        methods: {
          ...mapActions({
              'activate': 'matches/activate',
              'deactivate': 'matches/deactivate',
              'makeCurrent': 'matches/makeCurrent',
              'notCurrent': 'matches/notCurrent',
              'makeSelected' : 'matches/makeSelected',
              'saveDaySelected' : 'matches/selectDay',
              'setPhaseCurrent' : 'matches/setPhaseCurrent'
          }),
          setSelectedDay(day, month, listDays, indexPhase) {
            let dayCurrentInactive = false;
            listDays.forEach( (item, index) => {
              if (item.day == day && item.month == month){
                if (item.dayMatch == 'active') {
                  this.saveDaySelected({ index: indexPhase, indexDay: index })
                } else {
                  listDays.forEach( (el, index) => {
                    if (el.dayMatch == 'active') {
                      this.saveDaySelected({ index: indexPhase, indexDay: index })
                    }
                  })
                }
              }
            })
          },
          isActiveCurrent(dateNow, dateBeginPhase, dateBeginNextPhase, index) {
              let splitDateBPhase = dateBeginPhase.split('/'),
                  formatDBPhase = new Date(`2018-${splitDateBPhase[1]}-${splitDateBPhase[0]}`).getTime(),
                  splitDateBNextPhase = (dateBeginNextPhase) ? dateBeginNextPhase.split('/') : '',
                  formatDBNPhase = (splitDateBNextPhase.length) ? new Date(`2018-${splitDateBNextPhase[1]}-${splitDateBNextPhase[0]}`).getTime() : '',
                  phaseGroup = new Date('2018-06-14').getTime();
              if (dateNow >= formatDBPhase) this.activate(index)
              else {
                if (formatDBPhase == phaseGroup) this.activate(index)
              }
              let d = new Date(dateNow),
                  day = d.getDate(),
                  month = d.getMonth() + 1;
              if (formatDBNPhase != ""){
                  if (dateNow >= formatDBPhase && dateNow < formatDBNPhase) {
                    this.makeCurrent(index)
                    this.makeSelected(index)
                    if (window.location.pathname.indexOf('/ganadores') == -1) {
                      this.setSelectedDay(day, month, this.listPhases[index].listDates, index)
                    }
                  } else if (dateNow <= formatDBPhase && formatDBPhase == phaseGroup) {
                    this.makeCurrent(index)
                    this.makeSelected(index)
                    if (window.location.pathname.indexOf('/ganadores') == -1) {
                      this.setSelectedDay('14', '06', this.listPhases[index].listDates, index)
                    }
                  }
              } else {
                if (dateNow >= formatDBPhase) {
                  this.makeCurrent(index)
                  this.makeSelected(index)
                  if (window.location.pathname.indexOf('/ganadores') == -1) {
                    this.setSelectedDay(day, month, this.listPhases[index].listDates, index)
                  }
                }
              }
          },
          phasesComplete() {
            let dateNow = this.datenow.getTime()
            this.listPhases.forEach((item, index) => {
              this.isActiveCurrent(
                  dateNow,
                  item.limitDates.begin,
                  (index + 1 < this.listPhases.length) ? this.listPhases[index + 1].limitDates.begin : null,
                  index
              )
            })
          },
          goPhase(indexSelected) {
            this.listPhases.forEach((item, index) => {
                if (indexSelected >= index) {
                  this.activate(index)
                  this.makeSelected(index)
                  this.setPhaseCurrent(item.name_key)
                } else this.deactivate(index)
            })
          },
          goSlidePhase(evt) {
              evt.preventDefault();
              let active = document.querySelector('.agile__slide--active'),
                    ind = active.dataset.index;
              this.goPhase(ind)
          }
        },
        mounted() {
          this.phasesComplete();
          if (this.type) {
            let btn_next = document.querySelector('.agile__arrow--next'),
                btn_prev = document.querySelector('.agile__arrow--prev');
            btn_next.addEventListener('click', this.goSlidePhase)
            btn_prev.addEventListener('click', this.goSlidePhase)
          }
        }
    }
</script>
