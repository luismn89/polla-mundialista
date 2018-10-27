<template lang="pug" src="./list-news.pug"></template>
<style lang="stylus" src="./list-news.styl"></style>
<script>
  import New from './subcomponents/new/New.vue'

  export default {
    data () {
      return {
        news: [
          {
            user: 'Luis',
            date: 'hace 4 horas',
            tag: 'mundial rusia',
            title: '4 jugadores que pueden meterse a la lista de rusia 2018',
            url: '#',
            image: '/src/static/img/notas/match.jpg'
          },
          {
            user: 'Luis',
            date: 'hace 4 horas',
            tag: 'mundial rusia',
            title: '4 jugadores que pueden meterse a la lista de rusia 2018',
            url: '#',
            image: '/src/static/img/notas/gareca.jpg'
          },
          {
            user: 'Luis',
            date: 'hace 4 horas',
            tag: 'mundial rusia',
            title: '4 jugadores que pueden meterse a la lista de rusia 2018',
            url: '#',
            image: '/src/static/img/notas/match.jpg'
          },
          {
            user: 'Luis',
            date: 'hace 4 horas',
            tag: 'mundial rusia',
            title: '4 jugadores que pueden meterse a la lista de rusia 2018',
            url: '#',
            image: '/src/static/img/notas/gareca.jpg'
          },
          {
            user: 'Luis',
            date: 'hace 4 horas',
            tag: 'mundial rusia',
            title: '4 jugadores que pueden meterse a la lista de rusia 2018',
            url: '#',
            image: '/src/static/img/notas/match.jpg'
          },
        ]
      }
    },
    components: {
      'new' : New
    }
  }
</script>
