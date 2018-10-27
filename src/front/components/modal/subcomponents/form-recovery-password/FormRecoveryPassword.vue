<template lang="pug" src="./form-recovery-password.pug"></template>
<style lang="stylus" src="./form-recovery-password.styl"></style>
<script>
    import VueRecaptcha from 'vue-recaptcha';
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                recaptcha: '',
                key_recaptcha: '6LcWeVYUAAAAACDCWu1gA13Vr8SYKx90x76912qr',
                valid: true,
                message_error: ''
            }
        },
        watch: {
            message_error_request(newVal, oldVal) {
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
            validateRecovery() {
                let valid = true
                valid = this.validRequire(this.email);
                if (valid) {
                    this.hideError()
                } else {
                    this.showError("Asegurese de ingresar todos los datos solicitados.")
                    return;
                }
                if (valid) {
                    if (this.validEmail(this.email)) this.hideError()
                    else {
                        this.showError("Correo electrónico inválido.")
                        return
                    }
                }
                let recaptcha = document.querySelector('.recaptcha-recovery textarea.g-recaptcha-response').value;
                if (!recaptcha) this.showError("Asegurese de ingresar el recaptcha.")
                else {
                    this.recaptcha = recaptcha;
                    this.hideError()
                }
            },
            sendRecovery(){
                this.validateRecovery();
                if (!this.valid) return
                this.loading();
                this.sendMailRecovery({
                    email: this.email,
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
                this.openLoading('Enviando url de recuperación al correo electrónico ingresado...');
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
                'openLogin' : 'modal/showLogin',
                'openLoading' : 'modal/showLoading',
                'sendMailRecovery' : 'auth/sendMailRecovery'
            })
        },
        components: {
            VueRecaptcha
        }
    }
</script>
