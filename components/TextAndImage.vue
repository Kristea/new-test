<template>
    <section class="section">
        <div class="columns">
            <div class="column is-one-third box">
                <h2 v-if="sliceContent.headline" class="title is-2">{{ sliceContent.headline }}</h2>
                <div v-if="sliceContent.content" class="content">{{ sliceContent.content }}</div>
                <nuxt-link v-if="sliceContent.cta" :to="sliceContent.cta.link">{{sliceContent.cta.text}}</nuxt-link>
            </div>
            <div class="column is-two-thirds">
                <!-- <img :data-src="image" class="cld-responsive" alt="" /> -->
                <nrmlImage :src="sliceContent.image" />
            </div>
        </div>
    </section>
</template>

<script>

import nrmlImage from '~/components/nrmlImage.vue'

export default {
    components: {
        nrmlImage,
    },
    props: {
        sliceContent: {
            type: Object
        }
        // headline: {
        //     type: String,
        //     default: 'Headline'
        // },
        // content: {
        //     type: String,
        //     default: 'Content goes here&hellip;'
        // },
        // cta: {
        //     type: Object,
        //     default: () => ({
        //         text: 'CTA text',
        //         link: '#'
        //     }),
        // },
        // image: {
        //     type: String,
        //     default: 'https://picsum.photos/1200/600',
        // }
    },
}
</script>
