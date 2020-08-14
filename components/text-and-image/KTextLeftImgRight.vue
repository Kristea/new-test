<template>
    <div :class="{'k-text-left-img-right': true, container: Container}" v-if="title || desc || linkText || image">
        <div :class="{image: true, 'img-full': FullImg, 'img-frame': imgFrame}" :style="imgStyle">
            <KataImage id="sample" />
        </div>
        <div class="text" :style="textStyle">
            <h3 v-if="title">{{ title }}</h3>
            <p v-if="desc">{{ desc }}</p>
            <n-link :to="linkPath" v-if="linkPath && linkText" :class="[linkClass ? linkClass : '']">{{ linkText }}
            </n-link>
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
                default: 50
            },
            ImgWidth: {
                type: Number,
                default: 50
            },
            Container: Boolean,
            FullImg: Boolean,
            title: String,
            desc: String,
            image: String,
            linkPath: String,
            linkText: String,
            linkClass: String,
            imgFrame: Boolean,
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
    .k-text-left-img-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 100vh;

        .image:not(.img-full){
            // should these images have a max height?
            img {
                width: 100%;
                max-height: 50vh;
                object-fit: cover;
            }
        }

        .img-full {
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        &:not(.container) {
            .text {
                padding-right: 5%;
            }
        }

        .img-frame {
            position: relative;

            &::after {
                //override in css
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: black;
                bottom: -20px;
                left: -20px;
                z-index: -1;
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
                padding-left: 30px;
            }
        }
    }
</style>