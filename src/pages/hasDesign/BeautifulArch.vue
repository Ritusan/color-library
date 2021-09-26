<template>
  <div class="has-design beautiful-arch">
    <div class="circular">
      <svg viewBox="0 0 100 100">
        <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
        <text xlink:href="#circle">
          <textPath>
            circular reasoning works because
          </textPath>
        </text>
      </svg>
    </div>
    <!-- <arc-text text="@junhoyeo" width={500} characterWidth={4.8} />
    <arc-text text="@junhoyeo" radius={250} characterWidth={4.8} />
    <arc-text
      text="@junhoyeo"
      upsideDown
      width={500}
      characterWidth={4.8}
    /> -->
  </div>
</template>

<script>
import ArcText from '@/components/ArcText';

  export default {
    name: 'BeautifulArch',
    components: {
      ArcText
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/hasDesign/BeautifulArch.scss";
.circular path { 
  fill: none; 
}
.circular { 
  width: 30em; 
  height: 30em; 
  margin: 3em auto 0;
  svg { 
    display: block; 
    overflow: visible;
  }
}
</style>