<template>
    <nuxt />
</template>

<script>

import Vue from "vue";
import Cloudinary, { CldImage } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "andyxmas" }
});

export default {
  //   head() {
  //   return {
  //     script: [
  //       // { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
  //       { src: '/cloudinary-core-shrinkwrap.min.js' }
  //     ],
  //   }
  // }
}
</script>