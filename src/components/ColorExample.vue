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

  export default {
    data(){
      return {

      }
    },
    props: {
      one: {
        type: Array
      },
      two1: {
        type: Array
      },
      two2: {
        type: Array
      },
      two3: {
        type: Array
      }
    },
    mounted(){

    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/colorful.scss";
</style>
