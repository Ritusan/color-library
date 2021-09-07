<template>
  <div>
    <div class="one-color-wrap">
      <div v-for="(item,index) in one" :key="index">
        <div v-if="item.id !== 0" class="one-color-item" :style="{'background-color': item.color}">
          <span>{{item.name}}</span>
          <span>{{item.color}}</span>
        </div>
      </div>
    </div>
    <div class="two-color-wrap type1">
      <div class="two-color-item" 
        v-for="(item,index) in two1" :key="index"
        :style="{'background-color': item.color2}">
        <div :style="{'background-color': item.color1}">
          <span :style="{'color': item.color2}">{{item.color1}}</span>
        </div>
        <div :style="{'background-color': item.color2}">{{item.color2}}</div>
      </div>
    </div>
    <div class="two-color-wrap type2">
      <div class="two-color-item"
        v-for="(item,index) in two2" :key="index">
        <div :style="{'background': item.bgColor}">{{item.color}}</div>
      </div>
    </div>
    <div class="two-color-wrap type3">
      <div class="two-color-item"
        v-for="(item,index) in two3" :key="index"
        :style="{'background-color': item.color}">
        <div :style="{'background-image': item.bgImage}">{{item.color}}</div>
      </div>
    </div>
  </div>
</template>

<script>

import {oneList,twoListType1,twoListType2,twoListType3} from "@/utils/colorful/paradiseTropicalFish"

  export default {
    data(){
      return {
        one: oneList,
        two1: twoListType1,
        two2: twoListType2,
        two3: twoListType3
      }
    },
    mounted(){

    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/colorful.scss";
</style>
