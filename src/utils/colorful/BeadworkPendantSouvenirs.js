let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "加勒比海",
    color: "#5887bf",
  },
  {
    id: 2,
    name: "芒果黄",
    color: "#f7ca11",
  },
  {
    id: 3,
    name: "火芙蓉",
    color: "#e56c3e",
  },
  {
    id: 4,
    name: "丛林绿",
    color: "#3d9055",
  },
  {
    id: 5,
    name: "柑桔橙",
    color: "#ee8d1e",
  },
  {
    id: 6,
    name: "赤道蓝",
    color: "#86bfc9",
  },
  {
    id: 7,
    name: "褪色紫罗兰",
    color: "#8c5d7c",
  },
  {
    id: 8,
    name: "椰白",
    color: "#f7f3ed",
  },
  {
    id: 9,
    name: "椰棕",
    color: "#89492e",
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
    twoId: [5, 4],
    color1: "",
    color2: "",
  },
  {
    id: 3,
    twoId: [3, 6],
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
    twoId: [9, 1],
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
    twoId: [4, 2],
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
