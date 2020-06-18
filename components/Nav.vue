<template>
    <b-navbar wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <Logo />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/blog' }">
                Blog
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item href="/admin">
                <div class="buttons">
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>