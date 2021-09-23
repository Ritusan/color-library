<template>
  <div>
    <div class="router-nav">
      <router-link :to="{ name: 'colorful' }" class="">单色</router-link>
      <router-link :to="{ name: 'ColorMatchChart' }">颜色组合</router-link>
      <router-link :to="{ name: 'exampleColor' }">color实例</router-link>
      <router-link :to="{ name: 'TodoList' }">Vue3实例</router-link>
      <router-link :to="{ name: 'ThemeChange' }">主题切换</router-link>
      <router-link :to="{ name: 'timeline' }">时间轴</router-link>
      <router-link :to="{ name: 'logTimeline' }">更新日志</router-link>
      <router-link :to="{ name: 'HasDesign' }">有呀设计</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style lang="scss" scoped>
@import "@/styles/topbar.scss";
</style>
