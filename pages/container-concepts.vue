<template>
    <div>
        <div class="container">
            <h1>Text and Image Slices with concepts of containers</h1>
        </div>

        <div class="section">
            <KImgLeftTextRightSliceClass title="Slice container class"
                                         linkPath="/"
                                         linkText="Go Home"
                                         image="sample"
                                         :Container="true"
                                         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>

            <KImgLeftTextRightManualPadding title="Slice passing in all the widths"
                                            linkPath="/"
                                            linkText="Go Home"
                                            :TextWidth="30"
                                            :ImgWidth="30"
                                            :padLeft="20"
                                            :padRight="20"
                                            image="sample"
                                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
        </div>
    </div>
</template>

<script>
    import KImgLeftTextRightSliceClass from "../components/text-and-image/KImgLeftTextRightSliceClass";
    import KImgLeftTextRightManualPadding from "../components/text-and-image/KImgLeftTextRightManualPadding";

    export default {
        components: {KImgLeftTextRightSliceClass, KImgLeftTextRightManualPadding}
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

    .section {
        border-bottom: dashed 1px black;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }
</style>