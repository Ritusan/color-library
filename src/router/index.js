import { createRouter, createWebHashHistory } from "vue-router"

const colorful = () => import("../pages/colorful")
const colorMatchChart = () => import("../pages/colorful/colorMatchChart")

const exampleColor = () => import("../pages/example")
const exampleTheme = () => import("../pages/example/theme")
const hotAirBalloon = () => import("../pages/example/hotAirBalloon")
const paradiseTropicalFish = () => import("../pages/example/paradiseTropicalFish")
const happyEaster = () => import("../pages/example/happyEaster")
const rainbowSoapBubbles = () => import("../pages/example/rainbowSoapBubbles")
const beachResortMaldives = () => import("../pages/example/beachResortMaldives")

const routes = [
  {
    path: "/",
    name: "colorful",
    component: colorful,
  },
  {
    path: "/colorMatchChart",
    name: "colorMatchChart",
    component: colorMatchChart,
  },
  {
    path: "/exampleColor",
    name: "exampleColor",
    component: exampleColor,
    children: [
      {
        path: "/exampleTheme",
        name: "exampleTheme",
        component: exampleTheme,
      },
      {
        path: "/hotAirBalloon",
        name: "hotAirBalloon",
        component: hotAirBalloon,
      },
      {
        path: "/paradiseTropicalFish",
        name: "paradiseTropicalFish",
        component: paradiseTropicalFish,
      },
      {
        path: "/happyEaster",
        name: "happyEaster",
        component: happyEaster,
      },
      {
        path: "/rainbowSoapBubbles",
        name: "rainbowSoapBubbles",
        component: rainbowSoapBubbles,
      },
      {
        path: "/beachResortMaldives",
        name: "beachResortMaldives",
        component: beachResortMaldives,
      },
    ]
  },
  // {
  //   path: "/exampleTheme",
  //   name: "exampleTheme",
  //   component: exampleTheme,
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
