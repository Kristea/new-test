<template>
  <page>
    <template v-slot:main>
      <div class="container">

        <h1 class="title is-1">{{content.title}}</h1>
        <p>{{content.intro}}</p>

        <h2 class="title is-2">Meet the team</h2>

        <ul class="tile is-ancestor">
          <li class="tile is-3 is-parent" v-for="person in content.team" :key="person.name">
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

  data() {
    return {
      content: {}
    }
  },
  async asyncData({ params, payload }) {
    // if (payload) return { blogPost: payload };
    // else
      return {
        content: await require(`~/assets/content/pages/about.json`),
      };
  },
  mounted() {
    cloudinary.Cloudinary.new({cloud_name: "andyxmas"}).responsive()
  }

}
</script>
