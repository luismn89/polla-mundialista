<template lang="pug" src="./publicity.pug"></template>
<style lang="stylus" src="./publicity.styl" scoped></style>
<script>
export default {
  data() {
    return {
      namespace: this.name
    };
  },
  computed: {
    classAds() {
      return `adsSpace${this.name.charAt(0).toUpperCase()}${this.name.slice(1)}`;
    },
    sizeSpace() {
      let heightSpace = this.height || this.height != "" ? `${this.height}px` : "auto",
          widthSpace = this.width || this.width != "" ? `${this.width}px` : "100%";
      return { width: widthSpace, height: heightSpace };
    },
    idSpace() {
      let device = window.innerWidth > 1200 ? "d" : "m";
      return `ads_${device}_${this.namespace}`;
    }
  },
  props: ["name", "dir", "width", "height"]
};
</script>
