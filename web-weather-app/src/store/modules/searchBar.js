export default {
    actions: {
        fetchWeather() {
            fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(result => {
                    return result.json();
                }).then(this.setResult);
        },
        setResult(result) {
            this.$emit("updateWeather", result);
            this.$emit("updateImage", "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png");
        },
    },
    mutations: {
        setQuery(state, query) {
            state.query = query
        }
    },
    state: {
        api_key: '182c7bbcc2c022c0b3f13b3ccf9198cc',
        // request to the info about the city
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        currentWeather: {},
        currentImg: '',
    },
    getters: {},
}