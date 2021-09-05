<template>
  <div>
    <div v-for="(item, index) in dataList" :key="index">
      <div class="color-title-wrap" :style="{ color: item.value }">
        <span>{{ item.name }}</span>
      </div>
      <div class="two-list-wrap">
        <div
          class="two-list-item"
          v-for="(twoItem, twoIndex) in item.twoList"
          :key="twoIndex"
        >
          <div
            :style="{ 'background-color': twoItem.color1 }"
            class="color1-item"
          >
            <span>{{ twoItem.color1_name }}</span>
          </div>
          <div
            :style="{ 'background-color': twoItem.color2 }"
            class="color2-item"
          >
            <span>{{ twoItem.color2_name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorMatchChart",
  data() {
    return {
      dataList: [
        {
          name: "粉色",
          value: "pink",
          twoList: [
            {
              id: "PK-01",
              color1_name: "嫩米色",
              color1: "rgb(254,243,235)",
              color2_name: "珊瑚树胶",
              color2: "rgb(241,151,140)",
            },
            {
              id: "PK-01",
              color1_name: "嫩米色",
              color1: "rgb(254,243,235)",
              color2_name: "贝里尼",
              color2: "rgb(244,165,132)",
            },
          ],
        },
        {
          name: "红色",
          value: "red",
          twoList: [
            {
              id: "R-09",
              color1_name: "媚俗樱桃",
              color1: "rgb(233,77,67)",
              id2: "PK-09",
              color2_name: "粉红香槟",
              color2: "rgb(247,194,182)",
            },
            {
              id: "PK-05",
              color1_name: "羊绒粉",
              color1: "rgb(243,226,218)",
              id2: "R-05",
              color2_name: "明亮火焰",
              color2: "rgb(233,66,27)",
            },
            {
              id: "R-29",
              color1_name: "玫瑰果冻",
              color1: "rgb(220,64,83)",
              id2: "PK-26",
              color2_name: "玫瑰乳",
              color2: "rgb(243,231,234)",
            },
            {
              id: "R-35",
              color1_name: "迷人红宝石",
              color1: "rgb(226,0,53)",
              id2: "PK-39",
              color2_name: "粉荷",
              color2: "rgb(234,203,218)",
            },
            {
              id: "R-02",
              color1_name: "落日红",
              color1: "rgb(234,80,32)",
              id2: "BRO-27",
              color2_name: "奶茶色",
              color2: "rgb(237,200,168)",
            },
            {
              id: "R-38",
              color1_name: "九重葛玫瑰",
              color1: "rgb(205,68,111)",
              id2: "PK-31",
              color2_name: "红梅",
              color2: "rgb(235,206,215)",
            },
          ],
        },
        {
          name: "橘色",
          value: "orange",
          twoList: [],
        },
        {
          name: "黄色",
          value: "yellow",
          twoList: [],
        },
        {
          name: "棕色",
          value: "brown",
          twoList: [],
        },
        {
          name: "绿色",
          value: "green",
          twoList: [],
        },
        {
          name: "蓝色",
          value: "blue",
          twoList: [],
        },
        {
          name: "紫色",
          value: "purple",
          twoList: [],
        },
        {
          name: "无色",
          value: "neutral",
          twoList: [],
        },
      ],
    };
  },
  methods: {
    handleClipboard() {},
  },
};
</script>

<style lang="scss" scoped>
.color-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.color-item {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
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
