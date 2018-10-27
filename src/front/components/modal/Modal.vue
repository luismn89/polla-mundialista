<template lang="pug" src="./modal.pug"></template>
<style lang="stylus" src="./modal.styl" scoped></style>
<script>
  import FormLogin from './subcomponents/form-login/FormLogin.vue'
  import FormRegister from './subcomponents/form-register/FormRegister.vue'
  import FormRecovery from './subcomponents/form-recovery-password/FormRecoveryPassword.vue'
  import FormChangePassword from './subcomponents/form-change-password/FormChangePassword.vue'
  import Stadistic from './subcomponents/stadistic/Stadistic.vue'
  import Loading from './subcomponents/loading/Loading.vue'
  import Dialog from './subcomponents/dialog/Dialog.vue'

  import { mapActions } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      openedLogin() { return this.type == 'login'; },
      openedRegister() { return this.type == 'register'; },
      openedRecovery() { return this.type == 'recovery'; },
      openedChangePassword() { return this.type == 'changepass'; },
      openedStadistic() { return this.type == 'stadistic'; },
      openedLoading() { return this.type == 'loading'; },
      openedDialog() { return this.type == 'dialog'; },
      typemodal() { return `popup-${this.type}` },
      typeDialog() { return this.dialog ? this.dialog : '' }
    },
    components: {
      'form-login': FormLogin,
      'form-register': FormRegister,
      'form-recovery' : FormRecovery,
      'form-changepass' : FormChangePassword,
      'stadistic': Stadistic,
      'loading': Loading,
      'modal-dialog': Dialog
    },
    props: ['type', 'message', 'tdialog'],
    methods: {
      ...mapActions({
        'closeModal' : 'modal/closeModal'
      })
    }
  }
</script>
