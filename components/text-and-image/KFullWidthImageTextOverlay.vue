<template>
    <div :class="['k-full-width-img-text-overlay', TextPosition ? 'position-' + TextPosition : '']"
         :style="`background-image: url('`+imageUrl+`')`"
         v-if="title || desc || linkText">
        <div class="text-overlay">
            <h2 v-if="title">{{ title }}</h2>
            <p v-if="desc">{{ desc }}</p>
            <n-link :to="linkPath" v-if="linkPath && linkText" :class="[linkClass ? linkClass : '']">{{ linkText }}</n-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            //required string - pass in left, center, or right
            TextPosition: {
                type: String,
                required: true,
                validator: function (value) {
                    // The value must match one of these strings
                    return ['left', 'center', 'right'].indexOf(value) !== -1
                }
            },
            title: String,
            desc: String,
            linkPath: String,
            linkText: String,
            imageUrl: {
                type: String,
                required: true
            },
            linkClass: String
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