<template lang="pug" src="./mechanics.pug"></template>
<style lang="stylus" src="./mechanics.styl"></style>
<script>
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
    }
  }
</script>
