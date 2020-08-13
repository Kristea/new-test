<template>
    <div>
        <h1>Text and Image Slices</h1>

        <h2>K Contained Image Full Left, Text Right</h2>
        <KContainedImgFullLeftTextRight />

        <h2>K Contained Text Left, Image Full Right</h2>
        <KContainedTextLeftImgFullRight :TextWidth="33" :ImgWidth="66" />
    </div>
</template>

<script>
    import KContainedImgFullLeftTextRight from "../components/text-and-image/KContainedImgFullLeftTextRight";
    import KContainedTextLeftImgFullRight from "../components/text-and-image/KContainedTextLeftImgFullRight";

    export default {
        components: {KContainedImgFullLeftTextRight, KContainedTextLeftImgFullRight}
    }
</script>