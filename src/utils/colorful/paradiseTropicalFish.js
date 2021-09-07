// let colorList = {
  let oneList = [
    {
      id: 0,
    },
    {
      id: 1,
      name: "大堡礁碧波",
      color: "#84b9e5",
    },
    {
      id: 2,
      name: "深海幽蓝",
      color: "#1f3d89",
    },
    {
      id: 3,
      name: "尼莫橙",
      color: "#ee7b00",
    },
    {
      id: 4,
      name: "粉紫海葵",
      color: "#c14f7e",
    },
    {
      id: 5,
      name: "奶黄蝴蝶鱼",
      color: "#ffe500",
    },
    {
      id: 6,
      name: "边际黑",
      color: "#403734",
    },
    {
      id: 7,
      name: "深海鱼鳞灰",
      color: "#a7a9ab",
    },
    {
      id: 8,
      name: "温润白珊瑚",
      color: "#f8f5de",
    },
    {
      id: 9,
      name: "洋面蓝",
      color: "#69c4d0",
    },
  ]
  let twoListType1 = [
    {
      id: 1,
      twoId: '1,4',
      color1: oneList[1].color,
      color2: oneList[4].color,
    },
    {
      id: 2,
      twoId: '2,3',
      color1: oneList[2].color,
      color2: oneList[3].color,
    },
    {
      id: 3,
      twoId: '5,9',
      color1: oneList[5].color,
      color2: oneList[9].color,
    },
  ]
  let twoListType2 = [
    {
      id: 1,
      twoId: '6,3',
      color: oneList[6].color,
      bgColor: `linear-gradient(${oneList[6].color} 50%,${oneList[3].color} 50%)`,
    },
    {
      id: 2,
      twoId: '7,2',
      color: oneList[7].color,
      bgColor: `linear-gradient(${oneList[7].color} 50%,${oneList[2].color} 50%)`,
    },
    {
      id: 3,
      twoId: '1,8',
      color: oneList[1].color,
      bgColor: `linear-gradient(${oneList[1].color} 50%,${oneList[8].color} 50%)`,
    },
  ]
  let twoListType3 = [
    {
      id: 1,
      twoId: '9,4',
      color: oneList[9].color,
      bgImage: `radial-gradient(${oneList[4].color} 20%,transparent 0)`
    },
    {
      id: 2,
      twoId: '3,5',
      color: oneList[3].color,
      bgImage: `radial-gradient(${oneList[5].color} 20%,transparent 0)`
    },
    {
      id: 3,
      twoId: '2,1',
      color: oneList[2].color,
      bgImage: `radial-gradient(${oneList[1].color} 20%,transparent 0)`
    },
  ]
// }

export {oneList,twoListType1,twoListType2,twoListType3}
