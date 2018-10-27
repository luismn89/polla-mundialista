<template lang="pug" src="./navbar.pug"></template>
<style lang="stylus" src="./navbar.styl"></style>
<script>
  import Profile from '../profile/Profile.vue'

  export default {
    data () {
      return {
        openedMenu: false,
        overlay: false,
        urlSite: 'https://elbocon.pe/mundial/polla/'
      }
    },
    computed: {
      urlShareTwitter(){
        return `https://twitter.com/share?url=${ encodeURIComponent(this.urlSite) }`;
      },
      urlShareFacebook(){
        return `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(this.urlSite) }`;
      },
      isNotChange() {
        return (this.$route.path.indexOf('/recover/') != -1) ? true : false;
      }
    },
    methods: {
      toogleMenu(state) {
        this.openedMenu = state;
        this.overlay = state;
        if (state) document.body.classList.add('bodyNoScroll')
        else document.body.classList.remove('bodyNoScroll')
      },
      goSection(path) {
        if (path == 'home') this.$router.push('/mundial/polla/')
        else this.$router.push(`/mundial/polla/${path}`)
      },
      openNewWindow(url) {
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=500,width=600,height=600");
      },
      resizeMenu(evt) {
        let wd = evt.target.innerWidth
        if (wd >= 1200) this.openedMenu = true
        else this.openedMenu = false
      }
    },
    components: {
      'profile': Profile
    },
    mounted (){
      window.addEventListener("resize", this.resizeMenu);
    }
  }
</script>
