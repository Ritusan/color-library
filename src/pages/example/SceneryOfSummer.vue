<template>
  <div class="one-color-wrap">
    <div class="one-color-item" 
      v-for="(item,index) in oneColorList" :key="index"
      :style="{'background-color': item.color}">
      <span>{{item.name}}</span>
      <span>{{item.color}}</span>
    </div>
  </div>
  <div class="two-color-wrap">
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[0].color}">{{oneColorList[0].color}}</div>
      <div :style="{'background-color': oneColorList[7].color}">{{oneColorList[7].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[8].color}">{{oneColorList[8].color}}</div>
      <div :style="{'background-color': oneColorList[1].color}">{{oneColorList[1].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[4].color}">{{oneColorList[4].color}}</div>
      <div :style="{'background-color': oneColorList[3].color}">{{oneColorList[3].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[6].color}">{{oneColorList[6].color}}</div>
      <div :style="{'background-color': oneColorList[2].color}">{{oneColorList[2].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[2].color}">{{oneColorList[2].color}}</div>
      <div :style="{'background-color': oneColorList[0].color}">{{oneColorList[0].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[1].color}">{{oneColorList[1].color}}</div>
      <div :style="{'background-color': oneColorList[7].color}">{{oneColorList[7].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[5].color}">{{oneColorList[5].color}}</div>
      <div :style="{'background-color': oneColorList[7].color}">{{oneColorList[7].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[8].color}">{{oneColorList[8].color}}</div>
      <div :style="{'background-color': oneColorList[4].color}">{{oneColorList[4].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[7].color}">{{oneColorList[7].color}}</div>
      <div :style="{'background-color': oneColorList[3].color}">{{oneColorList[3].color}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        oneColorList: [
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
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
.one-color-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.one-color-item {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.two-color-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  .two-color-item div {
    width: 100px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:nth-child(1) {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    &:nth-child(2) {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
}
</style>