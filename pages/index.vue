<template>
  <page>
    <template v-slot:main>
      <div class="container">
        <h1 class="title is-1">{{ pageContent.title }}</h1>
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
  head() {
    return {
      title: this.pageContent.title + ' - ' + 'nrml',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  data() {
    return {
      items: [],
      content: {},
      pageContent: {}
    }
  },
  async asyncData({ params, payload }) {
    // if (payload) return { blogPost: payload };
    // else
    let pageContent = await require(`~/assets/content/pages/index.json`)
    return {
      items: pageContent.slideshow,
      content: pageContent.textAndImage,
      pageContent: pageContent
    }
      // return {
      //   content: await require(`~/assets/content/pages/index.json`),
      // };
  },
}
</script>
