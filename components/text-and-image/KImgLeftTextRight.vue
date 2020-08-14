<template>
    <div :class="{'k-img-left-text-right': true, container: Container}" v-if="title || desc || linkText || image">
        <div class="text" :style="textStyle">
            <h3 v-if="title">{{ title }}</h3>
            <p v-if="desc">{{ desc }}</p>
            <n-link :to="linkPath" v-if="linkPath && linkText" :class="[linkClass ? linkClass : '']">{{ linkText }}</n-link>
        </div>
        <div :class="{image: true, 'img-full': FullImg}" :style="imgStyle">
            <KataImage id="sample" />
        </div>
    </div>
</template>

<script>
    // Image covers the size of the image container on the left, text is on the right.
    // can override the padding/margin of the image box and the text box with css
    // can pass in text width and img-width for not 50/50 slices

    import KataImage from "../KataImage";
    export default {
        components: {KataImage},
        props: {
            TextWidth: {
                type: Number,
                default: 50 //percentage of the width
            },
            ImgWidth: {
                type: Number,
                default: 50 //percentage of the width
            },
            Container: Boolean,
            FullImg: Boolean,
            title: String,
            desc: String,
            image: String,
            linkPath: String,
            linkText: String,
            linkClass: String,
        },
        computed: {
            imgStyle() {
                return 'flex-basis: ' + this.ImgWidth + '%';
            },
            textStyle() {
                return 'flex-basis: ' + this.TextWidth + '%';
            }
        }
    }
</script>

<style scoped lang="scss">
    .k-img-left-text-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 100vh;

        .image img {
            width: 100%;
            height: auto;
        }

        .img-full {
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        &:not(.container){
            .text {
                padding-left: 5%;
            }
        }

        @media (max-width: 700px) {
            flex-wrap: wrap;
            .image, .text {
                flex-basis: 100% !important;
                max-width: 100% !important;
            }
        }

        @media (min-width: 700px) {
            .text {
                padding-right: 30px;
            }
        }
    }
</style>