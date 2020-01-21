<template>
    <div class="info-wrapper">
        <img :src="image" alt="Colorful image">
        <div class="bg-img"></div>
        <Info id="fp-title" title="Line Sharina" />
    </div>
</template>

<script>
import Info from './Info.vue'

export default {
  name: 'InfoWrapper',
  data() {
      return {
          image: require("../assets/bg-2.jpg")
      }
  },
  components: {
    Info
  }
}
</script>

<style>
    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }

    #fp-title h1 {
        width: 100%;
        max-width: 90%;
        margin: 0 auto;

    }

    @media screen and (min-width: 1024px) {
        img {
            width: 50%;
            height: 100%;
        }

        .info-wrapper {
            display: flex;
            width: 100%;
            max-width: 900px;
            margin: 100px 0;
            background-color: white;
            box-shadow: 0 29px 40px -27px rgba(19, 72, 15, 0.6);
        }
    }
    
    @media screen and (min-width: 1366px) {
        .info-wrapper {
            max-width: 1024px;
        }
    }

    @media screen and (min-width: 1920px) {
        .info-wrapper {
            max-width: 1366px;
        }
    }
</style>
