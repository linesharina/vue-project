<template>
    <div class="info">
        <h1>{{ fullname }}</h1>
        <NavBar />
    </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'Info',
  components: {
    NavBar,
  },
  props: {
      fullname: String
  }
}
</script>

<style>
    h1 {
        font-size: 6em;
        width: 100%;
        max-width: 90%;
        margin: 0 auto;
        font-family: 'Playfair Display', serif;
    }
    
    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (min-width: 1024px) {
        h1 {
            font-size: 8em;
            color: #191948
        }
    }


</style>
