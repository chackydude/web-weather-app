<template>
  <div id="app">
      <h1>Weather App</h1>
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
          }
      },
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
        background-image: url("./assets/dark-background2.jpg");
        /*background-image: url("./assets/warm-background.png");*/
        background-size: cover;
        background-position: bottom;
        transition: 0.5s;
        min-height: 100vh;
    }

    main {
        /*min-height: 100vh;*/
        padding: 30px;
        margin: auto;
        width: 900px;
    }

    h1 {
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    hr {
        width: 55%;
        margin: auto;
        border: none;
        height: 2px;
        background-color: white;
        border-radius: 1px;
    }

</style>
