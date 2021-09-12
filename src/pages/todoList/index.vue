<template>
  <div class="todo-list-wrap">
    <h2>{{ title }}</h2>
    <div class="name-wrap">
      <h3>{{ name }}</h3>
      <el-button @click="handleChangeName">
        修改
      </el-button>
      <el-button @click="handleRestoreName">
        还原
      </el-button>
    </div>
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
import { useStore } from 'vuex'

  export default {
    name: 'TodoList',
    setup() {
      const title = ref('TodoList')
      const store = useStore()
      const { name } = toRefs(store.state) // 解构
      const inputVal = ref('')
      const dataList = reactive([])
      
      const handleAddItem = ()=> {
        dataList.push(inputVal.value)
        inputVal.value = ''
      }
      const handleChangeName = ()=> {
        // commit和mutations做关联，提交一个commit，触发一个mutation
        store.commit('changeName', 'Happy')
      }
      const handleRestoreName = ()=> {
        // dispatch和actions做关联，派发一个action
        store.dispatch('getData', 'Biblee')
      }
      return {
        title,
        name,
        inputVal,
        dataList,
        handleAddItem,
        handleChangeName,
        handleRestoreName
      }
    }
  }
</script>

<style lang="scss" scoped>
.todo-list-wrap {
  padding: 20px;
  
}
.name-wrap {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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