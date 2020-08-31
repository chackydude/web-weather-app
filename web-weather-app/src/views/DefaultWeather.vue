<template>
    <div id="default-wrapper" v-if="typeof weather.list != 'undefined'">
        <div class="nav">
            <router-link to="/" class="navItem">Home</router-link>
            <router-link to="/detailed" class="navItem">Detailed</router-link>
            <p id="information">Here you can find 3️⃣example queries</p>
        </div>
        <div class="weatherItems">
            <WeatherItem
                    class="weathItem"
                    v-bind:weather= "this.weather.list[0]"
                    v-bind:imgUrl = "this.imgUrl + this.weather.list[0].weather[0].icon + '.png'"
            />
            <WeatherItem
                    class="weathItem"
                    v-bind:weather= "this.weather.list[1]"
                    v-bind:imgUrl = "this.imgUrl + this.weather.list[1].weather[0].icon + '.png'"
            />
            <WeatherItem
                    class="weathItem"
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
                cities: [{name : 'Boston', id : 4930956},
                    {name : 'Kazan', id : 551487},
                    {name : 'Moscow', id: 524901}],
                api_key: process.env.VUE_APP_API_KEY,
                // request to the info about the city, + group&id for the group of cities
                url_base: process.env.VUE_APP_BASE_URL,
                imgUrl: process.env.VUE_APP_GET_IMG_URL,
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
            }
        },
        mounted() {
            this.fetchWeatherForDefault();
        }
    }
</script>

<style scoped>
    * {
        color: white;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Calibri, sans-serif;
    }
    .weatherItems {
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
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    #information {
        padding-top: 7px;
        flex-basis: 65%;
        text-align: center;
        font-size: 18px;
    }
    .weathItem {
        padding: 20px;
        margin-left: 10px;
    }
    @media (max-width: 1300px) {
        .weathItem {
            font-size: 20px;
        }
    }
    @media (max-width: 1000px) {
        .weatherItems {
            display: block;
            margin: auto;
        }
        .weathItem {
            font-size: 35px;
            margin-bottom: 20px;
            width: 300px;
            margin-right: auto;
            margin-left: auto;
        }
        .nav {
            flex-direction: column;
            margin-bottom: 20px;
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
    }
    @media (max-width: 600px) {
        .weathItem {
            font-size: 20px;
            width: 200px;
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
    }
</style>