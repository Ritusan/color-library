let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "新雪",
    color: "#f7fafc",
  },
  {
    id: 2,
    name: "冰棱",
    color: "#d3e7f7",
  },
  {
    id: 3,
    name: "北风",
    color: "#a1b1ca",
  },
  {
    id: 4,
    name: "柴薪",
    color: "#a78f6b",
  },
  {
    id: 5,
    name: "暴风雪",
    color: "#e5ebee",
  },
  {
    id: 6,
    name: "冬至",
    color: "#525457",
  },
  {
    id: 7,
    name: "暖炉",
    color: "#f7deaf",
  },
  {
    id: 8,
    name: "祭礼",
    color: "#ae2b2d",
  },
  {
    id: 9,
    name: "元旦旭日",
    color: "#ef8457",
  },
]

let twoListType1 = [
  {
    id: 1,
    twoId: [6, 2],
    color1: "",
    color2: "",
  },
  {
    id: 2,
    twoId: [1, 3],
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
    twoId: [3, 5],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [5, 6],
    color: "",
    bgColor: "",
  },
  {
    id: 3,
    twoId: [4, 8],
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
    twoId: [3, 7],
    color: "",
    bgImage: "",
  },
  {
    id: 3,
    twoId: [1, 4],
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
