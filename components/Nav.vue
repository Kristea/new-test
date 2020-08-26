<template>
  <div>

    <n-link to="/">
      <Logo />
    </n-link>

    <ul>
      <li>
        <n-link to="/">Home</n-link>
      </li>

      <li>
        <n-link to="/about">About</n-link>
      </li>

      <li>
        <n-link to="/blog">Blog</n-link>
      </li>
      <li>
        <n-link to="/container-concepts">Containers</n-link>
      </li>
      <li>
        <n-link to="/text-and-image">Text & Image</n-link>
      </li>
      <li>
        <n-link to="/text-and-image2">Text & Image #2</n-link>
      </li>
      <li>
        <n-link to="/footers">Footers</n-link>
      </li>
    </ul>

  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;

  li {
    list-style: none;
    display: inline-block;
  }
}
</style>
