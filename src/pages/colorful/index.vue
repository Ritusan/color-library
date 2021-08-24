<template>
    <div>
        <div  v-for="(item,index) in dataList" :key="index">
            <div class="color-title-wrap"
                :style="{'color': item.value}">
                <span>{{item.name}}</span>
            </div>
            <div class="color-wrap">
                <div class="color-item"
                v-for="(subItem,subIndex) in item.children" 
                :key="subIndex"
                :style="{'background-color': subItem.bgColor}"
                @click="handleClipboard(subItem.value, $event)">
                <span class="color-item-name">{{subItem.name}}</span>
                <span class="color-item-value">{{subItem.value}}</span>
                </div>
            </div>
            <div class="two-list-wrap">
                <div class="two-list-item"
                v-for="(twoItem, twoIndex) in item.twoList"
                :key="twoIndex">
                <div :style="{'background-color': twoItem.color1}" class="color1-item">
                    <span>{{twoItem.color1_name}}</span>
                </div>
                <div :style="{'background-color': twoItem.color2}" class="color2-item">
                    <span>{{twoItem.color2_name}}</span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.color-item-name,
.color-item-value {
  color: #fff;
}
.color-title-wrap {
  text-align: left;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 18px;
}
.two-list-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.two-list-item {
  .color1-item,
  .color2-item {
    width: 80px;
    height: 50px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
  }
}
</style>