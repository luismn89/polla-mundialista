<template lang="pug" src="./stadistic.pug"></template>
<style lang="stylus" src="./stadistic.styl"></style>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
              arrayDays: ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'],
              match: '',
              missingHour: '-',
              missingMinutes: '-',
              missingSeconds: '-',
              players: [
                { rol_name: 'Arquero', firstname: '-', last_name: '' },
                { rol_name: 'Defensor', firstname: '-', last_name: '' },
                { rol_name: 'Defensor', firstname: '-', last_name: '' },
                { rol_name: 'Defensor', firstname: '-', last_name: '' },
                { rol_name: 'Defensor', firstname: '-', last_name: '' },
                { rol_name: 'Volante', firstname: '-', last_name: '' },
                { rol_name: 'Volante', firstname: '-', last_name: '' },
                { rol_name: 'Volante', firstname: '-', last_name: '' },
                { rol_name: 'Delantero', firstname: '-', last_name: '' },
                { rol_name: 'Delantero', firstname: '-', last_name: '' },
                { rol_name: 'Delantero', firstname: '-', last_name: '' },
                { rol_name: 'DT', firstname: '-', last_name: '' },
              ]
            }
        },
        watch: {
          dataMatch(newVal, oldVal) {
            if (newVal) {
              this.match = newVal
              this.countDown()
            }
          }
        },
        computed: {
            ...mapGetters({
                'dataMatch' : 'matches/getMatchStadistic'
            }),
            listPlayersLocal() {
              if (this.dataMatch){
                return (this.dataMatch.players_local.length > 0) ? this.dataMatch.players_local : this.players
              }
              return this.players
            },
            listPlayersVisit() {
              if (this.dataMatch){
                return (this.dataMatch.players_visit.length > 0) ? this.dataMatch.players_visit : this.players
              }
              return this.players
            },
            scoreLocalBet() {
              if (this.dataMatch) {
                return (this.dataMatch.user_percent && this.dataMatch.user_percent.user_wager) ? this.dataMatch.user_percent.score_local : '-'
              }
              return '-'
            },
            scoreVisitorBet() {
              if (this.dataMatch) {
                return (this.dataMatch.user_percent && this.dataMatch.user_percent.user_wager) ? this.dataMatch.user_percent.score_visit : '-'
              }
              return '-'
            },
            textDate() {
              let dateMatch = new Date(this.match.start_date_isoformat),
                  hour = (dateMatch.getHours() < 10) ? `0${dateMatch.getHours()}` : dateMatch.getHours(),
                  minutes = (dateMatch.getMinutes() < 10) ? `0${dateMatch.getMinutes()}` : dateMatch.getMinutes();
              return `${this.arrayDays[dateMatch.getDay()]}. ${dateMatch.getDate()} - ${hour}:${minutes}`
            },
            textLast() {
              return `FALTAN ${this.missingHour}:${this.missingMinutes}:${this.missingSeconds}`
            }
        },
        methods: {
          countDown(){
            let dateMatch = new Date(this.match.start_date_isoformat).getTime();
            const timer = setInterval(() => {
                let dateNow = new Date().getTime();
                let difference = dateMatch - dateNow;

                let seconds = Math.floor((difference / 1000) % 60)
                let minutes = Math.floor((difference / 1000 / 60) % 60)
                let hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
                let days = Math.floor(difference / (1000 * 60 * 60 * 24))

                let hoursFormat = (days * 24) + hours;

                this.missingHour = (hoursFormat > 9) ? hoursFormat : `0${hoursFormat}`;
                this.missingMinutes = (minutes > 9) ? minutes : `0${minutes}`;
                this.missingSeconds = (seconds > 9) ? seconds : `0${seconds}`;
                if(difference < 0) {
                  clearInterval(timer);
                }
            }, 1000)
          },
          getPosition(rol) {
            switch (rol.toLowerCase()) {
              case 'arquero': return 'P'
              case 'defensor': return 'D'
              case 'volante': return 'M'
              case 'delantero': return 'D'
              case 'dt': return 'DT'
            }
          },
          dateNextMatch(date) {
            let dateMatch = new Date(date);
            return `${this.arrayDays[dateMatch.getDay()]}. ${dateMatch.getDate()}`
          },
          hourNextMatch(date) {
            let dateMatch = new Date(date),
                hours = (dateMatch.getHours() < 10) ? `0${dateMatch.getHours()}` : dateMatch.getHours(),
                minutes = (dateMatch.getMinutes() < 10) ? `0${dateMatch.getMinutes()}` : dateMatch.getMinutes();
            return `${hours}:${minutes}`
          }
        }
    }
</script>
