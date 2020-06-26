<template>
  <page>
    <template v-slot:main>
      <div class="container">

        <h1 class="title is-1">{{blogPost.title}}</h1>

        <nrmlImage :src="blogPost.image" />

        <div class="content" v-html="$md.render(blogPost.body)" />
      
      </div>
    </template>
  </page>
</template>



<script>
import page from '~/components/Page.vue'
import nrmlImage from '~/components/nrmlImage.vue'



export default {
  head() {
    return {
        title: this.blogPost.title + ' - ' + 'nrml',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
    }
  },
  components: {
    page,
    nrmlImage
  },
  data() {
    return {
      blogPost: {}
    }
  },
  async asyncData({ params, payload }) {
    // if (payload) return { blogPost: payload };
    // else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
      };
  },
  mounted() {
    cloudinary.Cloudinary.new({cloud_name: "andyxmas"}).responsive()
  }
};
</script>
