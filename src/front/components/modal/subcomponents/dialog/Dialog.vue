<template lang="pug" src="./dialog.pug"></template>
<style lang="stylus" src="./dialog.styl"></style>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        'message' : 'modal/getMessageDialog',
        'typedialog' : 'modal/getTypeDialog'
      })
    },
    methods: {
      ...mapActions({
        'closeModal' : 'modal/closeModal'
      })
    }
  }
</script>
