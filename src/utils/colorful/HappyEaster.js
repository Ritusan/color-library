let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "复活节彩蛋",
    color: "#ffe567",
  },
  {
    id: 2,
    name: "亮翡翠",
    color: "#94d0bf",
  },
  {
    id: 3,
    name: "糖果粉",
    color: "#f4b2ba",
  },
  {
    id: 4,
    name: "浅紫",
    color: "#e4c1db",
  },
  {
    id: 5,
    name: "奶白",
    color: "#fffded",
  },
  {
    id: 6,
    name: "嫩芽",
    color: "#b4d78c",
  },
  {
    id: 7,
    name: "春日浅蓝",
    color: "#c6d4ec",
  },
  {
    id: 8,
    name: "暖灰",
    color: "#e2e0cb",
  },
  {
    id: 9,
    name: "明丽珊瑚",
    color: "#f6bba6",
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
    twoId: [3, 8],
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
    twoId: [6, 3],
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
    twoId: [7, 8],
    color: "",
    bgColor: "",
  },
]
let twoListType3 = [
  {
    id: 1,
    twoId: [4, 2],
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
    twoId: [1, 6],
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
