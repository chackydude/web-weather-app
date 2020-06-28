<template>
    <div class="info-wrapper">
        <img v-bind:src="imgUrl" alt="weather-icon">
        <div class="temperature"> {{Math.round(weather.main.temp)}}°C</div>
        <div class="location-info">
            <div class="date"> {{ dateBuilder() }} </div>
            <div class="locaton">{{ weather.weather[0].main }} in {{ weather.name }} </div>
            <div class="description"> ({{ weather.weather[0].description }}) </div>
        </div>
        <div class="more-info">
            <div class="wind"> {{ weather.wind.speed }}mph</div>
            <div class="humidity">{{ weather.main.humidity }}%</div>
            <div class="pressure">{{ weather.main.pressure }}mb</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['weather', 'imgUrl'],
        data() {
            return {}
        },
        name: "WeatherItem",
        methods: {
            dateBuilder () {
                let d = new Date();
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
                                "October", "November", "December"];
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let day = days[d.getDay()];
                let date = d.getDate();
                let month = months[d.getMonth()];
                return `${day} ${date} ${month}`;
            },
        }
    }
</script>

<style scoped>
    .info-wrapper {
        text-align: center;
        font-size: 30px;
        color: #fff;
        text-shadow: 1px 1px black;
        background-color:rgba(255, 255, 255, 0.4);
        width: 280px;
        height: 400px;
        padding: 20px;
        border-radius: 20px;
        margin-left: 10px;
    }

    .temperature {
        font-size: 50px;
        margin-bottom: 10px;
    }

</style>