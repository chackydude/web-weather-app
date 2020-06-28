<template>
        <div class="info-wrapper" v-if="typeof weather.main != 'undefined'">
            <img v-bind:src="imgUrl" alt="">
            <div class="temperature"> {{Math.round(weather.main.temp)}}°C</div>
            <div class="location-info">
                <div class="date"> {{ dateBuilder() }} </div>
                <div class="locaton">{{ weather.weather[0].main }} in {{ weather.name }} </div>
                <div class="description"> ({{ weather.weather[0].description }}) </div>
            </div>
            <div class="weather">

                <div class="wind"> {{ weather.wind.speed }}mph</div>
                <div class="humidity">{{ weather.main.humidity }}%</div>
                <div class="pressure">{{ weather.main.pressure }}mb</div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "WeatherItem"
    }
</script>

<style scoped>
    .info-wrapper {
        text-align: center;
        font-size: 30px;
        color: #fff;
        text-shadow: 1px 1px black;
        background-color:rgba(255, 255, 255, 0.4);
        width: 300px;
        padding: 20px;
        border-radius: 20px;
        margin: auto;
    }

    .temperature {
        font-size: 50px;
        margin-bottom: 10px;
    }

</style>