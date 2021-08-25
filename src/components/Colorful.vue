<template>
  <div>
    <div v-for="(item,index) in dataList" :key="index">
      <div class="color-title-wrap"
        :style="{'color': item.value}">
        <span>{{item.name}}</span>
      </div>
      <div class="color-wrap">
        <div class="color-item"
          v-for="(subItem,subIndex) in item.children" 
          :key="subIndex"
          :style="{'background-color': subItem.bgColor}"
           @click="handleClipboard(subItem, $event)">
          <span class="color-item-name">{{subItem.name}}</span>
          <span class="color-item-value">{{subItem.value}}</span>
        </div>
      </div>
      <div class="two-list-wrap">
        <div class="two-list-item"
          v-for="(twoItem, twoIndex) in item.twoList"
          :key="twoIndex">
          <div :style="{'background-color': twoItem.color1}" class="color1-item">
            <span>{{twoItem.color1_name}}</span>
          </div>
          <div :style="{'background-color': twoItem.color2}" class="color2-item">
            <span>{{twoItem.color2_name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clipboard from '@/utils/clipboard'

  export default {
    name: 'Colorful',
    data(){
      return {
        dataList: [
          {
            name: '粉色',
            value: 'pink',
            children:[
              {
                id: 'PK-01',
                bgColor: 'rgb(254,243,235)',
                name: '嫩米色',
                value: '#fef3eb',
              },
              {
                id: 'PK-03',
                bgColor: 'rgb(249,208,186)',
                name: '杏粉色',
                value: '#f9d0ba'
              },
              {
                id: 'PK-04',
                bgColor: 'rgb(238,180,150)',
                name: '洛可可',
                value: '#eeb496'
              },
              {
                id: 'PK-06',
                bgColor: 'rgb(244,165,132)',
                name: '贝里尼',
                value: '#f4a584'
              },
              {
                id: 'PK-11',
                bgColor: 'rgb(245,181,171)',
                name: '桃粉',
                value: '#f5b5ab'
              },
              {
                id: 'PK-15',
                bgColor: 'rgb(243,162,154)',
                name: '草莓汁',
                value: '#f3a29a'
              },
              {
                id: 'PK-17',
                bgColor: 'rgb(238,183,179)',
                name: '柔软玫瑰',
                value: '#eeb7b3'
              },
              {
                id: 'PK-21',
                bgColor: 'rgb(243,169,169)',
                name: '珊瑚粉',
                value: '#f3a9a9'
              },
              {
                id: 'PK-27',
                bgColor: 'rgb(236,114,145)',
                name: '梦幻玫瑰',
                value: '#ec7291'
              },
              {
                id: 'PK-39',
                bgColor: 'rgb(234,203,218)',
                name: '粉荷',
                value: '#eacbda'
              },
            ],
            twoList: [
              {
                id: 'PK-01',
                color1_name: '嫩米色',
                color1: 'rgb(254,243,235)',
                color2_name: '珊瑚树胶',
                color2: 'rgb(241,151,140)'
              },
              {
                id: 'PK-01',
                color1_name: '嫩米色',
                color1: 'rgb(254,243,235)',
                color2_name: '贝里尼',
                color2: 'rgb(244,165,132)'
              },
            ]
          },
          {
            name: '红色',
            value: 'red',
            children: [
              {
                id: 'R-01',
                bgColor: 'rgb(211,71,23)',
                name: '红辣椒',
                value: '#d34717'
              },
              {
                id: 'R-05',
                bgColor: 'rgb(226,108,85)',
                name: '秋日玫瑰',
                value: '#e26c55'
              },
              {
                id: 'R-06',
                bgColor: 'rgb(237,121,102)',
                name: '红珊瑚',
                value: '#ed7966'
              },
              {
                id: 'R-09',
                bgColor: 'rgb(233,77,67)',
                name: '媚俗樱桃',
                value: '#e94d43'
              },
              {
                id: 'R-10',
                bgColor: 'rgb(235,102,99)',
                name: '热情红桃',
                value: '#eb6663'
              },
              {
                id: 'R-12',
                bgColor: 'rgb(230,101,99)',
                name: '草莓糖',
                value: '#e66563'
              },
              {
                id: 'R-21',
                bgColor: 'rgb(229,79,88)',
                name: '秋海棠',
                value: '#e54f58'
              },
              {
                id: 'R-29',
                bgColor: 'rgb(220,64,83)',
                name: '玫瑰果冻',
                value: '#dc4053'
              },
              {
                id: 'R-35',
                bgColor: 'rgb(226,0,53)',
                name: '迷人红宝石',
                value: '#e20035'
              },
              {
                id: 'R-39',
                bgColor: 'rgb(230,25,107)',
                name: '清爽玫瑰',
                value: '#e6196b'
              },
            ]
          },
          {
            name: '橘色',
            value: 'orange',
            children: [
              {
                id: 'ORG-01',
                bgColor: 'rgb(240,137,104)',
                name: '橘粉',
                value: '#f08968'
              },
              {
                id: 'ORG-02',
                bgColor: 'rgb(237,116,76)',
                name: '珊瑚火焰',
                value: '#ed744c'
              },
              {
                id: 'ORG-08',
                bgColor: 'rgb(237,114,43)',
                name: '橙子果冻',
                value: '#ed722b'
              },
              {
                id: 'ORG-13',
                bgColor: 'rgb(249,201,170)',
                name: '杏花蜜',
                value: '#f9c9aa'
              },
              {
                id: 'ORG-15',
                bgColor: 'rgb(240,132,61)',
                name: '活力橙',
                value: '#f0843d'
              },
              {
                id: 'ORG-19',
                bgColor: 'rgb(241,143,67)',
                name: '快乐橙',
                value: '#f18f43'
              },
              {
                id: 'ORG-20',
                bgColor: 'rgb(239,124,33)',
                name: '夏日蜜橘',
                value: '#ef7c21'
              },
              {
                id: 'ORG-21',
                bgColor: 'rgb(240,131,44)',
                name: '草原落日',
                value: '#f0832c'
              },
              {
                id: 'ORG-37',
                bgColor: 'rgb(248,186,98)',
                name: '花粉橙',
                value: '#f8ba62'
              },
              {
                id: 'ORG-38',
                bgColor: 'rgb(249,194,112)',
                name: '橙汁苏打',
                value: '#f9c270'
              },
            ]
          },
          {
            name: '黄色',
            value: 'yellow',
            children: [
              {
                id: 'Y-01',
                bgColor: 'rgb(243,218,178)',
                name: '丰收奶油色',
                value: '#f3dab2'
              },
              {
                id: 'Y-02',
                // bgColor: 'rgb(253,225,232)',
                bgColor: 'rgb(253,225,174)',
                name: '车达芝士',
                value: '#fde1ae'
              },
              {
                id: 'Y-03',
                bgColor: 'rgb(251,201,109)',
                name: '蛋黄色',
                value: '#fbc96d'
              },
              {
                id: 'Y-04',
                bgColor: 'rgb(253,228,178)',
                name: '蛋奶糊',
                value: '#fde4b2'
              },
              {
                id: 'Y-09',
                bgColor: 'rgb(254,229,161)',
                name: '光束',
                value: '#fee5a1'
              },
              {
                id: 'Y-12',
                bgColor: 'rgb(255,249,232)',
                name: '牛奶泡沫',
                value: '#fff9e8'
              },
              {
                id: 'Y-15',
                bgColor: 'rgb(235,196,66)',
                name: '玉米黄',
                value: '#ebc442'
              },
              {
                id: 'Y-19',
                bgColor: 'rgb(239,196,36)',
                name: '香蕉黄',
                value: '#efc424'
              },
              {
                id: 'Y-20',
                bgColor: 'rgb(245,229,169)',
                name: '月光黄',
                value: '#f5e5a9'
              },
              {
                id: 'Y-23',
                bgColor: 'rgb(250,236,176)',
                name: '茉莉',
                value: '#faecb0'
              },
              {
                id: 'Y-25',
                // bgColor: 'rgb(248,235,232)',
                bgColor: 'rgb(248,235,174)',
                name: '柠檬酪',
                value: '#f8ebae'
              },
              {
                id: 'Y-26',
                bgColor: 'rgb(255,236,142)',
                name: '月见草',
                value: '#ffec8e'
              },
              {
                id: 'Y-33',
                bgColor: 'rgb(244,228,83)',
                name: '活力柠檬',
                value: '#f4e453'
              },
              {
                id: 'Y-38',
                bgColor: 'rgb(249,242,127)',
                name: '黄蝴蝶',
                value: '#f9f27f'
              },
            ]
          },
          {
            name: '棕色',
            value: 'brown',
            children: [
              {
                id: 'BRO-03',
                bgColor: 'rgb(153,75,70)',
                name: '红小豆',
                value: '#994b46'
              },
              {
                id: 'BRO-04',
                bgColor: 'rgb(99,54,48)',
                name: '丁香棕',
                value: '#633630'
              },
              {
                id: 'BRO-05',
                bgColor: 'rgb(160,105,96)',
                name: '巧克力曲奇🍪',
                value: '#a06960'
              },
              {
                id: 'BRO-06',
                bgColor: 'rgb(123,43,29)',
                name: '勇气棕',
                value: '#7b2b1d'
              },
              {
                id: 'BRO-09',
                bgColor: 'rgb(179,143,135)',
                name: '巧克力奶昔',
                value: '#b38f87'
              },
              {
                id: 'BRO-17',
                bgColor: 'rgb(218,142,104)',
                name: '红砖仓库',
                value: '#da8e68'
              },
              {
                id: 'BRO-18',
                bgColor: 'rgb(206,173,155)',
                name: '浅摩卡',
                value: '#cead9b'
              },
              {
                id: 'BRO-22',
                bgColor: 'rgb(191,142,104)',
                name: '胡桃色',
                value: '#bf8e68'
              },
              {
                id: 'BRO-024',
                bgColor: 'rgb(233,218,206)',
                name: '蘑菇色',
                value: '#e9dace'
              },
              {
                id: 'BRO-27',
                bgColor: 'rgb(237,200,168)',
                name: '奶茶色',
                value: '#edc8a8'
              },
              {
                id: 'BRO-28',
                bgColor: 'rgb(246,230,213)',
                name: '燕麦色',
                value: '#f6e6d5'
              },
            ]
          },
          {
            name: '绿色',
            value: 'green',
            children: [
              {
                id: 'GRE-07',
                bgColor: 'rgb(213,221,94)',
                name: '浅嫩芽绿',
                value: '#d5dd5e'
              },
              {
                id: 'GRE-08',
                bgColor: 'rgb(213,225,89)',
                name: '生机绿',
                value: '#d5e159'
              },
              {
                id: 'GRE-09',
                bgColor: 'rgb(191,210,0)',
                name: '跃动绿',
                value: '#bfd200'
              },
              {
                id: 'GRE-10',
                bgColor: 'rgb(165,172,96)',
                name: '绿茶奶油',
                value: '#a5ac60'
              },
              {
                id: 'GRE-18',
                bgColor: 'rgb(150,182,55)',
                name: '绿色山丘',
                value: '#96b637'
              },
              {
                id: 'GRE-20',
                bgColor: 'rgb(193,219,129)',
                name: '活力薄荷',
                value: '#c1db81'
              },
              {
                id: 'GRE-21',
                bgColor: 'rgb(157,190,71)',
                name: '鸭子草',
                value: '#9dbe47'
              },
              {
                id: 'GRE-24',
                bgColor: 'rgb(118,157,65)',
                name: '朝气绿叶',
                value: '#769d41'
              },
              {
                id: 'GRE-25',
                bgColor: 'rgb(225,239,211)',
                name: '温柔微风',
                value: '#e1efd3'
              },
              {
                id: 'GRE-26',
                bgColor: 'rgb(112,181,44)',
                name: '乐园绿',
                value: '#70b52c'
              },
              {
                id: 'GRE-27',
                bgColor: 'rgb(168,210,134)',
                name: '苏打气泡绿',
                value: '#a8d286'
              },
              {
                id: 'GRE-32',
                bgColor: 'rgb(91,182,71)',
                name: '清新绿',
                value: '#5bb647'
              },
              {
                id: 'GRE-33',
                bgColor: 'rgb(195,225,191)',
                name: '薄荷糖霜',
                value: '#c3e1bf'
              },
              {
                id: 'GRE-36',
                bgColor: 'rgb(0,163,102)',
                name: '翡翠绿',
                value: '#00a366'
              },
              {
                id: 'GRE-38',
                bgColor: 'rgb(206,232,226)',
                name: '妖精王国',
                value: '#cee8e2'
              },
              {
                id: 'GRE-39',
                bgColor: 'rgb(0,155,133)',
                name: '祖母绿',
                value: '#009b85'
              },
            ]
          },
          {
            name: '蓝色',
            value: 'blue',
            children: [
              {
                id: 'BLUE-03',
                bgColor: 'rgb(0,166,182)',
                name: '土耳其之海',
                value: '#00a6b6'
              },
              {
                id: 'BLUE-04',
                bgColor: 'rgb(92,194,215)',
                name: '水蓝色',
                value: '#5cc2d7'
              },
              {
                id: 'BLUE-05',
                bgColor: 'rgb(0,182,221)',
                name: '亮蓝',
                value: '#00b6dd'
              },
              {
                id: 'BLUE-06',
                bgColor: 'rgb(161,216,228)',
                name: '蓝薄荷',
                value: '#a1d8e4'
              },
              {
                id: 'BLUE-07',
                bgColor: 'rgb(200,227,233)',
                name: '奶油蓝',
                value: '#c8e3e9'
              },
              {
                id: 'BLUE-10',
                bgColor: 'rgb(87,195,234)',
                name: '清新蓝',
                value: '#57c3ea'
              },
              {
                id: 'BLUE-12',
                bgColor: 'rgb(58,176,230)',
                name: '彗星蓝',
                value: '#3ab0e6'
              },
              {
                id: 'BLUE-15',
                bgColor: 'rgb(187,225,245)',
                name: '婴儿蓝',
                value: '#bbe1f5'
              },
              {
                id: 'BLUE-16',
                bgColor: 'rgb(137,195,231)',
                name: '午后蓝色',
                value: '#89c3e7'
              },
              {
                id: 'BLUE-19',
                bgColor: 'rgb(67,141,199)',
                name: '清晨之光',
                value: '#438dc7'
              },
              {
                id: 'BLUE-22',
                bgColor: 'rgb(45,116,187)',
                name: '自由蓝',
                value: '#2d74bb'
              },
              {
                id: 'BLUE-23',
                bgColor: 'rgb(134,179,224)',
                name: '浪漫蓝',
                value: '#86b3e0'
              },
              {
                id: 'BLUE-31',
                bgColor: 'rgb(111,148,205)',
                name: '普罗旺斯蓝',
                value: '#6f94cd'
              },
              {
                id: 'BLUE-38',
                bgColor: 'rgb(116,132,191)',
                name: '蓝色薰衣草',
                value: '#7484bf'
              },
            ]
          },
          {
            name: '紫色',
            value: 'purple',
            children: [
              {
                id: 'PUR-04',
                bgColor: 'rgb(214,187,197)',
                name: '紫丁香',
                value: '#d6bbc5'
              },
              {
                id: 'PUR-07',
                bgColor: 'rgb(172,84,130)',
                name: '杜鹃紫',
                value: '#ac5482'
              },
              {
                id: 'PUR-09',
                bgColor: 'rgb(180,80,154)',
                name: '紫色三色堇',
                value: '#b4509a'
              },
              {
                id: 'PUR-11',
                bgColor: 'rgb(169,77,153)',
                name: '奇妙紫',
                value: '#a94d99'
              },
              {
                id: 'PUR-12',
                bgColor: 'rgb(188,155,183)',
                name: '葡萄慕斯',
                value: '#bc9bb7'
              },
              {
                id: 'PUR-14',
                bgColor: 'rgb(193,145,190)',
                name: '葡萄奶油',
                value: '#c191be'
              },
              {
                id: 'PUR-17',
                bgColor: 'rgb(162,100,166)',
                name: '紫草色',
                value: '#a264a6'
              },
              {
                id: 'PUR-18',
                bgColor: 'rgb(174,124,180)',
                name: '紫罗兰利口酒',
                value: '#ae7cb4'
              },
              {
                id: 'PUR-01',
                bgColor: 'rgb(204,174,210)',
                name: '香水草',
                value: '#ccaed2'
              },
              {
                id: 'PUR-21',
                bgColor: 'rgb(193,166,206)',
                name: '春日紫罗兰',
                value: '#c1a6ce'
              },
              {
                id: 'PUR-22',
                bgColor: 'rgb(225,212,232)',
                name: '嫩丁香',
                value: '#e1d4e8'
              },
              {
                id: 'PUR-28',
                bgColor: 'rgb(221,209,231)',
                name: '浅香水草',
                value: '#ddd1e7'
              },
              {
                id: 'PUR-29',
                bgColor: 'rgb(100,55,145)',
                name: '无畏紫罗兰',
                value: '#643791'
              },
              {
                id: 'PUR-30',
                bgColor: 'rgb(144,115,178)',
                name: '梦幻紫罗兰',
                value: '#9073b2'
              },
            ]
          },
          {
            name: '无色',
            value: 'neutral',
            children: [
              {
                id: 'N-01',
                bgColor: 'rgb(255,255,255)',
                name: '白色',
                value: '#ffffff'
              },
              {
                id: 'N-02',
                bgColor: 'rgb(239,239,239)',
                name: '浅灰',
                value: '#efefef'
              },
              {
                id: 'N-04',
                bgColor: 'rgb(201,202,202)',
                name: '中灰',
                value: '#c9caca'
              },
              {
                id: 'N-08',
                bgColor: 'rgb(102,100,100)',
                name: '深灰',
                value: '#666464'
              },
              {
                id: 'CN-01',
                bgColor: 'rgb(250,253,255)',
                name: '冷色系1',
                value: '#fafdff'
              },
              {
                id: 'CN-02',
                bgColor: 'rgb(228,234,238)',
                name: '冷色系2',
                value: '#e4eaee'
              },
              {
                id: 'WN-01',
                bgColor: 'rgb(254,249,249)',
                name: '暖色系1',
                value: '#fef9f9'
              },
              {
                id: 'WN-02',
                bgColor: 'rgb(238,232,231)',
                name: '暖色系2',
                value: '#eee8e7'
              },
            ]
          }
        ]
      }
    },
    methods: {
      handleClipboard(text, event) {
        // let params = text.name + text.value
        let params = text.value
        clipboard(params, event)
      }
    }
  }
</script>

<style lang="scss" scoped>
.color-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.color-item {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
.color-item-name,
.color-item-value {
  color: #fff;
}
.color-title-wrap {
  text-align: left;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 18px;
}
.two-list-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.two-list-item {
  .color1-item,
  .color2-item {
    width: 80px;
    height: 50px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
  }
}
</style>