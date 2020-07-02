<template>
  <div>
        
    <Nav />
    
    <slot name="main">Main contnet goes here&hellip;</slot>
  
  </div>  
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>
