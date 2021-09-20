<template>
  <div class="timeline-wrap">
    <div class="timeline-header">
      <span>更新日志</span>
    </div>
    <div class="timeline-item" v-for="(item,index) in dataList" :key="index">
      <div class="timeline-item-time">
        <span>{{ item.date }}</span>
        <span>{{ item.weather }}</span>
      </div>
      <div class="timeline-item-content">
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Timeline',
    data(){
      return {
        dataList: [
          {
            date: '2021/09/10',
            weather: '晴天☀️',
            content: '第一版正式发布'
          },
          {
            date: '2021/09/12',
            weather: '晴天☀️',
            content: '第一版正式发布'
          },
          {
            date: '2021/09/13',
            weather: '晴天☀️',
            content: '第一版正式发布'
          },
          {
            date: '2021/09/15',
            weather: '晴天☀️',
            content: '第一版正式发布'
          },
          {
            date: '2021/09/20',
            weather: '晴天☀️',
            content: '第一版正式发布'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/timeline.scss";
</style>