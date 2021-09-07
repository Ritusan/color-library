let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "法国薰衣草",
    color: "#b08aba",
  },
  {
    id: 2,
    name: "宽叶薰衣草",
    color: "#a59ac3",
  },
  {
    id: 3,
    name: "薰衣草精油",
    color: "#8376b5",
  },
  {
    id: 4,
    name: "薰衣草香囊",
    color: "#e1d7e6",
  },
  {
    id: 5,
    name: "火烈鸟🦩",
    color: "#fce2cc",
  },
  {
    id: 6,
    name: "粉色葡萄酒🍷",
    color: "#e7b39e",
  },
  {
    id: 7,
    name: "赭色",
    color: "#d59f67",
  },
  {
    id: 8,
    name: "睡美人",
    color: "#a5c5ec",
  },
  {
    id: 9,
    name: "深蓝海岸",
    color: "#86a7ca",
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
    twoId: [2, 3],
    color1: "",
    color2: "",
  },
  {
    id: 3,
    twoId: [4, 6],
    color1: "",
    color2: "",
  },
]
let twoListType2 = [
  {
    id: 1,
    twoId: [2, 5],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [4, 1],
    color: "",
    bgColor: "",
  },
  {
    id: 3,
    twoId: [3, 7],
    color: "",
    bgColor: "",
  },
]
let twoListType3 = [
  {
    id: 1,
    twoId: [4, 9],
    color: "",
    bgImage: "",
  },
  {
    id: 2,
    twoId: [1, 6],
    color: "",
    bgImage: "",
  },
  {
    id: 3,
    twoId: [8, 3],
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
