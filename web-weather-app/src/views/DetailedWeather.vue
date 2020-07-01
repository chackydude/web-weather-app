<template>
    <div id="detailed">
        <div class="nav">
            <router-link to="/" class="navItem">Home</router-link>
            <router-link to="/DefaultWeather" class="navItem">Default</router-link>
            <!--search-part-->
            <div class="search-wrapper">
                <SearchBar
                        @updateWeather = "updateWeather"
                        @updateImage = "updateImage"
                />
            </div>
        </div>
        <main>

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

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }

    body {
        font-family: Calibri, sans-serif;
    }

    .weather {
        display: block;
        justify-content: center;
        margin-right: 50px;
    }

    .navItem {
        padding: .20em 1.5em;
        width: 100px;
        height: 30px;
        border: 2px solid rgb(255, 255, 255);
        border-radius: 10px;
        text-decoration: none;
        margin-left: 10px;
    }

    .navItem:hover {
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.4);
    }

    .nav {
        display: flex;
        justify-content: start;
        margin-bottom: 30px;
    }

    .search-wrapper {
        margin-left: 30px;
    }

</style>
