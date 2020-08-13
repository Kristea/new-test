<template>
    <div>
        <h1>Text and Image Slices</h1>

        <h2>Standard text left image right (no props) - should image have max-height ??</h2>
        <KTextLeftImgRight />

        <h2>Full image text left image right</h2>
        <KTextLeftImgRight :full-img="true" />

        <h2>Contained text left image right</h2>
        <KTextLeftImgRight :container="true" />

        <h2>Contained, full image, two thirds img, one third text</h2>
        <KTextLeftImgRight :container="true" :full-img="true" :img-width="66" :text-width="33" />

        <!--<h2>K Contained Image Full Left, Text Right</h2>-->
        <!--<KContainedImgFullLeftTextRight />-->

        <!--<h2>K Contained Text Left, Image Full Right</h2>-->
        <!--<KContainedTextLeftImgFullRight :TextWidth="33" :ImgWidth="66" />-->
    </div>
</template>

<script>
    import KContainedImgFullLeftTextRight from "../components/text-and-image/KContainedImgFullLeftTextRight";
    import KContainedTextLeftImgFullRight from "../components/text-and-image/KContainedTextLeftImgFullRight";
    import KTextLeftImgRight from "../components/text-and-image/KTextLeftImgRight";

    export default {
        components: {KContainedImgFullLeftTextRight, KContainedTextLeftImgFullRight, KTextLeftImgRight}
    }
</script>