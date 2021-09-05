import { createRouter, createWebHashHistory } from "vue-router"

const colorful = () => import("../pages/colorful")
const ColorMatchChart = () => import("../pages/colorful/ColorMatchChart")

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
      },
    ],
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
