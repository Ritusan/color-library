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
      <div :style="{'background-color': oneColorList[1].color}">{{oneColorList[1].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[7].color}">{{oneColorList[7].color}}</div>
      <div :style="{'background-color': oneColorList[2].color}">{{oneColorList[2].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[4].color}">{{oneColorList[4].color}}</div>
      <div :style="{'background-color': oneColorList[5].color}">{{oneColorList[5].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[6].color}">{{oneColorList[6].color}}</div>
      <div :style="{'background-color': oneColorList[8].color}">{{oneColorList[8].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[4].color}">{{oneColorList[4].color}}</div>
      <div :style="{'background-color': oneColorList[0].color}">{{oneColorList[0].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[1].color}">{{oneColorList[1].color}}</div>
      <div :style="{'background-color': oneColorList[3].color}">{{oneColorList[3].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[5].color}">{{oneColorList[5].color}}</div>
      <div :style="{'background-color': oneColorList[0].color}">{{oneColorList[0].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[3].color}">{{oneColorList[3].color}}</div>
      <div :style="{'background-color': oneColorList[4].color}">{{oneColorList[4].color}}</div>
    </div>
    <div class="two-color-item">
      <div :style="{'background-color': oneColorList[7].color}">{{oneColorList[7].color}}</div>
      <div :style="{'background-color': oneColorList[1].color}">{{oneColorList[1].color}}</div>
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