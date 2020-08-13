<template>
    <div>
        <h1>Text and Image Slices</h1>

        <h2>Standard text left image right (no props) - should image have max-height when not full?? Or should it have
            to match height of text??</h2>
        <KTextLeftImgRight/>

        <h2>Full image, image left, text right - padded down</h2>
        <div class="custom-slice-padding">
            <KImgLeftTextRight :full-img="true"/>
        </div>

        <h2>Contained text left image right</h2>
        <KTextLeftImgRight :Container="true"/>

        <h2>Contained, full image, two thirds img, one third text</h2>
        <KTextLeftImgRight :Container="true" :full-img="true" :img-width="66" :text-width="33"/>

        <h2>Full Width Image, Text Overlay right</h2>
        <KFullWidthImageTextOverlay text-position="right"/>

        <h2>Full Width Image, Text Overlay center</h2>
        <KFullWidthImageTextOverlay text-position="center"/>

        <h2>Full Width Image, Text Overlay left</h2>
        <KFullWidthImageTextOverlay text-position="left"/>
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
            }
        }
        .k-img-left-text-right:not(.container) .text {
            padding-left: 15%;
        }
    }
</style>