<template>
  <page>
    <template v-slot:main>
      <div class="container">
        <h1 class="title is-1">Here might be a page title. i've overriden the main slot.</h1>
      </div>
    </template>
  </page>
</template>




<script>
import page from '~/components/Page.vue'

export default {
  components: {
    page
  }
}
</script>
