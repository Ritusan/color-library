let oneList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "红蜻蜓",
    color: "#c93c2e",
  },
  {
    id: 2,
    name: "橡子",
    color: "#965738",
  },
  {
    id: 3,
    name: "柿籽",
    color: "#e45d00",
  },
  {
    id: 4,
    name: "银杏",
    color: "#eadbbb",
  },
  {
    id: 5,
    name: "金木犀",
    color: "#f7b749",
  },
  {
    id: 6,
    name: "黑葡萄",
    color: "#5c485f",
  },
  {
    id: 7,
    name: "青葡萄",
    color: "#96c748",
  },
  {
    id: 8,
    name: "红葡萄",
    color: "#8b2e52",
  },
  {
    id: 9,
    name: "无花果",
    color: "#b9505a",
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
    twoId: [5, 6],
    color1: "",
    color2: "",
  },
]
let twoListType2 = [
  {
    id: 1,
    twoId: [1, 5],
    color: "",
    bgColor: "",
  },
  {
    id: 2,
    twoId: [9, 8],
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
    twoId: [1, 7],
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
