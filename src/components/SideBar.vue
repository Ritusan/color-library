<template>
  <div class="sidebar" :style="{height:sideBarHeight + 'px'}">
    <div class="sidebar-item" :class="{'item-active':item.active}" v-for="(item,index) in dataList" :key="index" @click="sideBarClick(item)">
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
      }
    },
    props: {
      dataList: {
        type: Array
      }
    },
    mounted() {
      this.sideBarHeight = document.documentElement.clientHeight - 56
      console.log(this.$route.name)
      this.dataList.map((item)=>{
        item.active = false
        if(this.$route.name == item.value){
          item.active = true
        }
      })
    },
    methods: {
      sideBarClick(item){
        this.$router.push({
          name: item.value
        }).then(()=>{
          this.dataList.map((el,index)=>{
            el.active = false
          })
          if(this.$route.name == item.value){
            item.active = true
          }  
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/sidebar.scss";
</style>
