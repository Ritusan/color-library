import { createRouter,createWebHashHistory} from "vue-router"

const colorful = ()=> import ('../pages/colorful')
const colorMatchChart = ()=> import ('../pages/colorful/colorMatchChart')

const routes = [
    {
        path: '/',
        name: 'colorful',
        component: colorful
    },
    {
        path: '/colorMatchChart',
        name: 'colorMatchChart',
        component: colorMatchChart
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
