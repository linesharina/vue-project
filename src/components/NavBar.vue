<template>
    <nav>
        <router-link to="/about">Om meg</router-link>
        <router-link to="/references">Referanser</router-link>
        <router-link to="/contact">Kontakt</router-link>
    </nav>
</template>

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