<template>
    <div class="search-wrapper">
        <input
            type="text"
            class="search-bar"
            placeholder="Enter the city name..."
            v-model = "query"
            @keypress="submit"
        >
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        data () {
            return {
                api_key: process.env.VUE_APP_API_KEY,
                // request to the info about the city
                url_base: process.env.VUE_APP_BASE_URL,
                query: '',
            }
        },
        methods: {
            fetchWeather() {
                    fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                        .then(result => {
                            return result.json();
                        }).then(this.sendResult);
            },
            // send received data
            sendResult(result) {
                this.$emit("updateWeather", result);
                this.$emit("updateImage", process.env.VUE_APP_GET_IMG_URL + result.weather[0].icon + ".png");
            },
            submit(e) {
                if (e.key === "Enter" && this.query.trim()) {
                    this.fetchWeather();
                }
            }
        },
    }
</script>

<style>
    .search-wrapper .search-bar {
        display: block;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        appearance: none;
        border:none;
        outline: none;
        color: black;
        background-color: #eaeaea;
        opacity: 0.8;
        border-radius: 10px;
        transition: 0.4s;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }

    .search-wrapper .search-bar:focus {
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, 0.75);
    }
    
    @media screen and (max-width: 475px) {
        .search-bar {
            height: 25px;
        }

        .search-bar::placeholder {
            font-size: 15px;
        }
    }

</style>