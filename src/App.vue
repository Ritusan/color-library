<template>
  <top-bar></top-bar>
  <router-view></router-view>
</template>

<script>
import topBar from './components/topBar.vue'

export default {
  name: 'App',
  components: {
    topBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  // color:#2d74bb;
  color: #ef7c21;
  text-decoration: none;
  transition: .3s;
  &:hover {
    // color: #00b6dd;
    color: #f8ba62;
  }
}
</style>
