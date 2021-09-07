let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "希腊蓝",
    color: "#0065b2",
  },
  {
    id: 2,
    name: "碧眼",
    color: "#67a5da",
  },
  {
    id: 3,
    name: "圣洁白",
    color: "#fdfdfb",
  },
  {
    id: 4,
    name: "石灰石",
    color: "#e5eaeb",
  },
  {
    id: 5,
    name: "万神庙",
    color: "#c8bca0",
  },
  {
    id: 6,
    name: "卫城",
    color: "#c19969",
  },
  {
    id: 7,
    name: "石板路",
    color: "#b8c2c8",
  },
  {
    id: 8,
    name: "晨曦粉壁",
    color: "#fbe4e2",
  },
  {
    id: 9,
    name: "三角梅",
    color: "#db077f",
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
    twoId: [8, 2],
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
    twoId: [7, 8],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [3, 1],
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
    twoId: [5, 3],
    color: "",
    bgImage: "",
  },
  {
    id: 2,
    twoId: [1, 2],
    color: "",
    bgImage: "",
  },
  {
    id: 3,
    twoId: [4, 9],
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
