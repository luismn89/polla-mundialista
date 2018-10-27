<template lang="pug" src="./list-match.pug"></template>
<style lang="stylus" src="./list-match.styl"></style>
<script>
  import Match from './subcomponents/match/Match.vue'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        matches: [
          {
            status: 'current',
            user: 'Luis',
            date: 'now',
            match: {
              group: 'c',
              local: {
                name: 'peru',
                namespace: 'per',
                score: 2,
                preference: 95
              },
              visitor: {
                name: 'dinamarca',
                namespace: 'din',
                score: 1,
                preference: 5
              }
            },
            mypreference: 95
          },
          {
            status: 'no-play',
            dateText: 'JUE. 14 - 18:00',
            match: {
              group: 'b',
              local: {
                name: 'peru',
                namespace: 'per',
                score: '-',
                preference: 0
              },
              visitor: {
                name: 'dinamarca',
                namespace: 'din',
                score: '-',
                preference: 0
              }
            },
            mypreference: 0
          },
          {
            status: 'closed',
            dateText: 'VIE. 15 - 18:00',
            match: {
              group: 'd',
              local: {
                name: 'peru',
                namespace: 'per',
                score: 3,
                preference: 70
              },
              visitor: {
                name: 'dinamarca',
                namespace: 'din',
                score: 1,
                preference: 30
              }
            },
            mypreference: 80,
          },
          {
            status: 'final',
            bet_result: 'win',
            points: 5,
            match: {
              group: 'e',
              local: {
                name: 'peru',
                namespace: 'per',
                score: 2,
                preference: 95
              },
              visitor: {
                name: 'dinamarca',
                namespace: 'din',
                score: 1,
                preference: 5
              }
            },
            mypreference: 95,
            resultWinner: 100,
            resultWinnerScore: 200
          },
          {
            status: 'final',
            bet_result: 'lose',
            match: {
              group: 'e',
              local: {
                name: 'peru',
                namespace: 'per',
                score: 2,
                preference: 95
              },
              visitor: {
                name: 'dinamarca',
                namespace: 'din',
                score: 1,
                preference: 5
              }
            },
            mypreference: 95,
            resultWinner: 100,
            resultWinnerScore: 200
          }
        ],
        result: [
          {
            status: 'fixture',
            dateText: '18:00',
            time: '95',
            bet_result: 'win',
            match: {
              group: 'a',
              local: {
                name: 'peru',
                namespace: 'per',
                score: 3,
                preference: 70
              },
              visitor: {
                name: 'dinamarca',
                namespace: 'din',
                score: 1,
                preference: 30
              }
            },
            points: 3,
            mypreference: 80,
            resultWinner: 100,
            resultWinnerScore: 200
          }
        ]
      }
    },
    computed: {
      list () {
        return this.listMatches
      },
      ...mapGetters({
        'listMatches' : 'matches/getMatches'
      })
    },
    props: ['typelist'],
    components: {
      'match' : Match
    }
  }
</script>
