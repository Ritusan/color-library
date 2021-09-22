<template>
  <div class="timeline-wrap">
    <div class="timeline-header">
      <span>{{ title }}</span>
    </div>
    <div class="timeline-item" v-for="(item,index) in dataList" :key="index">
      <div class="item-version">
        <span>{{ item.year }}</span>
      </div>
      <!-- <div class="timeline-item-time">
        <code>{{ item.date }}</code>
        <span class="item-weather" v-if="showWeather">{{ item.weather }}</span>
      </div> -->
      <div class="timeline-item-content">
        <div v-for="(subItem,subIndex) in item.body" :key="subIndex">
          <span class="subItem-title">{{ subItem.month }}</span>
          <div class="subItem-children">
            <span v-for="(threeItem,threeIndex) in subItem.children" :key="threeIndex">{{ threeItem.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Timeline',
    data(){
      return {
        
      }
    },
    props: {
      title: {
        type: String
      },
      showWeather: {
        type: Boolean
      },
      dataList: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/timeline.scss";
</style>