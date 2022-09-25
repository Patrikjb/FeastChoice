import { createWebHistory, createRouter} from 'vue-router'
import Init from '../views/Init.vue'
import MainMobile from '../views/MainMobile.vue'
import Main from '../views/Main.vue'

const routes = [
    {
        path : "/",
        name: "Root",
        component: Init,
    },
    {
        path : "/Main",
        name: "Main",
        component: Main,
    },
    {
        path : "/MainMobile",
        name: "MainMobile",
        component: MainMobile,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;