<template>

    <cld-image
            :publicId="id"
            :dpr="dpr"
            :loading="loading"
            :quality="quality"
            :fetchFormat="fetchFormat"
            :alt="alt"
            :responsive="responsive"
            :width="width"
            :crop="crop"
    >
    </cld-image>

</template>

<script>

    import Vue from "vue";
    import Cloudinary, {CldImage} from "cloudinary-vue";

    Vue.use(Cloudinary, {
        configuration: {
            cloudName: "floccimages"
        },
        components: [CldImage]
    });


    export default {
        props: {
            id: {
                type: String,
                required: true
            },
            width: {
                default: "auto"
            },
            alt: {
                default: ""
            },
            dpr: {
                default: "auto"
            },
            responsive: {
                default: true
            },
            crop: {
                default: "scale"
            },
            quality: {
                default: "auto"
            },
            fetchFormat: {
                default: "auto"
            },
            loading: {
                default: "lazy"
            },
            placeholder: {
                default: "lqip"
            }

        },
    }
</script>
