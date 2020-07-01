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
            path: '/default',
            component: () => import("./views/DefaultWeather.vue"),
        },
        {
            path: '/detailed',
            component: () => import("./views/DetailedWeather.vue"),
        }
    ]
})