<template>
    <div class="info-wrapper">
        <img v-bind:src="imgUrl" alt="weather-icon">
        <div class="temperature"> {{Math.round(weather.main.temp)}}°C</div>
        <div class="location-info">
            <div class="date"> {{getDate}} </div>
            <div class="locaton">{{ weather.weather[0].main }} in {{ weather.name }} </div>
            <div class="description"> ({{ weather.weather[0].description }}) </div>
        </div>
        <div class="more-info">
            <div class="wind">Wind speed: {{ weather.wind.speed }}mph</div>
            <div class="humidity">Humidity: {{ weather.main.humidity }}%</div>
            <div class="pressure">Pressure {{ weather.main.pressure }}mb</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        props: ['weather', 'imgUrl'],
        name: "WeatherItem",
        computed: mapGetters(['getDate']),
        methods: mapActions(['dateBuilder']),
        mounted() {
            this.dateBuilder();
        },
    }
</script>

<style>
    .info-wrapper {
        text-align: center;
        font-size: 30px;
        color: #fff;
        text-shadow: 1px 1px black;
        background-color:rgba(255, 255, 255, 0.4);
        width: 280px;
        padding: 20px;
        border-radius: 20px;
    }

    .temperature {
        font-size: 50px;
        margin-bottom: 10px;
    }
</style>