const HasDesign = () => import("../../pages/hasDesign")
const TwoColors = () => import("../../pages/hasDesign/TwoColors")

const hasDesignRoute = [
  {
    path: "/HasDesign",
    redirect: "/TwoColors",
    name: "HasDesign",
    component: HasDesign,
    children: [
      {
        path: "/TwoColors",
        name: "TwoColors",
        component: TwoColors,
      }
    ]
  }
]

export default hasDesignRoute