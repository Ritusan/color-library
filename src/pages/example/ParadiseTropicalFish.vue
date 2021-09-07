<template>
  <div class="color-example">
    <color-example 
      :one="one"
      :two1="two1"
      :two2="two2"
      :two3="two3">
    </color-example>
  </div>
</template>

<script>

import ColorExample from "@/components/ColorExample"
import {oneList,twoListType1,twoListType2,twoListType3} from "@/utils/colorful/paradiseTropicalFish"

  export default {
    data(){
      return {
        one: oneList,
        two1: twoListType1,
        two2: twoListType2,
        two3: twoListType3
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
