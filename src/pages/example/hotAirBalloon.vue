<template>
  <div class="color-view">
    <div class="one-color-wrap">
      <div class="one-color-item" 
        v-for="(item,index) in oneColorList" :key="index"
        :style="{'background-color': item.color}">
        <span>{{item.name}}</span>
        <span>{{item.color}}</span>
      </div>
    </div>
    <div class="two-color-wrap type1">
      <div class="two-color-item" :style="{'background-color': oneColorList[3].color}">
        <div :style="{'background-color': oneColorList[0].color}">
          <span :style="{'color': oneColorList[3].color}">{{oneColorList[0].color}}</span>
        </div>
        <div :style="{'background-color': oneColorList[3].color}">{{oneColorList[3].color}}</div>
      </div>
      <div class="two-color-item" :style="{'background-color': oneColorList[6].color}">
        <div :style="{'background-color': oneColorList[5].color}">
          <span :style="{'color': oneColorList[6].color}">{{oneColorList[5].color}}</span>
        </div>
        <div :style="{'background-color': oneColorList[6].color}">{{oneColorList[6].color}}</div>
      </div>
      <div class="two-color-item" :style="{'background-color': oneColorList[7].color}">
        <div :style="{'background-color': oneColorList[3].color}">
          <span :style="{'color': oneColorList[7].color}">{{oneColorList[3].color}}</span>
        </div>
        <div :style="{'background-color': oneColorList[7].color}">{{oneColorList[7].color}}</div>
      </div>
      
      
    </div>
    <div class="two-color-wrap type2">
      <div class="two-color-item">
        <!-- <div :style="{'background-color': oneColorList[6].color}">{{oneColorList[6].color}}</div> -->
        <!-- <div :style="{'background-color': oneColorList[7].color}">{{oneColorList[7].color}}</div> -->
        <div :style="{'background': oneColorList[6].bgColor}">{{oneColorList[7].color}}</div>
      </div>
      <div class="two-color-item">
        <!-- <div :style="{'background-color': oneColorList[8].color}">{{oneColorList[8].color}}</div> -->
        <!-- <div :style="{'background-color': oneColorList[1].color}">{{oneColorList[1].color}}</div> -->
        <div :style="{'background': oneColorList[8].bgColor}">{{oneColorList[1].color}}</div>
      </div>
      <div class="two-color-item">
        <!-- <div :style="{'background-color': oneColorList[4].color}">{{oneColorList[4].color}}</div> -->
        <!-- <div :style="{'background-color': oneColorList[2].color}">{{oneColorList[2].color}}</div> -->
        <div :style="{'background': oneColorList[4].bgColor}">{{oneColorList[2].color}}</div>
      </div>
    </div>
    <div class="two-color-wrap type3">
      <div class="two-color-item" :style="{'background-color': oneColorList[8].color}">
        <div :style="{'background-image': oneColorList[8].bgImage}">{{oneColorList[8].color}}</div>
        <!-- <div :style="{'background-color': oneColorList[0].color}">{{oneColorList[0].color}}</div> -->
      </div>
      <div class="two-color-item" :style="{'background-color': oneColorList[6].color}">
        <div :style="{'background-image': oneColorList[6].bgImage}">{{oneColorList[6].color}}</div>
        <!-- <div :style="{'background-color': oneColorList[2].color}">{{oneColorList[2].color}}</div> -->
      </div>
      <div class="two-color-item" :style="{'background-color': oneColorList[3].color}">
        <div :style="{'background-image': oneColorList[3].bgImage}">{{oneColorList[3].color}}</div>
        <!-- <div :style="{'background-color': oneColorList[5].color}">{{oneColorList[5].color}}</div> -->
      </div>
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
            name: "钴天蓝",
            color: "#008db7",
          },
          {
            id: 2,
            name: "救援橙",
            color: "#ea5404",
          },
          {
            id: 3,
            name: "烈焰橙",
            color: "#ee7700",
          },
          {
            id: 4,
            name: "骄阳黄",
            color: "#ffdc00",
            bgImage: "radial-gradient(#f5fafe 20%,transparent 0)"
          },
          {
            id: 5,
            name: "晴空蓝",
            color: "#51a5dc",
            bgColor: "linear-gradient(#51a5dc 50%,#ee7700 50%)"
          },
          {
            id: 6,
            name: "云朵白",
            color: "#f5fafe",
          },
          {
            id: 7,
            name: "天青石蓝",
            color: "#261f87",
            bgColor: "linear-gradient(#261f87 50%,#008554 50%)",
            bgImage: "radial-gradient(#ee7700 20%,transparent 0)"
          },
          {
            id: 8,
            name: "森林草叶绿",
            color: "#008554",
          },
          {
            id: 9,
            name: "拂晓浅蓝",
            color: "#c2e5f9",
            bgColor: "linear-gradient(#c2e5f9 50%,#ea5404 50%)",
            bgImage: "radial-gradient(#008db7 20%,transparent 0)"
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/colorful.scss";
</style>