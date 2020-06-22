<template>
  <page>
    <template v-slot:main>
      <div class="container">
        <h1 class="title is-1">Here might be a page title. i've overriden the main slot.</h1>
        <Slideshow 
          :items="items"
        />
        <TextAndImage 
          :headline="content.headline"
          :content="content.content"
          :cta="content.cta"
          :image="content.image"
        />
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
      items: [],
      content: {}
    }
  },
  async asyncData({ params, payload }) {
    // if (payload) return { blogPost: payload };
    // else
    let content = await require(`~/assets/content/pages/index.json`)
    return {
      items: content.slideshow,
      content: content.textAndImage
    }
      // return {
      //   content: await require(`~/assets/content/pages/index.json`),
      // };
  },
}
</script>
