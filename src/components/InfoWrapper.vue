<template>
    <div class="info-wrapper">
        <!-- <Info id="fp-title" title="Line Sharina" /> -->
        <Info>
            <img slot="img" :src="image" alt="Colorful image">
            <div class="content" slot="content">
                <h1 id="fp-title">Line Sharina</h1>
                <NavBar />
            </div>
        </Info>
    </div>
</template>

<script>
import Info from './Info.vue'
import NavBar from './NavBar.vue'

export default {
  name: 'InfoWrapper',
  data() {
      return {
          image: require("../assets/bg-2.jpg")
      }
  },
  components: {
    Info,
    NavBar
  }
}
</script>

<style>
    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }

    #fp-title {
        width: 100%;
        max-width: 90%;
        margin: 0 auto;
        text-align: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        padding: 25px 0;
    }

    .content h1 {
        text-align: center;
    }

    @media screen and (min-width: 1024px) {
        img {
            width: 50%;
            height: 100%;
        }

        #fp-title {
            text-align: left;
            font-size: 8em;
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
