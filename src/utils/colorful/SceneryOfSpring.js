let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "油菜花",
    color: "#ffec00",
  },
  {
    id: 2,
    name: "嫩叶",
    color: "#9cc45a",
  },
  {
    id: 3,
    name: "花瓣",
    color: "#fadce5",
  },
  {
    id: 4,
    name: "盛开",
    color: "#ecaeca",
  },
  {
    id: 5,
    name: "春霞",
    color: "#f7edd0",
  },
  {
    id: 6,
    name: "萌芽",
    color: "#d8e27f",
  },
  {
    id: 7,
    name: "竹笋",
    color: "#c4a16c",
  },
  {
    id: 8,
    name: "堇菜",
    color: "#9b7bb4",
  },
  {
    id: 9,
    name: "杜鹃",
    color: "#797d8a",
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
    twoId: [8, 3],
    color1: "",
    color2: "",
  },
  {
    id: 3,
    twoId: [5, 2],
    color1: "",
    color2: "",
  },
]
let twoListType2 = [
  {
    id: 1,
    twoId: [7, 6],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [3, 4],
    color: "",
    bgColor: "",
  },
  {
    id: 3,
    twoId: [6, 1],
    color: "",
    bgColor: "",
  },
]
let twoListType3 = [
  {
    id: 1,
    twoId: [3, 9],
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
    twoId: [8, 5],
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
