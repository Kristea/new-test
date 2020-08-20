<template>
  <page v-slot:main>
    <div>
        <div class="container">
            <h1>Text and Image Slices</h1>
        </div>

      <k-text-and-image
        :sliceContent="sliceContent"
        text-position="right"
      />

      <k-text-and-image
        :sliceContent="sliceContent"
        text-position="left"
        image-style="tall"
      />


      <k-text-and-image
        :sliceContent="sliceContent"
        text-position="right"
        image-style="full-bleed-100"
      />

    </div>
  </page>
</template>

<script>
    import KTextLeftImgRight from "../components/text-and-image/KTextLeftImgRight";
    import KImgLeftTextRight from "../components/text-and-image/KImgLeftTextRight";
    import KFullWidthImageTextOverlay from "../components/text-and-image/KFullWidthImageTextOverlay";

    export default {
      components: {KTextLeftImgRight, KImgLeftTextRight, KFullWidthImageTextOverlay},
        data() {
          return {
            sliceContent: {
              "template": "text-and-image",
              "cta": {
                "select_link": [

                ],
                "text": "Buy me!",
                "link": "https://google.com"
              },
              "headline": "Heading the slices!",
              "content": "Oh, this is perhaps the wrong type of text field?",
              "image": "sample"
            },
            sliceClasses: ''
          }
        }
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
