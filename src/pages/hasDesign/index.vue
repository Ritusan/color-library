<template>
  <div>
    <side-bar :data-list="sideBarList"></side-bar>
    <div style="margin-left:200px;padding:16px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"

export default {
  name: "HasDesign",
  components: {
    SideBar,
  },
  data() {
    return {
      sideBarList: [
        {
          id: '1',
          name: '一般用双色调搞定',
          value: 'TwoColors',
          active: false
        },
        {
          id: '2',
          name: '圆形效果',
          value: 'CircularEffect',
          active: false
        },
        {
          id: '3',
          name: '整体围粗框',
          value: 'ThickBorder',
          active: false
        },
        {
          id: '4',
          name: '左起四分之一法则',
          value: 'QuarterRule',
          active: false
        },
        {
          id: '5',
          name: '散放三角形',
          value: 'ScatteredTriangle',
          active: false
        },
        {
          id: '6',
          name: '画线分段',
          value: 'LineSegment',
          active: false
        },
        {
          id: '7',
          name: '半透明背景',
          value: 'TranslucentBackground',
          active: false
        },
        {
          id: '8',
          name: '倾斜效果',
          value: 'TiltEffect',
          active: false
        },
        {
          id: '9',
          name: '小字装饰',
          value: 'SmallDecorations',
          active: false
        },
        {
          id: '10',
          name: '活用插画',
          value: 'UseIllustrations',
          active: false
        },
        {
          id: '11',
          name: '漂亮的拱形',
          value: 'BeautifulArch',
          active: false
        },
        {
          id: '12',
          name: '四周留白最棒了',
          value: 'WhiteAround',
          active: false
        },
        {
          id: '13',
          name: '字间留空排列',
          value: 'WordsBlank',
          active: false
        },
        {
          id: '14',
          name: '加一根极粗线条',
          value: 'AddThickline',
          active: false
        },
        {
          id: '15',
          name: '文字添框线',
          value: 'TextBorder',
          active: false
        },
        {
          id: '16',
          name: '带状底纹生韵律',
          value: 'BandedshadingRhythm',
          active: false
        },
        {
          id: '17',
          name: '对话框打造亲近感',
          value: 'DialogIntimacy',
          active: false
        },
        {
          id: '18',
          name: '溢出效果',
          value: 'SpilloverEffect',
          active: false
        },
        {
          id: '19',
          name: '铺上条带即可',
          value: 'SpreadStrips',
          active: false
        },
        {
          id: '20',
          name: '自然地镂空文字',
          value: 'HollowoutWords',
          active: false
        },
        {
          id: '21',
          name: '斜线切分',
          value: 'SlashSegmentation',
          active: false
        },
        {
          id: '22',
          name: '聪明的网格设计',
         value: 'GridDesign',
          active: false
        },
        {
          id: '23',
          name: '不知如何设计？使用条纹',
          value: 'UseStripes',
          active: false
        },
        {
          id: '24',
          name: '只要有单色照片就行',
          value: 'MonochromePhoto',
          active: false
        },
        {
          id: '25',
          name: 'HanddrawnText',
          value: 'TwoColors',
          active: false
        },
        {
          id: '26',
          name: '形似标志设计',
          value: 'LogoDesign',
          active: false
        },
        {
          id: '27',
          name: '各式框架',
          value: 'VariousFrames',
          active: false
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/hasDesign/HasDesign.scss";
</style>
