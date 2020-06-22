<template>
  <page>
    <template v-slot:main>
      <div class="container">

        <h1 class="title is-1">blogs</h1>
        <input v-model="searchParam" @keyup="searchBlogs">
        <button @click="searchBlogs">Search</button>
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
  data () {
    return {
      blogPosts: [],
      searchParam: ''
    }
  },
  methods: {
    async searchBlogs () {
      let search = this.$content('blog')
      search = this.searchParam != '' ? search.where({ title: this.searchParam }) : search
      this.blogPosts = await search.fetch()
    }
  },
  async fetch() {
    this.blogPosts = await this.$content('blog').fetch()
  }
};
</script>