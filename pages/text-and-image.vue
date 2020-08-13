<template>
    <div>
        <h1>Text and Image Slices</h1>

        <h2>Standard text left image right (no props) - should image have max-height when not full?? Or should it have to match height of text??</h2>
        <KTextLeftImgRight />

        <h2>Full image, image left, text right</h2>
        <KImgLeftTextRight :full-img="true" />

        <h2>Contained text left image right</h2>
        <KTextLeftImgRight :Container="true" />

        <h2>Contained, full image, two thirds img, one third text</h2>
        <KTextLeftImgRight :Container="true" :full-img="true" :img-width="66" :text-width="33" />
    </div>
</template>

<script>
    import KTextLeftImgRight from "../components/text-and-image/KTextLeftImgRight";
    import KImgLeftTextRight from "../components/text-and-image/KImgLeftTextRight";

    export default {
        components: {KTextLeftImgRight, KImgLeftTextRight}
    }
</script>