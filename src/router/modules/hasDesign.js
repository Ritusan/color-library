const HasDesign = () => import("../../pages/hasDesign")
const TwoColors = () => import("../../pages/hasDesign/TwoColors")
const CircularEffect = () => import("../../pages/hasDesign/CircularEffect")
const ThickBorder = () => import("../../pages/hasDesign/ThickBorder")
const QuarterRule = () => import("../../pages/hasDesign/QuarterRule")
const ScatteredTriangle = () => import("../../pages/hasDesign/ScatteredTriangle")
const LineSegment = () => import("../../pages/hasDesign/LineSegment")
const TranslucentBackground = () => import("../../pages/hasDesign/TranslucentBackground")
const TiltEffect = () => import("../../pages/hasDesign/TiltEffect")
const SmallDecorations = () => import("../../pages/hasDesign/SmallDecorations")
const UseIllustrations = () => import("../../pages/hasDesign/UseIllustrations")
const BeautifulArch = () => import("../../pages/hasDesign/BeautifulArch")
const WhiteAround = () => import("../../pages/hasDesign/WhiteAround")
const WordsBlank = () => import("../../pages/hasDesign/WordsBlank")
const AddThickline = () => import("../../pages/hasDesign/AddThickline")
const TextBorder = () => import("../../pages/hasDesign/TextBorder")
const BandedshadingRhythm = () => import("../../pages/hasDesign/BandedshadingRhythm")
const DialogIntimacy = () => import("../../pages/hasDesign/DialogIntimacy")
const SpilloverEffect = () => import("../../pages/hasDesign/SpilloverEffect")
const SpreadStrips = () => import("../../pages/hasDesign/SpreadStrips")
const HollowoutWords = () => import("../../pages/hasDesign/HollowoutWords")
const SlashSegmentation = () => import("../../pages/hasDesign/SlashSegmentation")
const GridDesign = () => import("../../pages/hasDesign/GridDesign")
const UseStripes = () => import("../../pages/hasDesign/UseStripes")
const MonochromePhoto = () => import("../../pages/hasDesign/MonochromePhoto")
const HanddrawnText = () => import("../../pages/hasDesign/HanddrawnText")
const LogoDesign = () => import("../../pages/hasDesign/LogoDesign")
const VariousFrames = () => import("../../pages/hasDesign/VariousFrames")

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
      },
      {
        path: "/CircularEffect",
        name: "CircularEffect",
        component: CircularEffect,
      },
      {
        path: "/ThickBorder",
        name: "ThickBorder",
        component: ThickBorder,
      },
      {
        path: "/QuarterRule",
        name: "QuarterRule",
        component: QuarterRule,
      },
      {
        path: "/ScatteredTriangle",
        name: "ScatteredTriangle",
        component: ScatteredTriangle,
      },
      {
        path: "/LineSegment",
        name: "LineSegment",
        component: LineSegment,
      },
      {
        path: "/TranslucentBackground",
        name: "TranslucentBackground",
        component: TranslucentBackground,
      },
      {
        path: "/TiltEffect",
        name: "TiltEffect",
        component: TiltEffect,
      },
      {
        path: "/SmallDecorations",
        name: "SmallDecorations",
        component: SmallDecorations,
      },
      {
        path: "/UseIllustrations",
        name: "UseIllustrations",
        component: UseIllustrations,
      },
      {
        path: "/BeautifulArch",
        name: "BeautifulArch",
        component: BeautifulArch,
      },
      {
        path: "/WhiteAround",
        name: "WhiteAround",
        component: WhiteAround,
      },
      {
        path: "/WordsBlank",
        name: "WordsBlank",
        component: WordsBlank,
      },
      {
        path: "/AddThickline",
        name: "AddThickline",
        component: AddThickline,
      },
      {
        path: "/TextBorder",
        name: "TextBorder",
        component: TextBorder,
      },
      {
        path: "/BandedshadingRhythm",
        name: "BandedshadingRhythm",
        component: BandedshadingRhythm,
      },
      {
        path: "/DialogIntimacy",
        name: "DialogIntimacy",
        component: DialogIntimacy,
      },
      {
        path: "/SpilloverEffect",
        name: "SpilloverEffect",
        component: SpilloverEffect,
      },
      {
        path: "/SpreadStrips",
        name: "SpreadStrips",
        component: SpreadStrips,
      },
      {
        path: "/HollowoutWords",
        name: "HollowoutWords",
        component: HollowoutWords,
      },
      {
        path: "/SlashSegmentation",
        name: "SlashSegmentation",
        component: SlashSegmentation,
      },
      {
        path: "/GridDesign",
        name: "GridDesign",
        component: GridDesign,
      },
      {
        path: "/UseStripes",
        name: "UseStripes",
        component: UseStripes,
      },
      {
        path: "/MonochromePhoto",
        name: "MonochromePhoto",
        component: MonochromePhoto,
      },
      {
        path: "/HanddrawnText",
        name: "HanddrawnText",
        component: HanddrawnText,
      },
      {
        path: "/LogoDesign",
        name: "LogoDesign",
        component: LogoDesign,
      },
      {
        path: "/VariousFrames",
        name: "VariousFrames",
        component: VariousFrames,
      },
    ]
  }
]

export default hasDesignRoute