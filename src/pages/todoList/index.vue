<template>
  <div class="todo-list-wrap">
    <h2>{{ title }}</h2>
    <div class="input-wrap">
      <el-input v-model="inputVal"  @keyup.enter="handleAddItem"></el-input>
      <el-button @click="handleAddItem">
        新增
      </el-button>
    </div>
    <div class="list-item-wrap">
      <div v-for="(item,index) in dataList" :key="index" class="list-item">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

  export default {
    name: 'myHobby',
    setup() {
      const title = ref('TodoList')
      const inputVal = ref('')
      const dataList = reactive([])
      // const 
      const handleAddItem = ()=> {
        dataList.push(inputVal.value)
        inputVal.value = ''
      }
      return {
        title,
        inputVal,
        dataList,
        handleAddItem
      }
    }
  }
</script>

<style lang="scss" scoped>
.todo-list-wrap {
  padding: 20px;
  
}
.input-wrap {
  width: 300px;
  margin: auto;
  display: flex;
}
.el-button {
  margin-left: 8px;
}
.list-item-wrap {
  padding: 16px;
  .list-item {
    text-align: left;
  }
}

</style>