<template>
    <div class="info-wrapper">
        <!-- <Info id="fp-title" title="Line Sharina" /> -->
        <Info>
            <img slot="img" :src="image" alt="Colorful image">
            <div class="content" slot="content">
                <NavBar />
                <h1>Om meg</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur eget risus ut eros suscipit lobortis. </p>
            </div>
        </Info>
    </div>
</template>

<script>
import Info from './Info.vue'
import NavBar from './NavBar.vue'

export default {
  name: 'About',
  data() {
      return {
          image: require("../assets/bg.jpg")
      }
  },
  components: {
    Info,
    NavBar
  }
}
</script>

