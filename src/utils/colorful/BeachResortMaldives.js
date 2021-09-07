let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "印度洋",
    color: "#419acf",
  },
  {
    id: 2,
    name: "马尔代夫蓝",
    color: "#74c7f0",
  },
  {
    id: 3,
    name: "明亮绿松石",
    color: "#00aceb",
  },
  {
    id: 4,
    name: "蓝色吾爱",
    color: "#72c6c7",
  },
  {
    id: 5,
    name: "蓝色碎片",
    color: "#d4ebec",
  },
  {
    id: 6,
    name: "蓝色天堂",
    color: "#005ea7",
  },
  {
    id: 7,
    name: "酸奶奶昔",
    color: "#e8dbcd",
  },
  {
    id: 8,
    name: "甜瓜汁",
    color: "#c0db8c",
  },
  {
    id: 9,
    name: "橘子冰糕",
    color: "#f5af7d",
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
    twoId: [3, 4],
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
    twoId: [7, 4],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [9, 1],
    color: "",
    bgColor: "",
  },
  {
    id: 3,
    twoId: [2, 3],
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
    twoId: [8, 1],
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
