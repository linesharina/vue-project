<template>
    <div class="info">
        <!-- <h1>{{ title }}</h1> -->
        <slot name="img"></slot>
        <slot name="content"></slot>
            <!-- <NavBar /> -->
    </div>
</template>

<script>
// import NavBar from './NavBar.vue'

export default {
  name: 'Info',
  components: {
    // NavBar,
  },
  props: {
      title: String
  }
}
</script>

<style>
    h1 {
        font-size: 5.5em;
        font-family: 'Playfair Display', serif;
        color: #191948;
        line-height: 1;
        max-width: 100%;
    }
    
    .info {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        overflow: auto;
    }

    @media screen and (min-width: 1024px) {
        h1 {
            font-size: 6em;
        }

        .info {
            flex-direction: row;
        }
    }


</style>
