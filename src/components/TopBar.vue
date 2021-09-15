<template>
  <div>
    <div class="router-nav">
      <router-link :to="{ name: 'colorful' }" class="">单色</router-link>
      <router-link :to="{ name: 'ColorMatchChart' }">颜色组合</router-link>
      <router-link :to="{ name: 'exampleColor' }">实例</router-link>
      <router-link :to="{ name: 'TodoList' }">Vue3实例</router-link>
      <router-link :to="{ name: 'ThemeChange' }">主题切换</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style lang="scss" scoped>
.router-nav {
  position: fixed;
  top: 0px;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  background: #fff;
  align-items: center;
  padding: 16px 0;
  a {
    margin: 0 8px 0px 0;
    font-size: 16px;
    font-weight: bold;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
