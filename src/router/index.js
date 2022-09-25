import { createWebHistory, createRouter} from 'vue-router'
import About from '../views/AboutView.vue'
import Home from '../components/HomeView.vue'

const routes = [
    {
        path : "/",
        name: "Home",
        component: Home,
        alias: '/FeastChoice'
    },

    {
        path : "/About",
        name: "About",
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;