let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "钴天蓝",
    color: "#008db7",
  },
  {
    id: 2,
    name: "救援橙",
    color: "#ea5404",
  },
  {
    id: 3,
    name: "烈焰橙",
    color: "#ee7700",
  },
  {
    id: 4,
    name: "骄阳黄",
    color: "#ffdc00",
  },
  {
    id: 5,
    name: "晴空蓝",
    color: "#51a5dc",
  },
  {
    id: 6,
    name: "云朵白",
    color: "#f5fafe",
  },
  {
    id: 7,
    name: "天青石蓝",
    color: "#261f87",
  },
  {
    id: 8,
    name: "森林草叶绿",
    color: "#008554",
  },
  {
    id: 9,
    name: "拂晓浅蓝",
    color: "#c2e5f9",
  },
]

let twoListType1 = [
  {
    id: 1,
    twoId: [1, 4],
    color1: "",
    color2: "",
  },
  {
    id: 2,
    twoId: [6, 7],
    color1: "",
    color2: "",
  },
  {
    id: 3,
    twoId: [4, 8],
    color1: "",
    color2: "",
  },
]
let twoListType2 = [
  {
    id: 1,
    twoId: [7, 8],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [9, 2],
    color: "",
    bgColor: "",
  },
  {
    id: 3,
    twoId: [5, 3],
    color: "",
    bgColor: "",
  },
]
let twoListType3 = [
  {
    id: 1,
    twoId: [9, 1],
    color: "",
    bgImage: "",
  },
  {
    id: 2,
    twoId: [7, 3],
    color: "",
    bgImage: "",
  },
  {
    id: 3,
    twoId: [4, 6],
    color: "",
    bgImage: "",
  },
]

function setColor() {
  twoListType1.map((item, index) => {
    item.color1 = oneList[item.twoId[0]].color
    item.color2 = oneList[item.twoId[1]].color
  })
  twoListType2.map((item, index) => {
    item.color = oneList[item.twoId[0]].color
    item.bgColor = `linear-gradient(${oneList[item.twoId[0]].color} 50%,${oneList[item.twoId[1]].color} 50%)`
  })
  twoListType3.map((item, index) => {
    item.color = oneList[item.twoId[0]].color
    item.bgImage = `radial-gradient(${oneList[item.twoId[1]].color} 20%,transparent 0)`
  })
}

export function getColorList() {
  setColor()
  return {
    oneList: oneList,
    twoListType1: twoListType1,
    twoListType2: twoListType2,
    twoListType3: twoListType3,
  }
}

export { oneList, twoListType1, twoListType2, twoListType3 }
