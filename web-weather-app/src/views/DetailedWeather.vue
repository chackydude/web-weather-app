<template>
    <div id="detailed">
        <router-link to="/">Home</router-link>
        <router-link to="/DefaultWeather">Default</router-link>
        <main>
            <!--search-part-->
            <div class="search-wrapper">
                <SearchBar
                        @updateWeather = "updateWeather"
                        @updateImage = "updateImage"
                />
            </div>

            <!--weather-info-part-->
            <div class="weather" v-if="typeof weather.main != 'undefined'">
                <WeatherItem
                        v-bind:weather="weather"
                        v-bind:imgUrl="imgUrl"
                />
                <DetailedWeatherItem
                        v-bind:weather="weather"
                />
            </div>
        </main>
    </div>
</template>

<script>

    import SearchBar from "@/components/SearchBar";
    import WeatherItem from "@/components/WeatherItem";
    import DetailedWeatherItem from "@/components/DetailedWeatherItem.vue";
    export default {
        name: 'DetailedWeather',

        components: {
            WeatherItem, SearchBar, DetailedWeatherItem
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

        methods: {
            updateWeather(result) {
                this.weather = result;
            },

            updateImage(image) {
                this.imgUrl = image;
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

    #detailed {
        background-image: url("/web-weather-app/src/assets/warm-background.png");
        background-size: cover;
        background-position: bottom;
        transition: 0.5s;
    }

    main {
        min-height: 100vh;
        padding: 30px;
    }

    .weather {
        transition: 1s;
        display: flex;
        justify-content: center;
    }

</style>
