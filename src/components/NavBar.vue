<template>
    <nav>
        <span v-if="!main"><router-link to="/">Hjem</router-link></span>
        <router-link to="/about">Om meg</router-link>
        <router-link to="/references">Referanser</router-link>
        <router-link to="/contact">Kontakt</router-link>
    </nav>
</template>

<script>
export default {
    computed: {
        main() {
            return this.$route.path === '/'
        }
    }
}
</script>

<style>
    nav {
        display: flex;
        justify-content: space-evenly;
        padding: 16px 0;
    }

    nav a {
        text-decoration: none;
        text-transform: uppercase;
        color: black;
    }

    nav a:hover {
        color: darkgreen;
        cursor: pointer;
        font-weight: bold;
    }
</style>