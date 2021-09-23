import { createRouter, createWebHashHistory } from "vue-router"
import hasDesignRoute from './modules/hasDesign'

const colorful = () => import("../pages/colorful")
const ColorMatchChart = () => import("../pages/colorful/ColorMatchChart")
const TodoList = () => import("../pages/todoList")
const ThemeChange = () => import("../pages/theme")
const Timeline = () => import("../pages/timeline")
const LogTimeline = () => import("../pages/timeline/LogTimeline")

const exampleColor = () => import("../pages/example")
const exampleTheme = () => import("../pages/example/theme")
const HotAirBalloon = () => import("../pages/example/HotAirBalloon")
const ParadiseTropicalFish = () => import("../pages/example/ParadiseTropicalFish")
const HappyEaster = () => import("../pages/example/HappyEaster")
const RainbowSoapBubbles = () => import("../pages/example/RainbowSoapBubbles")
const BeachResortMaldives = () => import("../pages/example/BeachResortMaldives")
const ScentOfLavender = () => import("../pages/example/ScentOfLavender")
const MaidensPrayer = () => import("../pages/example/MaidensPrayer")
const BeadworkPendantSouvenirs = () => import("../pages/example/BeadworkPendantSouvenirs")
const SparklingNightView = () => import("../pages/example/SparklingNightView")
const SceneryOfSpring = () => import("../pages/example/SceneryOfSpring")
const SceneryOfSummer = () => import("../pages/example/SceneryOfSummer")
const SceneryOfAutumn = () => import("../pages/example/SceneryOfAutumn")
const SceneryOfWinter = () => import("../pages/example/SceneryOfWinter")
const ProvenceFrance = () => import("../pages/example/ProvenceFrance")
const SantoriniGreece = () => import("../pages/example/SantoriniGreece")

const routes = [
  {
    path: "/",
    name: "colorful",
    component: colorful,
  },
  {
    path: "/ColorMatchChart",
    name: "ColorMatchChart",
    component: ColorMatchChart,
  },
  {
    path: "/todoList",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/ThemeChange",
    name: "ThemeChange",
    component: ThemeChange,
  },
  {
    path: "/timeline",
    name: "timeline",
    component: Timeline,
  },
  {
    path: "/logTimeline",
    name: "logTimeline",
    component: LogTimeline,
  },
  ...hasDesignRoute,
  {
    path: "/exampleColor",
    redirect: "/HotAirBalloon",
    name: "exampleColor",
    component: exampleColor,
    children: [
      {
        path: "/exampleTheme",
        name: "exampleTheme",
        component: exampleTheme,
      },
      {
        path: "/HotAirBalloon",
        name: "HotAirBalloon",
        component: HotAirBalloon,
      },
      {
        path: "/ParadiseTropicalFish",
        name: "ParadiseTropicalFish",
        component: ParadiseTropicalFish,
      },
      {
        path: "/HappyEaster",
        name: "HappyEaster",
        component: HappyEaster,
      },
      {
        path: "/RainbowSoapBubbles",
        name: "RainbowSoapBubbles",
        component: RainbowSoapBubbles,
      },
      {
        path: "/BeachResortMaldives",
        name: "BeachResortMaldives",
        component: BeachResortMaldives,
      },
      {
        path: "/ScentOfLavender",
        name: "ScentOfLavender",
        component: ScentOfLavender,
      },
      {
        path: "/MaidensPrayer",
        name: "MaidensPrayer",
        component: MaidensPrayer,
      },
      {
        path: "/BeadworkPendantSouvenirs",
        name: "BeadworkPendantSouvenirs",
        component: BeadworkPendantSouvenirs,
      },
      {
        path: "/SparklingNightView",
        name: "SparklingNightView",
        component: SparklingNightView,
      },
      {
        path: "/SceneryOfSpring",
        name: "SceneryOfSpring",
        component: SceneryOfSpring,
      },
      {
        path: "/SceneryOfSummer",
        name: "SceneryOfSummer",
        component: SceneryOfSummer,
      },
      {
        path: "/SceneryOfAutumn",
        name: "SceneryOfAutumn",
        component: SceneryOfAutumn,
      },
      {
        path: "/SceneryOfWinter",
        name: "SceneryOfWinter",
        component: SceneryOfWinter,
      },
      {
        path: "/ProvenceFrance",
        name: "ProvenceFrance",
        component: ProvenceFrance,
      },
      {
        path: "/SantoriniGreece",
        name: "SantoriniGreece",
        component: SantoriniGreece,
      }
    ],
  },
  // {
  //   path: "/exampleTheme",
  //   name: "exampleTheme",
  //   component: exampleTheme,
  // },
]

// routes.push(hasDesignRoute)
console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
