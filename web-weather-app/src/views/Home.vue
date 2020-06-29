<template>
    <div class="home-wrapper">
        <h1>HomePage</h1>
        <h2>Vue weather wep-application. If you want too check application press "Get Started".
            For custom detailed response check "Detailed".</h2>
        <router-link to="/DefaultWeather" class="navItem">GET STARTED</router-link>
    </div>
</template>

<style scoped>
    .home-wrapper {
        color: white;
        background-size: cover;
        background-position: bottom;
        transition: 0.5s;
        width: 500px;
        margin: auto;
        text-align: center;
    }

    h2 {
        margin-bottom: 50px;
    }

    .navItem {
        padding: .20em 1.5em;
        width: 100px;
        height: 30px;
        border: 2px solid rgb(255, 255, 255);
        border-radius: 10px;
        text-decoration: none;
        font-size: 50px;
        color: white;
    }

    .navItem:hover {
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.4);
    }
</style>