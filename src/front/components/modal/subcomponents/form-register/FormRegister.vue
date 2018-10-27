<template lang="pug" src="./form-register.pug"></template>
<style lang="stylus" src="./form-register.styl"></style>
<script>
  import VueRecaptcha from "vue-recaptcha"
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        user: {
          first_name: '',
          last_name: '',
          email: '',
          num_document: '',
          birthday: '',
          phone: '',
          password: '',
          confirm_password: ''
        },
        terms_checked: false,
        recaptcha: '',
        key_recaptcha: '6LcWeVYUAAAAACDCWu1gA13Vr8SYKx90x76912qr',
        valid_register: true,
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
    components: {
      VueRecaptcha
    },
    methods: {
      validateRegister() {
        let valid = true;
        for (let field in this.user) {
          valid *= this.validRequire(this.user[field]);
          if (valid) this.hideError()
          else {
            this.showError("Asegurese de ingresar todos los datos solicitados.")
            return
          }
        }
        if (valid) {
          if (this.validEmail(this.user.email)) this.hideError()
          else {
            this.showError("Correo electrónico inválido.")
            return
          }

          if (this.terms_checked != false) this.hideError()
          else {
            this.showError("Seleccione los terminos y condiciones.")
            return
          }
        }

        if (valid) {
          if (this.user.password == this.user.confirm_password) this.hideError()
          else {
            this.showError("Las contraseñas ingresadas no coinciden.")
            return
          }
        }

        let recaptcha = document.querySelector('.recaptcha-register textarea.g-recaptcha-response').value;
        if (!recaptcha) {
          this.showError("Asegurese de ingresar el recaptcha.")
          return
        } else {
          this.recaptcha = recaptcha;
          this.hideError()
        }
      },
      sendRegister(){
        this.validateRegister();
        if (!this.valid_register) return
        this.loading();
        this.registerUser({
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          document_number: this.user.num_document,
          celphone: this.user.phone,
          email: this.user.email,
          birthday: this.user.birthday,
          password: this.user.password,
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
        this.openLoading('Iniciando sesión...');
      },
      showError(message) {
        this.valid_register = false;
        this.message_error = message;
      },
      hideError() {
        this.valid_register = true;
        this.message_error = '';
      },
      loading() {
        this.openLoading('Registrando datos...');
      },
      formatDate(evt) {
        let keyCode = evt.keyCode || evt.charCode || evt.which,
          key = String.fromCharCode(keyCode),
          isNumber = /[0-9]/.test(key),
          isDelete = keyCode == 46 ? true : false;
        if ((isNumber || isDelete) && this.user.birthday.length < 10) {
          if (isNumber) {
            if (this.user.birthday.length == 2 || this.user.birthday.length == 5)
              this.user.birthday += "/";
          }
        } else {
          evt.preventDefault();
          return false;
        }
      },
      ...mapActions({
        'openLogin' : 'modal/showLogin',
        'openLoading' : 'modal/showLoading',
        'openRecovery' : 'modal/showRecovery',
        'registerUser' : 'auth/registerUser'
      })
    },
    mounted() {
      let fieldPhone = document.querySelector('input[name="phone"]'),
          fieldDocument = document.querySelector('input[name="num_document"]');
      let fieldDate = document.getElementById("idDate");
      fieldDate.addEventListener("keypress", this.formatDate);
      if (fieldPhone) fieldPhone.addEventListener("keypress", this.onlyNumber);
      if (fieldDocument) fieldDocument.addEventListener("keypress", this.onlyNumber);
    }
  }
</script>
