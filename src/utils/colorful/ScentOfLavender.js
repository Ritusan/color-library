let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "不安",
    color: "#6c5ea5",
  },
  {
    id: 2,
    name: "担忧",
    color: "#ad7eb4",
  },
  {
    id: 3,
    name: "压力",
    color: "#7a4e9a",
  },
  {
    id: 4,
    name: "安眠",
    color: "#ad9ac7",
  },
  {
    id: 5,
    name: "治愈",
    color: "#d4bad8",
  },
  {
    id: 6,
    name: "镇痛",
    color: "#a3a1ce",
  },
  {
    id: 7,
    name: "抗菌",
    color: "#e1dbec",
  },
  {
    id: 8,
    name: "放松",
    color: "#c8d4b4",
  },
  {
    id: 9,
    name: "平衡",
    color: "#7daa75",
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
    twoId: [8, 3],
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
    twoId: [7, 9],
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
    twoId: [6, 1],
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
