
<template>
    <div>
        <h1>hello!</h1>
        <ul>
            <li v-for="item in blogPosts" :key="item.date">
                yo!
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data: {
        blogPosts = ['one', 'two']
    },
//   computed: {
//     blogPosts() {
//       return this.$store.state.blogPosts;
//     },
//   },
};
