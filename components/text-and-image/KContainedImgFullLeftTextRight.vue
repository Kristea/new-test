<template>
    <div class="k-img-full-left-text-right container">
        <div class="img-full" :style="imgStyle">
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
    .k-img-full-left-text-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100vh;

        .img-full {
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        @media (max-width: 700px) {
            flex-wrap: wrap;
            .img-full, .text {
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