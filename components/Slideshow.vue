<template>
    <b-carousel
        v-model="carousel"
        :animated="animated"
        :has-drag="drag"
        :autoplay="autoPlay"
        :pause-hover="pauseHover"
        :pause-info="pauseInfo"
        :pause-info-type="pauseType"
        :interval="interval"
        :repeat="repeat"
        @change="info($event)">
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color} is-bold`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.title}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
</template>

<script>

import Vue from 'vue'
import { Carousel } from 'buefy'

Vue.use(Carousel)

export default {
    props: {
        sliceContent: {
            type: Object
        }

        // items: {
        //     type: Array,
        //     default: 
        //     [
        //         { title: 'Slide 1', color: 'dark' },
        //         { title: 'Slide 2', color: 'primary' },
        //         { title: 'Slide 3', color: 'info' },
        //         { title: 'Slide 4', color: 'success' },
        //         { title: 'Slide 5', color: 'warning' },
        //         { title: 'Slide 6', color: 'danger' }
        //     ]
        // }
    },
    data() {
        return {
            carousel: 0,
            animated: 'fade',
            drag: false,
            autoPlay: false,
            pauseHover: false,
            pauseInfo: false,
            repeat: true,
            pauseType: 'is-primary',
            interval: 3000,
            carousels: this.sliceContent.slides
        }
    },
    methods: {
        info(value) {
            this.carousel = value
            // this.$buefy.toast.open({
            //     message: `This Slide ${value} !`,
            //     type: 'is-info'
            // })
        }
    }
}
</script>