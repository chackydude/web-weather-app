import Vue from 'vue'
import Vuex from 'vuex'
import weatherItem from "./modules/weatherItem";
import searchBar from "./modules/searchBar";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        weatherItem, searchBar
    }
})