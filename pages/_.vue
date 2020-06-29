<template>
  <page>
    <template v-slot:main>
      <div>
        <component v-for="(slice, i) in pageContent.slices" 
        :key="i" 
        :is="slice.template"
        :sliceContent="slice">
        </component>
        <!-- :key="story.slices._uid"  -->
      </div>
    </template>
    <!-- <template v-slot:main>
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
    </template> -->

  </page>
</template>




<script>
import page from '~/components/Page.vue'
// import showcase from '~/components/Slideshow'
// import TextAndImage from '~/components/TextAndImage'

export default {
  components: {
    page,
    // showcase,
    // TextAndImage
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
      pageContent: {}
    }
  },
  async asyncData({ params, payload }) {
    let pageContent = await require(`~/assets/content/pages/Slices.json`)
    console.log(params)
    return {
      pageContent
    }
  },
}
</script>
