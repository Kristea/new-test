<template>
    <b-navbar wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <Logo />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/blog' }">
                Blog
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>

import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import { Navbar } from 'buefy'

Vue.use(Navbar)

export default {
  components: {
    Logo
  }
}
</script>