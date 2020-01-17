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

a, p {
  font-family: 'Lato', sans-serif;
}

#app {
  width: 100%;
}

@media screen and (min-width: 1024px) {
  #app {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* background-color: linear-gradient(to right, #191948, #2F2F82); */
      background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  }
} 

</style>
