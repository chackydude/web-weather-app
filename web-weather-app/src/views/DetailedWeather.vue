<template>
    <div id="detailed-wrapper">
        <div class="navBar">
            <router-link to="/" class="navItem">Home</router-link>
            <router-link to="/default" class="navItem">Default</router-link>
            <!--search-part-->
            <SearchBar class="search-wrapper"
                    @updateWeather = "updateWeather"
                    @updateImage = "updateImage"
            />
        </div>
        <!--weather-info-part-->
        <div class="weather" v-if="typeof weather.main != 'undefined'">
            <WeatherItem
                    class="weathItem"
                    v-bind:weather="weather"
                    v-bind:imgUrl="imgUrl"
            />
            <DetailedWeatherItem
                    class="detailItem"
                    v-bind:weather="weather"
            />
        </div>
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
                // api_key: '182c7bbcc2c022c0b3f13b3ccf9198cc',
                // // api-links to get info
                // // request to the main info about weather
                // url_base: 'https://api.openweathermap.org/data/2.5/',
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
        display: flex;
        justify-content: center;
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

    .navBar {
        margin: auto;
        width: 80%;
        display: flex;
        justify-content: start;
        margin-bottom: 30px;
    }

    .search-wrapper {
        margin-left: 20px;
        width: 70%;
    }

    .detailItem {
        margin-left: 10px;
    }

    @media (max-width: 1000px) {

        .search-wrapper {
            margin-top: 20px;
            width: 90%;
            margin-left: auto;
            margin-right: auto;
        }

        .navBar {
            flex-direction: column;
        }

        .navItem {
            margin-left: auto;
            margin-right: auto;
            width: 220px;
            height: 40px;
            font-size: 20px;
            text-align: center;
            margin-bottom: 20px;
        }

        .weathItem {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 20px;
            font-size: 20px;
        }

        .detailItem {
            font-size: 20px;
            width: 300px;
            margin: auto;
        }

        .weather {
            flex-direction: column;
        }
    }

    @media (max-width: 400px) {
        .navItem {
            margin-right: auto;
            margin-left: auto;
            width: 150px;
            height: 30px;
            font-size: 15px;
            margin-bottom: 5px;
        }

        .weathItem {
            font-size: 20px;
            width: 200px;
        }

        .detailItem {
            font-size: 15px;
            width: 200px;
        }
    }

</style>
