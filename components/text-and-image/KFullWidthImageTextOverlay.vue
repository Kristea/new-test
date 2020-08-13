<template>
    <div :class="['k-full-width-img-text-overlay', TextPosition ? 'position-' + TextPosition : '']"
         style="background-image: url('https://source.unsplash.com/random')">
        <div class="text-overlay">
            <h2>We transform your challenges into opportunities</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <n-link to="/">Call to action</n-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            TextPosition: {
                type: String,
                required: true
            } //pass in left, center, or right
        }
    }
</script>

<style scoped lang="scss">
    .k-full-width-img-text-overlay {
        width: 100%;
        min-height: 70vh;
        position: relative;
        display: flex;
        align-items: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        &.position-left {
            justify-content: flex-start;
        }

        &.position-center {
            justify-content: center;
        }

        &.position-right {
            justify-content: flex-end;
        }

        .text-overlay {
            padding: 5%;
            width: 60%;

            @media (min-width: 500px) {
                width: 50%;
            }
            @media (min-width: 800px) {
                width: 40%;
            }
        }
    }
</style>