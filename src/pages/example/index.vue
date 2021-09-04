<template>
  <div>
    <side-bar></side-bar>
    <div style="margin-left:200px;padding:16px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBar from "../../components/sideBar.vue";

export default {
  name: "App",
  components: {
    sideBar,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped></style>
