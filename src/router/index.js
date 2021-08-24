import { createRouter,createWebHashHistory} from "vue-router"

const colorful = ()=> import ('../pages/colorful')

const routes = [
    {
        path: '/colorful',
        name: 'colorful',
        component: colorful
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
