<template>
    <img :data-src="full_url" class="cld-responsive" alt="" />
</template>

<script>
export default {
    props: {
        src: {
            type: String
        }
    },
    data() {
        return {
            path: 'https://res.cloudinary.com/andyxmas/image/upload/',
            params: 'c_scale,f_auto,q_auto,w_auto'
        }
    },
    computed: {
        full_url() {
            return this.path + this.params + this.src
        }
    },
    async mounted() {
        cloudinary.Cloudinary.new({cloud_name: "andyxmas"}).responsive()
    }
}
</script>
