const HasDesign = () => import("../../pages/hasDesign")
const TwoColors = () => import("../../pages/hasDesign/TwoColors")

const hasDesignRoute = [
  {
    path: "/HasDesign",
    name: "HasDesign",
    component: HasDesign,
  },
  {
    path: "/TwoColors",
    name: "TwoColors",
    component: TwoColors,
  }
]

export default hasDesignRoute