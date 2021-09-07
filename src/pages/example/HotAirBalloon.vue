<template>
  <color-example 
    :one="one"
    :two1="two1"
    :two2="two2"
    :two3="two3">
  </color-example>
</template>

<script>

import ColorExample from "@/components/ColorExample"
import { getColorList } from "@/utils/colorful/HotAirBalloon"

  export default {
    data(){
      return {
        one: getColorList().oneList,
        two1: getColorList().twoListType1,
        two2: getColorList().twoListType2,
        two3: getColorList().twoListType3
      }
    },
    components: {
      ColorExample
    },
    mounted(){

    }
  }
</script>

<style lang="scss" scoped>

</style>
