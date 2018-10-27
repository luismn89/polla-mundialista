<template lang="pug" src="./calendar.pug"></template>
<style lang="stylus" src="./calendar.styl"></style>
<script>
    import Phases from './subcomponents/phases/Phases.vue'
    import ListDates from './subcomponents/dates/Dates.vue'

    export default {
        data () {
            return {
              currentDate: ''
            }
        },
        computed: {
          type() {
            return this.slide ? 'slide' : ''
          }
        },
        components: {
            'phases' : Phases,
            'list-dates' : ListDates
        },
        props: ['withdates', 'slide', 'origin'],
        created() {
          this.currentDate = new Date()
        }
    }
</script>
