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
