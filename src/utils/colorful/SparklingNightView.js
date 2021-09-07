let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "不夜城",
    color: "#004f7a",
  },
  {
    id: 2,
    name: "水泥灰",
    color: "#7a8a92",
  },
  {
    id: 3,
    name: "水面",
    color: "#423a57",
  },
  {
    id: 4,
    name: "满月",
    color: "#fde5c5",
  },
  {
    id: 5,
    name: "午夜浮云",
    color: "#dce5ec",
  },
  {
    id: 6,
    name: "闪钻紫",
    color: "#9a7fb8",
  },
  {
    id: 7,
    name: "闪钻粉",
    color: "#cd659f",
  },
  {
    id: 8,
    name: "闪钻蓝",
    color: "#829ac8",
  },
  {
    id: 9,
    name: "闪钻绿",
    color: "#77c2b9",
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
    twoId: [8, 5],
    color1: "",
    color2: "",
  },
  {
    id: 3,
    twoId: [6, 3],
    color1: "",
    color2: "",
  },
]
let twoListType2 = [
  {
    id: 1,
    twoId: [3, 8],
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
    twoId: [2, 7],
    color: "",
    bgColor: "",
  },
]
let twoListType3 = [
  {
    id: 1,
    twoId: [1, 4],
    color: "",
    bgImage: "",
  },
  {
    id: 2,
    twoId: [2, 5],
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
