<template>
    <div class="info-wrapper">
        <img src="../assets/bg.jpg" alt="Colorful image">
        <div class="bg-img"></div>
        <Info fullname="Line Sharina" />
    </div>
</template>

<script>
import Info from './Info.vue'

export default {
  name: 'InfoWrapper',
  components: {
    Info
  }
}
</script>

<style>
    img {
        width: 100%;
        height: 80%;
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
            box-shadow: 14px 13px 20px -10px #191948;
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
