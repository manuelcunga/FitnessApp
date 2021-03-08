import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'
import Home from '../views/Home/Home.vue'
import login from '../views/SingIN/Singin.vue'
import cadastrar from '../views/singnUp/'
import dashboard from '../views/dashboard'
import desafio from '../components/desafio/Tdesafio'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: login
    }, {
        path: '/cadastrar',
        name: 'cadastrar',
        component: cadastrar
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeResolve((to, from, next) => {
    if (to.name) {
        nprogress.start()
    }
    next()

})

router.afterEach((from) => {
    nprogress.done()
})

export default router