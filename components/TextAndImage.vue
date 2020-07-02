<template>
    <section class="section">
        <div class="columns">
            <div class="column is-one-third box">
                <h2 v-if="headline" class="title is-2">{{ headline }}</h2>
                <div v-if="content" class="content">{{ content }}</div>
                <nuxt-link v-if="cta" :to="cta.link">{{cta.text}}</nuxt-link>
            </div>
            <div class="column is-two-thirds">
                <img :data-src="image" class="cld-responsive" alt="" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        headline: {
            type: String,
            default: 'Headline'
        },
        content: {
            type: String,
            default: 'Content goes here&hellip;'
        },
        cta: {
            type: Object,
            default: () => ({
                text: 'CTA text',
                link: '#'
            }),
        },
        image: {
            type: String,
            default: 'https://picsum.photos/1200/600',
        }
    },
      mounted() {
    cloudinary.Cloudinary.new({cloud_name: "andyxmas"}).responsive()
  }
}
</script>
