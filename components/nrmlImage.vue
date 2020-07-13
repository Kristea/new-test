<template>

    <cld-image
        dpr="auto"
        responsive="width"
        width="auto"
        crop="scale"
        :publicId="publicID">
    </cld-image>

</template>

<script>
export default {
    props: {
        src: {
            type: String
        }
    },
    computed: {
        publicID () {
            return this.src.substring(1) // removing the leading forward slash
        }
    }
}
</script>
