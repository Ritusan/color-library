let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "绣球花",
    color: "#4863ad",
  },
  {
    id: 2,
    name: "少女的心思",
    color: "#efb2cf",
  },
  {
    id: 3,
    name: "迷雾绿",
    color: "#adcab0",
  },
  {
    id: 4,
    name: "丝光蓝",
    color: "#ccd7ea",
  },
  {
    id: 5,
    name: "雾蓝",
    color: "#99a8ce",
  },
  {
    id: 6,
    name: "丝光粉",
    color: "#f0d4e1",
  },
  {
    id: 7,
    name: "香粉白",
    color: "#f7f4e5",
  },
  {
    id: 8,
    name: "迷雾紫",
    color: "#c2a2b6",
  },
  {
    id: 9,
    name: "眉笔",
    color: "#4d484a",
  },
]

let twoListType1 = [
  {
    id: 1,
    twoId: [1, 2],
    color1: "",
    color2: "",
  },
  {
    id: 2,
    twoId: [3, 9],
    color1: "",
    color2: "",
  },
  {
    id: 3,
    twoId: [5, 6],
    color1: "",
    color2: "",
  },
]
let twoListType2 = [
  {
    id: 1,
    twoId: [7, 3],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [5, 1],
    color: "",
    bgColor: "",
  },
  {
    id: 3,
    twoId: [2, 4],
    color: "",
    bgColor: "",
  },
]
let twoListType3 = [
  {
    id: 1,
    twoId: [6, 9],
    color: "",
    bgImage: "",
  },
  {
    id: 2,
    twoId: [4, 5],
    color: "",
    bgImage: "",
  },
  {
    id: 3,
    twoId: [8, 2],
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
