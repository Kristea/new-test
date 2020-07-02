<template>
  <page>
    <template v-slot:main>
      <div>

        <component 
        v-for="(slice, i) in pageContent.slices" 
        :key="i" 
        :is="slice.template"
        :sliceContent="slice">
        </component>

      </div>
    </template>
  </page>
</template>




<script>
import page from '~/components/Page.vue'

export default {
  components: {
    page,
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
    let path = params.pathMatch ? params.pathMatch : 'Home'
    console.log('Path: ' + path)
    let pageContent = await require(`~/assets/content/pages/${path}.json`)
    console.log(params)
    return {
      pageContent
    }
  },
}
</script>
