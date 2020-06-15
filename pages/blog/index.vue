<template>
<div>
  <h1>blogs</h1>
  <li v-for="item in blogPosts" :key="item.date">
    <nuxt-link :to="item.slug" append>
    {{ item.title }}
    </nuxt-link>
  </li>
</div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>