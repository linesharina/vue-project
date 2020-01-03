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
#app {

}
</style>
