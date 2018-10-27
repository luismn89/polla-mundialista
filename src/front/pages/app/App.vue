<template lang="pug" src="./app.pug"></template>
<script>
  import Publicity from '../../components/publicity/Publicity.vue';
  import Modal from '../../components/modal/Modal.vue';
  import Navbar from '../../components/navbar/Navbar.vue'

  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return { }
    },
    computed: {
      ...mapGetters({
        openLogin: 'modal/isOpenLogin',
        openRegister: 'modal/isOpenRegister',
        openLoading: 'modal/isOpenLoading',
        openRecovery: 'modal/isOpenRecovery',
        openChangePassword: 'modal/isOpenChangePassword',
        openDialog: 'modal/isOpenDialog',
        typedialog: 'modal/getTypeDialog',
        message: 'modal/getMessageLoading'
      }),
    },
    components: {
      'publicity' : Publicity,
      'modal-popup': Modal,
      'nav-bar' : Navbar
    },
    created() {
      if (this.$route.path.indexOf('/recover/') == -1) this.isLogged();
    },
    methods: {
      ...mapActions({
        'isLogged' : 'auth/fetchUser'
      })
    }
  }
</script>

