<template>
    <nuxt />
</template>

<script>

import Vue from "vue";
import Cloudinary, { CldImage } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "andyxmas" },
  components: [ CldImage ]
});



export default {

}
</script>

<style lang="sass">
  @import "bulma/sass/grid/columns.sass";
</style>
