<template>
  <div id="app" :class="theme !== true ? 'dark' : ''">
      <div class="header">
          <p id="name">Weather App</p>
          <button v-on:click="changeTheme" id="changer">Change Theme</button>
      </div>
      <hr>
      <main>
          <router-view/>
      </main>
  </div>
</template>

<script>

export default {
      name: 'App',

      components: {
          // WeatherItem, SearchBar, DetailedWeatherItem
      },

      data () {
          return {
              api_key: '182c7bbcc2c022c0b3f13b3ccf9198cc',
              // api-links to get info
              // request to the main info about weather
              url_base: 'https://api.openweathermap.org/data/2.5/',
              imgUrl: "http://openweathermap.org/img/w/",
              query: '',
              weather: {},
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
        color: white;
    }

    #app {
        /*background-image: url("./assets/cold-background.jpg");*/
        /*background-image: url("./assets/dark-background2.jpg");*/
        background-image: url("./assets/warm-background.png");
        background-size: cover;
        background-position: bottom;
        transition: 0.5s;
        min-height: 100vh;
    }

    #app.dark {
        background-image: url("./assets/dark-background2.jpg");
    }

    main {
        /*min-height: 100vh;*/
        padding: 30px;
        margin: auto;
        width: 900px;
    }

    hr {
        width: 55%;
        margin: auto;
        border: none;
        height: 2px;
        background-color: white;
        border-radius: 1px;
    }

    #changer {
        width: 100px;
        height: 30px;
        border-radius: 10px;
        border: 2px solid rgb(255, 255, 255);
        background-color:rgba(255, 255, 255, 0);
        outline: none;
        margin-top: 5px;
        margin-left: auto;
        margin-bottom: 10px;
    }

    #changer:hover {
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.4);
    }

    .header {
        display: flex;
        justify-content: center;
        margin: auto;
        width: 800px;
    }

    #name {
        margin-top: 5px;
        font-size: 25px;
    }

</style>
