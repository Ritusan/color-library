<template>
  <div :class="themeClass" :style="{ height: height + 'px' }" class="theme-change">
      <span class="title"
        v-for="(item,index) in colorList"
        :key="index"
        @click="handleChangeTheme(item.value)" 
        :style="{color: item.color}">
        {{ item.name }}
      </span>
    <br />
    <span class="text">用来演示渐变文字~</span>
  </div>
</template>

<script>
export default {
  name: "ThemeChange",
  data() {
    return {
      height: 500,
      themeClass: "red-theme",
      colorList: [
        {
          name: '红色',
          value: 'red',
          color: '#eb6663'
        },
        {
          name: '橙色',
          value: 'orange',
          color: '#f8ba62'
        },
        {
          name: '黄色',
          value: 'yellow',
          color: '#f7ca11'
        },
        {
          name: '绿色',
          value: 'green',
          color: '#43a28c'
        },
        {
          name: '青色',
          value: 'cyan',
          color: '#72c6c7'
        },
        {
          name: '蓝色',
          value: 'blue',
          color: '#84b9e5'
        },
        {
          name: '紫色',
          value: 'purple',
          color: '#b08aba'
        },
      ]
    }
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 56
  },
  methods: {
    handleChangeTheme(theme) {
      this.themeClass = theme + '-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
</style>
