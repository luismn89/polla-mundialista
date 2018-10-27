<template lang="pug" src="./match.pug"></template>
<style lang="stylus" src="./match.styl"></style>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        arrayDays: ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'],
        missingHour: '-',
        missingMinutes: '-',
        missingSeconds: '-',
        scoreLocalBet: (this.item.user_percent && this.item.user_percent.user_wager) ? this.item.user_percent.score_local : '',
        scoreVisitorBet: (this.item.user_percent && this.item.user_percent.user_wager) ? this.item.user_percent.score_visit : ''
      }
    },
    watch: {
      betLocalUser(newVal){
        this.scoreLocalBet = newVal
      },
      betVisitUser(newVal){
        this.scoreVisitorBet = newVal
      }
    },
    computed: {
      isCurrent() { return this.item.status.toLowerCase() == 'jugando' },
      isClosedBet() { return this.item.status.toLowerCase() == 'deshabilitado' },
      isFinallyMatch() { return this.item.status.toLowerCase() == 'finalizado' },
      stillNotPlay() { return this.item.status.toLowerCase() == 'habilitado' },
      pointsWin() { return this.isFinallyMatch ? 'marcador + ganador' : '' },
      betLocalUser() { return (this.item.user_percent && this.item.user_percent.user_wager) ? this.item.user_percent.score_local : '' },
      betVisitUser() { return (this.item.user_percent && this.item.user_percent.user_wager) ? this.item.user_percent.score_visit : '' },
      pointsWinScore() {
        return this.isFinallyMatch ? 'ganador' : ''
      },
      isLoseBet() {
        return this.item.user_percent && this.item.user_percent.user_wager && this.item.user_percent.win_user_points == 0
      },
      classStatus() {
        if (this.isCurrent && !this.isFixture) return 'current-match'
        else if (this.isFixture) return 'match-fixture'
        else if (this.isFinallyMatch) return 'final-match'
        else return ''
      },
      statusResult() {
        return this.item.user_percent.user_wager && this.item.user_percent.win_user_points > 0 ? 'ribbon-winner' : 'ribbon-wrong'
      },
      textResult() {
        return this.item.user_percent.user_wager && this.item.user_percent.win_user_points > 0 ? `¡HAS GANADO ${this.item.user_percent.win_user_points} PTOS.!` : '¡SIGUE INTENTANDO!'
      },
      isNotPlayOrClosedBet() {
        return this.type != 'fixture' && (this.stillNotPlay || this.isClosedBet)
      },
      percentMatch() {
        return this.item.user_percent && this.item.user_percent.user_wager ? this.item.user_percent.same_wager : 0;
      },
      isFixture () {
        return this.type == 'fixture'
      },
      btnEnabled() {
        return this.isClosedBet ? 'btn-disable' : 'background-red'
      },
      textCenter() {
        if (this.isCurrent) return 'jugando ahora'
        if (this.isNotPlayOrClosedBet || this.isFixture) {
          let dateMatch = new Date(this.item.start_date_isoformat),
              hour = (dateMatch.getHours() < 10) ? `0${dateMatch.getHours()}` : dateMatch.getHours(),
              minutes = (dateMatch.getMinutes() < 10) ? `0${dateMatch.getMinutes()}` : dateMatch.getMinutes();
          return `${this.arrayDays[dateMatch.getDay()]}. ${dateMatch.getDate()} - ${hour}:${minutes}`
        }
        if (this.isFinallyMatch) return '3 Ptos.'
      },
      textLast() {
        if (this.isFixture) return ''
        if (this.isCurrent) return 'apuesta cerrada'
        if (this.isNotPlayOrClosedBet) return `FALTAN ${this.missingHour}:${this.missingMinutes}:${this.missingSeconds}`
        if (this.isFinallyMatch) return '1 Pto.'
      },
      missingTimeFixture() {
        return `FALTAN ${this.missingHour}:${this.missingMinutes}:${this.missingSeconds}`
      },
      nameTeamLocal() {
        let wd = window.innerWidth;
        return wd < 768 ? this.item.local : this.item.local
      },
      nameTeamVisitor() {
        let wd = window.innerWidth;
        return wd < 768 ? this.item.visit : this.item.visit
      },
      ...mapGetters({
        'isUserLogged' : 'auth/userIsLogged'
      })
    },
    props: ['item', 'type'],
    methods: {
      countDown(){
        let dateMatch = new Date(this.item.start_date_local).getTime();
        const timer = setInterval(() => {
            let dateNow = new Date().getTime();
            let difference = dateMatch - dateNow;

            let seconds = Math.floor((difference / 1000) % 60)
            let minutes = Math.floor((difference / 1000 / 60) % 60)
            let hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
            let days = Math.floor(difference / (1000 * 60 * 60 * 24))

            let hoursFormat = (days * 24) + hours;
            // console.log('ajsdasdad  ')
            this.missingHour = (hoursFormat > 9) ? hoursFormat : `0${hoursFormat}`;
            this.missingMinutes = (minutes > 9) ? minutes : `0${minutes}`;
            this.missingSeconds = (seconds > 9) ? seconds : `0${seconds}`;
            if(difference < 0) {
              clearInterval(timer);
            }
        }, 1000)
      },
      betMatch() {
        if (!this.isClosedBet) {
          if (this.isUserLogged){
            if (this.scoreLocalBet.toString() != '' && this.scoreVisitorBet.toString() != ''){
              this.openLoading('Enviando resultados...')
              this.makeBet({
                id: this.item.id,
                databet: {
                  score_local: this.scoreLocalBet,
                  score_visit: this.scoreVisitorBet
                }
              })
            } else {
              alert('Asegurese de ingresar el score para ambos equipos!!')
            }
          } else {
            this.openLogin();
          }
        }
      },
      onlyNumber(evt) {
        let keyCode = evt.keyCode || evt.charCode || evt.which;
        if (!/^[0-9]$/g.test(String.fromCharCode(keyCode))) {
          // console.log('entra')
          evt.preventDefault();
        }
      },
      ...mapActions({
        'makeBet' : 'matches/setBetMatch',
        'openLogin' : 'modal/showLogin',
        'openLoading' : 'modal/showLoading',
        'openStadistic' : 'modal/showStadistic'
      })
    },
    mounted() {
      let inputScore = document.querySelectorAll('.markup-number input');
      if (inputScore) {
        inputScore.forEach(input => {
          input.addEventListener("keypress", this.onlyNumber)
        });
      }
      if(this.stillNotPlay || this.isClosedBet) {
        this.countDown();
      }
    }
  }
</script>
