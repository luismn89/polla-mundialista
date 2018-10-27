<template lang="pug" src="./home.pug"></template>
<style lang="stylus" src="./home.styl"></style>
<script>
  import ListMatches from '../../components/list-match/Listmatch.vue'
  import ListNews from '../../components/list-news/ListNews.vue'
  import Calendar from '../../components/calendar/Calendar.vue'
  import Modal from '../../components/modal/Modal.vue'

  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        options: {
          infinite: true,
          arrows: false,
          dots: false,
          unagile: true
        }
      }
    },
    computed: {
      ...mapGetters({
        openStadistic : 'modal/isOpenStadistic',
        isLogged : 'auth/userIsLogged',
        user : 'auth/getUser'
      })
    },
    components: {
      'list-matches' : ListMatches,
      'list-news' : ListNews,
      'calendar' : Calendar,
      'modal-popup' : Modal
    },
    methods: {
      ...mapActions({
        'openLogin' : 'modal/showLogin'
      })
    }
  }
</script>
