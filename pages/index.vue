<template>
  <page>
    <template v-slot:main>
      <div class="container">
        <h1 class="title is-1">Here might be a page title. i've overriden the main slot.</h1>
        <Slideshow 
          :items="items"
        />
        <TextAndImage />
      </div>
    </template>
  </page>
</template>




<script>
import page from '~/components/Page.vue'
import Slideshow from '~/components/Slideshow'
import TextAndImage from '~/components/TextAndImage'

export default {
  components: {
    page,
    Slideshow,
    TextAndImage
  },
  data() {
    return {
      items: 
      [
          { title: 'nrml 1', color: 'dark' },
          { title: 'nrml 2', color: 'primary' },
          { title: 'nrml 3', color: 'info' },
      ]
    }
  }
}
</script>
