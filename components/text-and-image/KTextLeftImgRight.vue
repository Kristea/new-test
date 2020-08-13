<template>
    <div :class="{'k-text-left-img-right': true, container: Container}">
        <div :class="{image: true, 'img-full': FullImg}" :style="imgStyle">
            <img src="https://source.unsplash.com/ylvK73Y4G7o" alt="Test"/>
        </div>
        <div class="text" :style="textStyle">
            <h3>Title here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <n-link to="/">Call to action</n-link>
        </div>
    </div>
</template>

<script>
    // Image covers the size of the image container on the left, text is on the right.
    // can override the padding/margin of the image box and the text box with css
    // can pass in text width and img-width for not 50/50 slices

    export default {
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
            FullImg: Boolean
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
                padding-right: 5%;
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