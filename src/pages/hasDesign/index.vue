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
          value: 'TwoColors',
          active: false
        },
        {
          id: '3',
          name: '整体围粗框',
          value: 'TwoColors',
          active: false
        },
        {
          id: '4',
          name: '左起四分之一法则',
          value: 'TwoColors',
          active: false
        },
        {
          id: '5',
          name: '散放三角形',
          value: 'TwoColors',
          active: false
        },
        {
          id: '6',
          name: '画线分段',
          value: 'TwoColors',
          active: false
        },
        {
          id: '7',
          name: '半透明背景',
          value: 'TwoColors',
          active: false
        },
        {
          id: '8',
          name: '倾斜效果',
          value: 'TwoColors',
          active: false
        },
        {
          id: '9',
          name: '小字装饰',
          value: 'TwoColors',
          active: false
        },
        {
          id: '10',
          name: '活用插画',
          value: 'TwoColors',
          active: false
        },
        {
          id: '11',
          name: '漂亮的拱形',
          value: 'TwoColors',
          active: false
        },
        {
          id: '12',
          name: '四周留白最棒了',
          value: 'TwoColors',
          active: false
        },
        {
          id: '13',
          name: '字间留空排列',
          value: 'TwoColors',
          active: false
        },
        {
          id: '14',
          name: '加一根极粗线条',
          value: 'TwoColors',
          active: false
        },
        {
          id: '15',
          name: '文字添框线',
          value: 'TwoColors',
          active: false
        },
        {
          id: '16',
          name: '带状底纹生韵律',
          value: 'TwoColors',
          active: false
        },
        {
          id: '17',
          name: '对话框打造亲近感',
          value: 'TwoColors',
          active: false
        },
        {
          id: '18',
          name: '溢出效果',
          value: 'TwoColors',
          active: false
        },
        {
          id: '19',
          name: '铺上条带即可',
          value: 'TwoColors',
          active: false
        },
        {
          id: '20',
          name: '自然地镂空文字',
          value: 'TwoColors',
          active: false
        },
        {
          id: '21',
          name: '斜线切分',
          value: 'TwoColors',
          active: false
        },
        {
          id: '22',
          name: '聪明的网格设计',
         value: 'TwoColors',
          active: false
        },
        {
          id: '23',
          name: '不知如何设计？使用条纹',
          value: 'TwoColors',
          active: false
        },
        {
          id: '24',
          name: '只要有单色照片就行',
          value: 'TwoColors',
          active: false
        },
        {
          id: '25',
          name: '可爱手绘文字',
          value: 'TwoColors',
          active: false
        },
        {
          id: '26',
          name: '形似标志设计',
          value: 'TwoColors',
          active: false
        },
        {
          id: '27',
          name: '各式框架',
          value: 'TwoColors',
          active: false
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped></style>
