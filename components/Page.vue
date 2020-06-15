<template>
  <div>
        
    <Nav />
    
    <slot name="main">Main contnet goes here&hellip;</slot>
  
  </div>  
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  // head() {
  //   return {
  //     script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
  //   };
  // },
  components: {
    Nav
  }
}
</script>
