<template>
    <div class="info-wrapper">
        <div class="max-temp">Max temperature is {{Math.round(weather.main.temp_max)}}°C</div>
        <div class="min-temp">Min temperature is {{Math.round(weather.main.temp_min)}}°C</div>
        <div class="feels-like">Feels like {{Math.round(weather.main.feels_like)}}°C</div>
        <div class="coordinates">Latitude: {{weather.coord.lat}}
                                    Longitude: {{weather.coord.lon}} </div>
        <div class="country">Country: {{weather.sys.country}}</div>
        <div class="wind-direction">Wind degree: {{Math.round(weather.wind.deg)}}</div>
        <div class="clouds">Cloudiness: {{weather.clouds.all}}%</div>
        <div class="visibility">Visibility: {{weather.visibility}}m</div>
        <div class="sunrise">Sunrise: {{new Date(weather.sys.sunrise*1000).toLocaleString("en-US")}}</div>
        <div class="sunset">Sunset: {{new Date(weather.sys.sunset*1000).toLocaleString("en-US")}}</div>
        <div class="sunrise">Obtained: {{new Date(weather.dt*1000).toLocaleString("en-US")}}</div>
    </div>
</template>

<script>
    export default {
        name: "DetailedWeatherItem",
        props: ['weather', 'imgUrl']
    }
</script>

<style scoped>
    .info-wrapper {
        text-align: center;
        font-size: 30px;
        color: #fff;
        text-shadow: 1px 1px black;
        background-color:rgba(255, 255, 255, 0.4);
        width: 500px;
        padding: 20px;
        border-radius: 20px;
        margin-left: 10px;
    }

</style>