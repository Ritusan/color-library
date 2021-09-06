<template>
  <div class="one-color-wrap">
    <div v-for="(item,index) in oneColorList" :key="index">
      <div v-if="item.id !== 0" class="one-color-item" :style="{'background-color': item.color}">
        <span>{{item.name}}</span>
        <span>{{item.color}}</span>
      </div>
    </div>
  </div>
  <div class="two-color-wrap type1">
    <div class="two-color-item" :style="{'background-color': oneColorList[4].color}">
      <div :style="{'background-color': oneColorList[1].color}">
        <span :style="{'color': oneColorList[4].color}">{{oneColorList[1].color}}</span>
      </div>
      <div :style="{'background-color': oneColorList[4].color}">{{oneColorList[4].color}}</div>
    </div>
    <div class="two-color-item" :style="{'background-color': oneColorList[3].color}">
      <div :style="{'background-color': oneColorList[2].color}">
        <span :style="{'color': oneColorList[3].color}">{{oneColorList[2].color}}</span>
      </div>
      <div :style="{'background-color': oneColorList[3].color}">{{oneColorList[3].color}}</div>
    </div>
    <div class="two-color-item" :style="{'background-color': oneColorList[9].color}">
      <div :style="{'background-color': oneColorList[5].color}">
        <span :style="{'color': oneColorList[9].color}">{{oneColorList[5].color}}</span>
      </div>
      <div :style="{'background-color': oneColorList[9].color}">{{oneColorList[9].color}}</div>
    </div>
  </div>
  <div class="two-color-wrap type2">
    <div class="two-color-item">
      <div :style="{'background': oneColorList[6].bgColor}">{{oneColorList[3].color}}</div>
      <!-- <div :style="{'background-color': oneColorList[3].color}">{{oneColorList[3].color}}</div> -->
    </div>
    <div class="two-color-item">
      <div :style="{'background': oneColorList[7].bgColor}">{{oneColorList[2].color}}</div>
      <!-- <div :style="{'background-color': oneColorList[2].color}">{{oneColorList[2].color}}</div> -->
    </div>
    <div class="two-color-item">
      <div :style="{'background': oneColorList[2].bgColor}">{{oneColorList[8].color}}</div>
      <!-- <div :style="{'background-color': oneColorList[8].color}">{{oneColorList[8].color}}</div> -->
    </div>
  </div>
  <div class="two-color-wrap type3">
    <div class="two-color-item" :style="{'background-color': oneColorList[9].color}">
      <div :style="{'background-image': oneColorList[9].bgImage}">{{oneColorList[9].color}}</div>
      <!-- <div :style="{'background-color': oneColorList[4].color}">{{oneColorList[4].color}}</div> -->
    </div>
    <div class="two-color-item" :style="{'background-color': oneColorList[3].color}">
      <div :style="{'background-image': oneColorList[3].bgImage}">{{oneColorList[3].color}}</div>
      <!-- <div :style="{'background-color': oneColorList[5].color}">{{oneColorList[5].color}}</div> -->
    </div>
    <div class="two-color-item" :style="{'background-color': oneColorList[2].color}">
      <div :style="{'background-image': oneColorList[2].bgImage}">{{oneColorList[2].color}}</div>
      <!-- <div :style="{'background-color': oneColorList[1].color}">{{oneColorList[1].color}}</div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        oneColorList: [
          {
            id: 0,
          },
          {
            id: 1,
            name: "大堡礁碧波",
            color: "#84b9e5",
            bgColor: "linear-gradient(#84b9e5 50%,#f8f5de 50%)",
          },
          {
            id: 2,
            name: "深海幽蓝",
            color: "#1f3d89",
            bgImage: "radial-gradient(#84b9e5 20%,transparent 0)"
          },
          {
            id: 3,
            name: "尼莫橙",
            color: "#ee7b00",
            bgImage: "radial-gradient(#ffe500 20%,transparent 0)"
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
            bgColor: "linear-gradient(#403734 50%,#ee7b00 50%)",
          },
          {
            id: 7,
            name: "深海鱼鳞灰",
            color: "#a7a9ab",
            bgColor: "linear-gradient(#a7a9ab 50%,#1f3d89 50%)",
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
            bgImage: "radial-gradient(#c14f7e 20%,transparent 0)"
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/colorful.scss";
</style>