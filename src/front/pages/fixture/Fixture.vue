<template lang="pug" src="./fixture.pug"></template>
<style lang="stylus" src="./fixture.styl"></style>
<script>
  import ListMatches from '../../components/list-match/Listmatch.vue'
  import ListNews from '../../components/list-news/ListNews.vue'
  import Calendar from '../../components/calendar/Calendar.vue'

  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        isLogged : 'auth/userIsLogged',
        user : 'auth/getUser'
      })
    },
    components: {
      'list-matches' : ListMatches,
      'list-news' : ListNews,
      'calendar' : Calendar
    }
  }
</script>
