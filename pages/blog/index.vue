<template>
  <page>
    <template v-slot:main>
      <div class="container">

        <h1 class="title is-1">blogs</h1>
          <ul>
            <li v-for="item in blogPosts" :key="item.date">
              <nuxt-link :to="item.slug" append>
                <h2 class="title is-3">
                  {{ item.title }}
                </h2>
              </nuxt-link>
            </li>
          </ul>
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
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>