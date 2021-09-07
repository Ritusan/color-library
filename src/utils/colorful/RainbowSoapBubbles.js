let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "反射蓝",
    color: "#9fd8ee",
  },
  {
    id: 2,
    name: "泡影白",
    color: "#eaf6fd",
  },
  {
    id: 3,
    name: "阳光黄",
    color: "#e2eba3",
  },
  {
    id: 4,
    name: "空气蓝",
    color: "#bad4ee",
  },
  {
    id: 5,
    name: "闪亮粉",
    color: "#f7c6bd",
  },
  {
    id: 6,
    name: "闪耀蓝",
    color: "#b0b7d6",
  },
  {
    id: 7,
    name: "清风绿",
    color: "#c5e2c2",
  },
  {
    id: 8,
    name: "闪亮紫",
    color: "#c5a3cb",
  },
  {
    id: 9,
    name: "闪耀粉玫瑰",
    color: "#f7c8d6",
  },
]

let twoListType1 = [
  {
    id: 1,
    twoId: [1, 3],
    color1: "",
    color2: "",
  },
  {
    id: 2,
    twoId: [2, 9],
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
    twoId: [2, 7],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [4, 6],
    color: "",
    bgColor: "",
  },
  {
    id: 3,
    twoId: [9, 4],
    color: "",
    bgColor: "",
  },
]
let twoListType3 = [
  {
    id: 1,
    twoId: [8, 5],
    color: "",
    bgImage: "",
  },
  {
    id: 2,
    twoId: [3, 4],
    color: "",
    bgImage: "",
  },
  {
    id: 3,
    twoId: [1, 2],
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
