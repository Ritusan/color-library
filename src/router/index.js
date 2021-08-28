import { createRouter,createWebHashHistory} from "vue-router"

const colorful = ()=> import ('../pages/colorful')
const colorMachChart = ()=> import ('../pages/colorful/colorMachChart')

const routes = [
    {
        path: '/',
        name: 'colorful',
        component: colorful
    },
    {
        path: '/colorMachChart',
        name: 'colorMachChart',
        component: colorMachChart
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
