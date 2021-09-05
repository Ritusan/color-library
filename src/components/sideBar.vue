<template>
  <div class="sidebar" :style="{height:sideBarHeight + 'px'}">
    <div class="sidebar-item" v-for="(item,index) in dataList" :key="index" @click="sideBarClick(item)">
      <span>
        {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        sideBarHeight: 500,
        dataList: [
          {
            id: '1',
            name: '热气球节',
            value: 'HotAirBalloon'
          },
          // {
          //   id: '2',
          //   name: '少女派对',
          // },
          // {
          //   id: '3',
          //   name: '热带水果',
          // },
          {
            id: '4',
            name: '热带鱼乐园',
            value: 'ParadiseTropicalFish'
          },
          // {
          //   id: '5',
          //   name: '夏日祭钓水球',
          // },
          // {
          //   id: '6',
          //   name: '奔跑吧',
          // },
          // {
          //   id: '7',
          //   name: '彩虹桥',
          // },
          // {
          //   id: '8',
          //   name: '彩色积木',
          // },
          // {
          //   id: '9',
          //   name: '儿童房',
          // },
          // {
          //   id: '10',
          //   name: '水果煎饼',
          // },
          {
            id: '11',
            name: '欢乐复活节',
            value: 'HappyEaster'
          },
          // {
          //   id: '12',
          //   name: '鲜花精灵',
          // },
          // {
          //   id: '13',
          //   name: '樱花树下的人行道',
          // },
          {
            id: '14',
            name: '七彩肥皂泡',
            value: 'RainbowSoapBubbles'
          },
          // {
          //   id: '15',
          //   name: '糖果屋',
          // },
          {
            id: '34',
            name: '马尔代夫海滩',
            value: 'BeachResortMaldives'
          },
          {
            id: '38',
            name: '薰衣草香气',
            value: 'ScentOfLavender'
          },
          {
            id: '41',
            name: '少女的祈祷',
            value: 'MaidensPrayer'
          },
          {
            id: '59',
            name: '串珠挂饰',
            value: 'BeadworkPendantSouvenirs'
          },
          {
            id: '71',
            name: '辉煌夜景',
            value: 'SparklingNightView'
          },
          {
            id: '76',
            name: '春季风景',
            value: 'SceneryOfSpring'
          },
          {
            id: '78',
            name: '夏季风景',
            value: 'SceneryOfSummer'
          },
          {
            id: '80',
            name: '秋季风景',
            value: 'SceneryOfAutumn'
          },
          {
            id: '82',
            name: '冬季风景',
            value: 'SceneryOfWinter'
          }
        ]
      }
    },
    mounted() {
      this.sideBarHeight = document.documentElement.clientHeight - 56
      console.log(document.documentElement.clientHeight)
      console.log(this.sideBarHeight)
      console.log(this.$router)
    },
    methods: {
      sideBarClick(item){
        this.$router.push({
          name: item.value
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 56px;
  width: 200px;
  background: #eaf6fd;
  text-align: left;
  .sidebar-item {
    padding: 10px;
    cursor: pointer;
  }
}
</style>