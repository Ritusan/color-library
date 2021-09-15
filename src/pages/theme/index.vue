<template>
  <div :class="themeClass" :style="{ height: height + 'px' }" class="theme-change">
    <!-- <span class="title" @click="handleChangeTheme('red')">主题切换</span> -->
    <span class="title" @click="handleChangeTheme('red')" style="color: #eb6663">红色</span>
    <span class="title" @click="handleChangeTheme('orange')" style="color: #f8ba62">橙色</span>
    <span class="title" @click="handleChangeTheme('yellow')" style="color: #f7ca11">黄色</span>
    <span class="title" @click="handleChangeTheme('green')" style="color: #43a28c">绿色</span>
    <span class="title" @click="handleChangeTheme('cyan')" style="color: #72c6c7">青色</span>
    <span class="title" @click="handleChangeTheme('blue')" style="color: #84b9e5">蓝色</span>
    <span class="title" @click="handleChangeTheme('purple')" style="color: #b08aba">紫色</span>
    <br />
    <span class="text">用来演示渐变文字~</span>
  </div>
</template>

<script>
export default {
  name: "ThemeChange",
  data() {
    return {
      height: 500,
      themeClass: "red-theme",
    }
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 56
  },
  methods: {
    handleChangeTheme(theme) {
      switch(theme){
        case 'red':
          this.themeClass = 'red-theme'
          break
        case 'orange':
          this.themeClass = 'orange-theme'
          break
        case 'yellow':
          this.themeClass = 'yellow-theme'
          break
        case 'green':
          this.themeClass = 'green-theme'
          break
        case 'cyan':
          this.themeClass = 'cyan-theme'
          break
        case 'blue':
          this.themeClass = 'blue-theme'
          break
        case 'purple':
          this.themeClass = 'purple-theme'
          break
        default: 
          this.themeClass = 'purple-theme'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$bg-red: #eb6663;
$hover-red: #c93c2e;
$bg-red-text-gradient: linear-gradient(to right, #f4a584, #c93c2e, #eb6663);
$bg-red-body-gradient: linear-gradient(-20deg, #f3a9a9 0%, #fdfdfb 100%);

$bg-orange: #f8ba62;
$hover-orange: #f18f43;
$bg-orange-text-gradient: linear-gradient(to right, #f4a584, #ea5020, #edc8a8);
$bg-orange-body-gradient: linear-gradient(-20deg, #fce2cc 0%, #fdfdfb 100%);

$bg-yellow: #f7ca11;
$hover-yellow: #ee8d1e;
$bg-yellow-text-gradient: linear-gradient(to right, #ee8d1e, #f7b749, #f7ca11);
$bg-yellow-body-gradient: linear-gradient(-20deg, #f7edd0 0%, #fdfdfb 100%);

$bg-green: #43a28c;
$hover-green: #69c4d0;
$bg-green-text-gradient: linear-gradient(to right, #6abc6e, #69c4d0, #43a28c);
$bg-green-body-gradient: linear-gradient(-20deg, #bedfc2 0%, #f7f3ed 100%);

$bg-cyan: #72c6c7;
$hover-cyan: #94d0bf;
$bg-cyan-text-gradient: linear-gradient(to right, #86bfc9, #69c4d0, #72c6c7);
$bg-cyan-body-gradient: linear-gradient(-20deg, #d4ebec 0%, #f7f3ed 100%);

$bg-blue: #84b9e5;
$hover-blue: #69c4d0;
$bg-blue-text-gradient: linear-gradient(to right, #84b9e5, #69c4d0, #00aceb);
$bg-blue-body-gradient: linear-gradient(-20deg, #eaf6fd 0%, #f7f3ed 100%);

$bg-purple: #b08aba;
$hover-purple: #ca66a3;
$bg-purple-text-gradient: linear-gradient(to right, #ecaeca, #ca66a3, #b08aba);
$bg-purple-body-gradient: linear-gradient(-20deg, #e4c1db 0%, #f7f3ed 100%);

.theme-change {
  padding: 16px;
  span {
    display: inline-block;
    margin: 8px;
    padding-bottom: 8px;
  }
  span.title {
    cursor: pointer;
  }
  span.text {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
  }
}
.red-theme {
  background: $bg-red-body-gradient;
  span.text {
    background-image: $bg-red-text-gradient;
  }
}
.orange-theme {
  background: $bg-orange-body-gradient;
  span.text {
    background-image: $bg-orange-text-gradient;
  }
}
.yellow-theme {
  background: $bg-yellow-body-gradient;
  span.text {
    background-image: $bg-yellow-text-gradient;
  }
}
.green-theme {
  background: $bg-green-body-gradient;
  span.text {
    background-image: $bg-green-text-gradient;
  }
}
.cyan-theme {
  background: $bg-cyan-body-gradient;
  span.text {
    background-image: $bg-cyan-text-gradient;
  }
}
.blue-theme {
  background: $bg-blue-body-gradient;
  span.text {
    background-image: $bg-blue-text-gradient;
  }
}
.purple-theme {
  background: $bg-purple-body-gradient;
  span.text {
    background-image: $bg-purple-text-gradient;
  }
}
</style>
