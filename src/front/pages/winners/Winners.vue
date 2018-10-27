<template lang="pug" src="./winners.pug"></template>
<style lang="stylus" src="./winners.styl"></style>
<script>
  import ListWinners from '../../components/list-winners/ListWinners.vue'
  import Calendar from '../../components/calendar/Calendar.vue'

  import API from '../../services/api.js'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        listWinners: [],
        listAmountWin: {
          'fase de grupos' : 300,
          'octavos de final' : 400,
          'cuartos de final' : 500,
          'semifinal' : 700,
          'tercer puesto' : 800,
          'final' : 1000
        }
      }
    },
    components: {
      'list-winners' : ListWinners,
      'calendar' : Calendar
    },
    watch: {
      getPhase(newVal, oldVal) {
      },
      listWinners(newVal, oldVal) {
      },
      isLogged(newVal, oldVal) {
        if(newVal){
          this.getListWinners()
        }
      }
    },
    computed: {
        ...mapGetters({
          'getPhase' : 'matches/getPhaseCurrent',
          'isLogged' : 'auth/userIsLogged',
          'user' : 'auth/getUser'
        }),
        isThereWinners() {
          return (this.isLogged && this.listPhase.length > 0) ? true : false;
        },
        listPhase() {
          let list = [];
          this.listWinners.forEach(item => {
            if (item.level.toLowerCase() == this.getPhase){
              list = item.winners
            }
          });
          return list;
        }
    },
    methods: {
      ...mapActions({
        'openLogin' : 'modal/showLogin'
      }),
      getListWinners() {
          API.fetchWinners()
              .then(response => {
                this.listWinners = response.body
              })
              .catch(error => {
                console.log(error)
              })
      },
      initBet() {
        if (this.isLogged) this.$router.push('/')
        else this.openLogin();
      }
    },
    created() {
      this.getListWinners();
    }
  }
</script>
