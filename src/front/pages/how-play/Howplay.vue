<template lang="pug" src="./how-play.pug"></template>
<style lang="stylus" src="./how-play.styl"></style>
<script>
    import { mapGetters } from 'vuex'

    export default {
      data() {
        return {}
      },
      computed: {
        ...mapGetters({
          isLogged : 'auth/userIsLogged',
          user : 'auth/getUser'
        })
      }
    }
</script>
