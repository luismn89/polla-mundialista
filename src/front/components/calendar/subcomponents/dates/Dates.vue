<template lang="pug" src="./dates.pug"></template>
<style lang="stylus" src="./dates.styl"></style>
<script>
    import { Carousel, Slide } from 'vue-carousel';
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data () {
            return {
            }
        },
        components: {
          Carousel,
          Slide
        },
        computed: {
          ...mapGetters({
            'listDates': 'matches/getDates'
          }),
          calendarDates(){
            let dates = [];
            this.listDates.forEach(item => {
              let aux = dates.concat(item.listDates)
              dates = aux;
            })
            return dates
          },
          positionList() {
            let item = this.listDates.filter(item => item.selected)
            if (item[0]){
              switch (item[0].title) {
                case 'fase de grupos':
                    return 'phase';
                    break;
                case 'octavos':
                    return 'octavos';
                    break;
                case 'cuartos':
                    return 'cuartos';
                    break;
                case 'semifinal':
                    return 'semifinal';
                    break;
                case 'tercer lugar':
                    return 'tercer-lugar';
                    break;
                case 'final':
                    return 'final';
                    break;
              }
            }
          }
        },
        props: ['datenow'],
        methods: {
          ...mapActions({
            'activate': 'matches/activate',
            'makeSelected' : 'matches/makeSelected',
            'setSelectedDay' : 'matches/selectDay',
            'getMatches' : 'matches/getMatches',
            'getFixture' : 'matches/getFixture'
          }),
          isDisabled(el) {
            return el.numMatch == '-' ? 'disabledDate' : ''
          },
          goDayPhase(el, index) {
            this.listDates.forEach((item, indexPhase) => {
              item.listDates.forEach((item, indexDate) => {
                if (item.day == el.day && item.month == el.month) {
                  this.setSelectedDay({
                    index: indexPhase,
                    indexDay: indexDate
                  })
                  // this.activate(indexPhase)
                  this.makeSelected(indexPhase)
                }
              })
            })
          }
        },
        mounted() {
          this.getFixture()
        }
    }
</script>
