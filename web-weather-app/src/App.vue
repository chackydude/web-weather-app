<template>
  <div id="app">
      <main>
          <!--search-part-->
          <div class="search-wrapper">
              <input
                      type="text"
                      class="search-bar"
                      placeholder="Enter the city name..."
                      v-model = "query"
                      @keypress="fetchWeather"
              >
          </div>

          <!--weather-info-part-->
          <div class="weather" v-if="typeof weather.main != 'undefined'">
              <WeatherItem
                      v-bind:weather="weather"
                      v-bind:imgUrl="imgUrl"
              />
          </div>
      </main>
  </div>
</template>

<script>
import WeatherItem from "./components/WeatherItem";
export default {
      name: 'App',

      components: {
          WeatherItem
      },

      data () {
          return {
              api_key: '182c7bbcc2c022c0b3f13b3ccf9198cc',
              url_base: 'https://api.openweathermap.org/data/2.5/',
              // api-links to get info
              // request to the main info about weather
              request_base: "https://www.metaweather.com/api/location/",
              // request to the info about the city
              request_search_base: "https://www.metaweather.com/api/location/search/?query=",
              query: '',
              weather: {},
              imgUrl: "http://openweathermap.org/img/w/",
          }
      },

      methods: {
          fetchWeather(e) {
              if (e.key == "Enter") {

                  fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                  .then(result => {
                      return result.json();
                  }).then(this.setResult);
              }
          },
          // replace weather by received data
          setResult(result) {
              this.weather = result;
              this.imgUrl = "http://openweathermap.org/img/w/" + this.weather.weather[0].icon + ".png";
          },
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
        /*background-image: url("./assets/cold-background.jpg");*/
        background-image: url("./assets/warm-background.png");
        background-size: cover;
        background-position: bottom;
        transition: 0.5s;
    }

    main {
        min-height: 100vh;
        padding: 30px;
    }

    .search-wrapper .search-bar {
        display: block;
        width: 75%;
        padding: 15px;
        margin: auto;
        margin-bottom: 100px;
        font-size: 20px;
        appearance: none;
        border:none;
        outline: none;
        background-color: #eaeaea;
        opacity: 0.8;
        border-radius: 10px;
        transition: 0.4s;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }

    .search-wrapper .search-bar:focus {
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, 0.75);
    }

    .weather {
        display: flex;
        justify-content: center;
    }

</style>
