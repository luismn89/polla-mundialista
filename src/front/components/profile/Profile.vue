<template lang="pug" src="./profile.pug"></template>
<style lang="stylus" src="./profile.styl"></style>
<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        'isLogged' : 'auth/userIsLogged',
        'user': 'auth/getUser',
        // 'pointsCurrent' : 'auth/getPointPhaseCurrent'
      })
    },
    methods: {
      ...mapActions({
        'openLogin' : 'modal/showLogin',
        'openRegister' : 'modal/showRegister'
      }),
      logout() {
        let urlNotNumeral = window.location.href.replace('#', '')
        window.location.href = (urlNotNumeral.slice(-1) == '/') ? urlNotNumeral + 'salir/': urlNotNumeral + '/salir/';
      }
    }
  }
</script>
