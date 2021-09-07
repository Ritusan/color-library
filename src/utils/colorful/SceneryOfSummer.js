let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "蚊香",
    color: "#43a28c",
  },
  {
    id: 2,
    name: "绿色红叶",
    color: "#6abc6e",
  },
  {
    id: 3,
    name: "素面",
    color: "#fffdf6",
  },
  {
    id: 4,
    name: "浴衣",
    color: "#675f80",
  },
  {
    id: 5,
    name: "大蓟花",
    color: "#ca66a3",
  },
  {
    id: 6,
    name: "折扇",
    color: "#d7b291",
  },
  {
    id: 7,
    name: "锦鲤",
    color: "#d45734",
  },
  {
    id: 8,
    name: "风铃之音",
    color: "#bedfc2",
  },
  {
    id: 9,
    name: "萤火虫之光",
    color: "#fffcda",
  },
]

let twoListType1 = [
  {
    id: 1,
    twoId: [1, 8],
    color1: "",
    color2: "",
  },
  {
    id: 2,
    twoId: [9, 2],
    color1: "",
    color2: "",
  },
  {
    id: 3,
    twoId: [5, 4],
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
    twoId: [3, 1],
    color: "",
    bgColor: "",
  },
  {
    id: 3,
    twoId: [2, 8],
    color: "",
    bgColor: "",
  },
]
let twoListType3 = [
  {
    id: 1,
    twoId: [6, 8],
    color: "",
    bgImage: "",
  },
  {
    id: 2,
    twoId: [9, 5],
    color: "",
    bgImage: "",
  },
  {
    id: 3,
    twoId: [8, 4],
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
