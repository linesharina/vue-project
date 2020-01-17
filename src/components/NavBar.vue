<template>
    <nav>
        <a href="#">Om meg</a>
        <a href="#">Referanser</a>
        <a href="#">Kontakt</a>
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