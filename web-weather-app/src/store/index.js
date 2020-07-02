import Vue from 'vue'
import Vuex from 'vuex'
import weatherItem from "./modules/weatherItem";
import searchBar from "./modules/searchBar";
import defaultWeather from "./modules/defaultWeather";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        weatherItem, searchBar, defaultWeather
    }
})