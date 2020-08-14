<template>
    <div>
        <div class="container">
            <h1>Text and Image Slices</h1>

            <h2>Standard text left image right (no custom props) - should image have max-height when not full?? Or
                should it have
                to match height of text??</h2>
        </div>
        <KTextLeftImgRight title="Title here"
                           linkPath="/"
                           linkText="Go Home"
                           image="https://source.unsplash.com/random"
                           desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>

        <h2 class="container">Full image, image left, text right - padded down and custom link class passed in</h2>
        <div class="custom-slice-padding">
            <KImgLeftTextRight :full-img="true"
                               title="Title here"
                               linkPath="/"
                               linkText="Go Home"
                               linkClass="black-btn"
                               image="https://source.unsplash.com/random"/>
        </div>

        <h2 class="container">Contained text left image right, with frame</h2>
        <KTextLeftImgRight :Container="true"
                           :imgFrame="true"
                           linkPath="/"
                           linkText="Go Home"
                           image="https://source.unsplash.com/random"
                           desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>

        <h2 class="container">Text left, full image right, with frame</h2>
        <KTextLeftImgRight :imgFrame="true"
                           linkPath="/"
                           linkText="Go Home"
                           image="https://source.unsplash.com/random"
                           desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>

        <h2 class="container">Contained, full image, two thirds img, one third text</h2>
        <KTextLeftImgRight :Container="true"
                           :full-img="true"
                           :img-width="66"
                           :text-width="33"
                           title="Title here"
                           linkPath="/"
                           linkText="Go Home"
                           image="https://source.unsplash.com/random"
                           desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>

        <h2 class="container">Full Width Image, Text Overlay right</h2>
        <KFullWidthImageTextOverlay text-position="right"
                                    imageUrl="https://source.unsplash.com/random"
                                    title="This is a title"/>

        <h2 class="container">Full Width Image, Text Overlay center</h2>
        <KFullWidthImageTextOverlay text-position="center"
                                    imageUrl="https://source.unsplash.com/random"
                                    desc="This is a description"
                                    linkPath="/"
                                    linkText="Go Home"/>

        <h2 class="container">Full Width Image, Text Overlay left</h2>
        <KFullWidthImageTextOverlay text-position="left"
                                    imageUrl="https://source.unsplash.com/random"
                                    title="Title is here you should read"
                                    desc="This is a description"
                                    linkPath="/"
                                    linkText="Go Home"/>
    </div>
</template>

<script>
    import KTextLeftImgRight from "../components/text-and-image/KTextLeftImgRight";
    import KImgLeftTextRight from "../components/text-and-image/KImgLeftTextRight";
    import KFullWidthImageTextOverlay from "../components/text-and-image/KFullWidthImageTextOverlay";

    export default {
        components: {KTextLeftImgRight, KImgLeftTextRight, KFullWidthImageTextOverlay}
    }
</script>

<style lang="scss">
    .custom-slice-padding {
        .k-img-left-text-right .img-full {
            img {
                padding-top: 20%;
                height: 100vh;
                object-fit: cover;
            }
        }
        .k-img-left-text-right:not(.container) .text {
            padding-left: 15%;
        }
    }
</style>