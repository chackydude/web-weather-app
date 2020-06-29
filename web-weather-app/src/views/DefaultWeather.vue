<template>
    <div id="defaultWeather">
        <div class="nav">
            <router-link to="/" class="navItem">Home</router-link>
            <router-link to="/DetailedWeather" class="navItem">Detailed</router-link>
            <p id="information">Here you can find 3️⃣example queries</p>
        </div>
        <div class="weatherItems">
            <WeatherItem
                v-bind:weather= "this.weather.list[0]"
                v-bind:imgUrl = "this.imgUrl + this.weather.list[0].weather[0].icon + '.png'"
            />
            <WeatherItem
                    v-bind:weather= "this.weather.list[1]"
                    v-bind:imgUrl = "this.imgUrl + this.weather.list[1].weather[0].icon + '.png'"
            />
            <WeatherItem
                    v-bind:weather= "this.weather.list[2]"
                    v-bind:imgUrl = "this.imgUrl + this.weather.list[2].weather[0].icon + '.png'"
            />
        </div>
        <h3>Obtained {{new Date(this.weather.list[0].dt*1000).toLocaleString("en-US")}}</h3>
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
                cities: [{name : 'Boston', id : 4930956},
                            {name : 'Kazan', id : 551487},
                            {name : 'Moscow', id: 524901}],
                url_base: 'https://api.openweathermap.org/data/2.5/',
                imgUrl: "http://openweathermap.org/img/w/",
                weather: {},
            }
        },

        methods: {
            fetchWeatherForDefault() {
                fetch(`${this.url_base}group?id=${this.cities[0].id},${this.cities[1].id},${this.cities[2].id}&units=metric&APPID=${this.api_key}`)
                    .then(result => {
                        return result.json();
                    }).then(this.setResult);
            },

            setResult(result) {
                this.weather = result;
                console.log(result.json)
            }
        },

        mounted() {
            this.fetchWeatherForDefault();
        }
    }
</script>

<style>
    * {
        color: white;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Calibri, sans-serif;
    }

    #defaultWeather {
        background-image: url("/web-weather-app/src/assets/warm-background.png");
        background-size: cover;
        background-position: bottom;
        transition: 0.5s;
    }

    .weatherItems {
        transition: 1s;
        display: flex;
        justify-content: center;
    }

    h3 {
        margin-top: 40px;
        text-align: center;
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
        justify-content: flex-start;
        margin-bottom: 80px;
    }

    #information {
        padding-top: 7px;
        flex-basis: 65%;
        text-align: center;
        font-size: 18px;
    }

</style>