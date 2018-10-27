<template lang="pug" src="./change.pug"></template>
<style lang="stylus" src="./change.styl"></style>
<script>
  import VueRecaptcha from 'vue-recaptcha';
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
          password: '',
          confirm_password: '',
          recaptcha: '',
          key_recaptcha: '6LcWeVYUAAAAACDCWu1gA13Vr8SYKx90x76912qr',
          valid: true,
          message_error: ''
      }
    },
    watch: {
        message_error_request(newVal, oldVal) {
            console.log(newVal, oldVal)
            this.showError(newVal)
        }
    },
    computed: {
        sizeCaptcha() {
            return (window.innerWidth > 768) ? 'normal' : 'compact';
        },
        ...mapGetters({
            message_error_request: 'auth/getError'
        })
    },
    methods: {
      ...mapActions({
        'openLoading' : 'modal/showLoading',
        'sendChangePassword' : 'auth/resetPassword',
        'openChangePass' : 'modal/showChangePass'
      }),
      validateChangePassword() {
          let valid = true
          valid *= this.validRequire(this.password);
          valid *= this.validRequire(this.confirm_password);
          if (valid) {
              this.hideError()
          } else {
              this.showError("Asegurese de ingresar todos los datos solicitados.")
              return;
          }
          if (valid) {
              if (this.password == this.confirm_password) this.hideError()
              else {
                  this.showError("Las contraseñas ingresadas no coinciden.")
                  return
              }
          }
          let recaptcha = document.querySelector('.recaptcha-changepass textarea.g-recaptcha-response').value;
          if (!recaptcha) this.showError("Asegurese de ingresar el recaptcha.")
          else {
              this.recaptcha = recaptcha;
              this.hideError()
          }
      },
      sendChange(){
          this.validateChangePassword();
          if (!this.valid) return
          this.loading();
          this.sendChangePassword({
              hash: this.hash,
              new_password: this.password,
              confirm_password: this.confirm_password,
              recaptcha: this.recaptcha
          });
      },
      validRequire(field) {
          return field != "" ? true : false;
      },
      validEmail(email) {
          let patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return email != "" && patternEmail.test(email) ? true : false;
      },
      onlyNumber(evt) {
          let keyCode = evt.keyCode || evt.charCode || evt.which;
          if (!/^[0-9]$/g.test(String.fromCharCode(keyCode))) evt.preventDefault();
      },
      loading() {
          this.openLoading('Registrando nueva contraseña...');
      },
      showError(message) {
          this.valid = false;
          this.message_error = message;
      },
      hideError() {
          this.valid = true;
          this.message_error = '';
      },
    },
    components: {
       VueRecaptcha
    },
    props: ['hash']
  }
</script>
