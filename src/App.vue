<template>
  <div id="app">
    <InfoWrapper />
  </div>
</template>

<script>
import InfoWrapper from './components/InfoWrapper.vue'

export default {
  name: 'app',
  components: {
    InfoWrapper
  }
}
</script>

<style>
#app {
  width: 100%;
}

@media screen and (min-width: 1024px) {
  #app {
    width: 100%;
    display: flex;
    justify-content: center;
    /* background-color: linear-gradient(to right, #191948, #2F2F82); */
      background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  }
} 

</style>
