<template>
  <div id="app" :class="theme !== true ? 'dark' : ''">
      <HeaderBar @changeTheme=changeTheme />
      <main>
          <router-view/>
      </main>
  </div>
</template>

<script>

import HeaderBar from "./components/HeaderBar";
export default {
    name: 'App',
    components: {HeaderBar},
    data () {
      return {
          theme: true,
      }
    },
    methods: {
        changeTheme() {
          this.theme = !this.theme
        }
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Calibri, sans-serif;
    }

    #app {
        color: white;
        background: url("assets/light-background.png") bottom no-repeat;
        background-size: cover;
        transition: 0.75s;
        min-height: 100vh;
    }

    #app.dark {
        background-image: url("./assets/dark-background2.jpg");
    }

    main {
        padding: 30px;
        margin: auto;
        width: 80%;
    }
</style>