import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/DefaultWeather',
            component: () => import("./views/DefaultWeather.vue"),
        },
        {
            path: '/DetailedWeather',
            component: () => import("./views/DetailedWeather.vue"),
        }
    ]
})