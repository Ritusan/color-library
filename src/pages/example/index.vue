<template>
  <div>
    <side-bar></side-bar>
    <div style="margin-left:200px;padding:16px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "../../components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
