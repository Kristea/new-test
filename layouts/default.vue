<template>
    <nuxt />
</template>

<script>
export default {
    head() {
    return {
      script: [
        // { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
        { src: '/cloudinary-core-shrinkwrap.min.js' }
      ],
    }
  }
}
</script>