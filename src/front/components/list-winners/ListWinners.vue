<template lang="pug" src="./list-winners.pug"></template>
<style lang="stylus" src="./list-winners.styl"></style>
<script>
  export default {
    data () {
      return {
        users: [
          {
              position: 1,
              name: 'Claudia Noriega',
              points: '560'
          },
          {
              position: 2,
              name: 'Claudia Noriega',
              points: '560'
          },
          {
              position: 3,
              name: 'Claudia Noriega',
              points: '560'
          },
          {
              position: 4,
              name: 'Claudia Noriega',
              points: '560'
          },
          {
              position: 5,
              name: 'Claudia Noriega',
              points: '560'
          }
        ]
      }
    },
    props: ['list']
  }
</script>
