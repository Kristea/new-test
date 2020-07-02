<template>
  <page>
    <template v-slot:main>
      <div class="container">

        <h1 class="title is-1">{{pageContent.title}}</h1>
        <p>{{pageContent.intro}}</p>

        <h2 class="title is-2">Meet the team</h2>

        <ul class="tile is-ancestor">
          <li class="tile is-3 is-parent" v-for="person in pageContent.team" :key="person.name">
            <div class="tile is-child box">
              <h3 class="subtitle is-3">{{ person.name }}</h3>
              <p>{{ person.position }}</p>
              <img :data-src="person.photo" class="cld-responsive" :alt="person.name" />
            </div>
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
    // if (payload) return { blogPost: payload };
    // else
      return {
        pageContent: await require(`~/assets/content/pages/about.json`),
      };
  },

}
</script>
