<template>
  <page>
    <template v-slot:main>
      <div class="container">

        <h1 class="title is-1">{{blogPost.title}}</h1>

        <div class="content" v-html="$md.render(blogPost.body)" />
      
      </div>
    </template>
  </page>
</template>



<script>
import page from '~/components/Page.vue'

export default {
  components: {
    page
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
        blogPost: await require(`~/assets/content/blog/2020-06-11-two.json`),
      };
  },
};
</script>
