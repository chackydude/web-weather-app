<template>
    <div id="defaultWeather">
        <div class="weatherItems">
            <WeatherItem
                    v-bind:weather = "fetchGlobal(this.cities[0])"
                    v-bind:imgUrl = "imgUrl + this.weather.weather[0].icon + '.png'"
            />
        </div>
    </div>
</template>

<script>
    import WeatherItem from "../components/WeatherItem";
    export default {
        name: 'DefaultWeather',
        components: {
            WeatherItem,
        },
        data() {
            return {
                api_key: '182c7bbcc2c022c0b3f13b3ccf9198cc',
                cities: ['Boston', 'Kazan', 'Moscow', 'Ulyanovsk'],
                url_base: 'https://api.openweathermap.org/data/2.5/',
                imgUrl: "http://openweathermap.org/img/w/",
                weather: {}
            }
        },
        // в общем пометка для себяпроснувшегося:
        // роутинг пытался настроить, почти настроил
        // проблемка с передачей json к WeatherItem, мы его получаем нормальный, но при передаче он undefined
        // fetch несколько раз на странице - проблема
        methods: {
            fetchWeatherForDefault(city) {
                fetch(`${this.url_base}weather?q=${city}&units=metric&APPID=${this.api_key}`)
                    .then(result => {
                        return result.json();
                    }).then(result => {
                        this.weather = result;
                });
            },
            fetchGlobal(item) {
                this.fetchWeatherForDefault(item);
                this.cities.filter(element => element !== item)
                return this.weather
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

    #defaultWeather {
        /*background-image: url("./assets/cold-background.jpg");*/
        /*background-image: url("./assets/dark-background2.jpg");*/
        background-image: url("/web-weather-app/src/assets/warm-background.png");
        background-size: cover;
        background-position: bottom;
        transition: 0.5s;
    }

    main {
        min-height: 100vh;
        padding: 30px;
    }

    .weatherItems {
        transition: 1s;
        display: flex;
        justify-content: center;
    }

</style>