<template>
    <div :class="{'k-img-left-text-right-padding': true}" v-if="title || desc || linkText || image">
        <div class="text" :style="textStyle">
            <h3 v-if="title">{{ title }}</h3>
            <p v-if="desc">{{ desc }}</p>
            <n-link :to="linkPath" v-if="linkPath && linkText" :class="[linkClass ? linkClass : '']">{{ linkText }}</n-link>
        </div>
        <div :class="{image: true, 'img-full': FullImg, 'img-frame': imgFrame}" :style="imgStyle">
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
            padLeft: {
                type: Number,
                default: 0 //percentage of the width
            },
            padRight: {
                type: Number,
                default: 0 //percentage of the width
            },
            TextWidth: {
                type: Number,
                default: 50 //percentage of the width
            },
            ImgWidth: {
                type: Number,
                default: 50 //percentage of the width
            },
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
                return 'flex-basis: ' + this.ImgWidth + '%;'+'margin-right: ' + this.padRight + '%';
            },
            textStyle() {
                return 'flex-basis: ' + this.TextWidth + '%;'+'margin-left: ' + this.padLeft + '%';
            },
        }
    }
</script>

<style scoped lang="scss">
    .k-img-left-text-right-padding {
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
                /*padding-left: 5%;*/
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
                right: -20px;
                z-index: -1;
            }
        }

        @media (max-width: 700px) {
            flex-wrap: wrap;
            .image, .text {
                flex-basis: 100% !important;
                max-width: 100% !important;
                margin: 0 !important;
            }
            .text {
                padding: 0 30px;
            }
        }

        @media (min-width: 700px) {
            .text {
                padding-right: 30px;
            }
        }
    }
</style>