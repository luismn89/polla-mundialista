<template lang="pug" src="./form-login.pug"></template>
<style lang="stylus" src="./form-login.styl"></style>
<script>
  import VueRecaptcha from "vue-recaptcha"
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        login: {
          email: '',
          password: ''
        },
        recaptcha: '',
        key_recaptcha: '6LcWeVYUAAAAACDCWu1gA13Vr8SYKx90x76912qr',
        valid: true,
        message_error: ''
      }
    },
    watch: {
      message_error_request(newVal, oldVal) {
        if (newVal == oldVal) this.showError(oldVal)
        else this.showError(newVal)
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
      validateLogin() {
        let valid = true
        for (let field in this.login) {
          valid *= this.validRequire(this.login[field]);
          if (valid) this.hideError()
          else this.showError("Asegurese de ingresar todos los datos solicitados.")
        }
        if (valid) {
          if (this.validEmail(this.login.email)) this.hideError()
          else this.showError("Correo electrónico inválido.")
        }
        let recaptcha = document.querySelector('.recaptcha-login textarea.g-recaptcha-response').value;
        if (!recaptcha){
          this.showError("Asegurese de ingresar el recaptcha.")
        } else {
          this.recaptcha = recaptcha;
          this.hideError()
        }
      },
      sendLogin(){
        this.validateLogin();
        if (!this.valid) return
        this.loading();
        this.makeLogin({
          email: this.login.email,
          password: this.login.password,
          recaptcha: this.recaptcha
        });
        /* API.makeLogin({
            "email": this.login.email,
            "password": this.login.password,
            "recaptcha": this.recaptcha_recovery
          })
          .then(responseLogin => {
            console.log(responseLogin);
            this.saveDataUser(responseLogin.body);
            this.clearForm();
            this.createTrivia();
          })
          .catch(error => {
              console.log('error: ', error)
              this.sending_login = false;
              this.spinner_login = false;
              this.f_login_valid = false;
              try {
                this.message_error_login = JSON.parse(error.response.text).error;
              } catch (e) {
                this.message_error_login = "Los datos ingresados son incorrectos, verifique";
              }
        //   });*/
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
        this.openLoading('Iniciando sesión...');
      },
      showError(message) {
        this.valid = false;
        this.message_error = message;
      },
      hideError() {
        this.valid = true;
        this.message_error = '';
      },
      ...mapActions({
        'openRegister' : 'modal/showRegister',
        'openRecovery' : 'modal/showRecovery',
        'openLoading' : 'modal/showLoading',
        'makeLogin' : 'auth/loginUser'
      })
    },
    components: {
      VueRecaptcha
    }
  }
</script>
