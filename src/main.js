import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueRouter from 'vue-router'
import Routes from "./routes";

Vue.config.productionTip = false
Vue.use(VueRouter)

const Router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
    store: store,
    router: Router,
    render: h => h(App)
}).$mount('#app')