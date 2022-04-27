<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-04-27 18:04:16
 * @FilePath: /todo-list-demo/src/views/todoList.vue
-->
<template>
  <div class="todo-list-main-sec">
    <h1 class="todo-list-title">{{ title }}</h1>
    
    <section class="todo-list-content-sec">
      <div class="todo-list-input-box">
        <input @keyup.enter="addList" 
        class="todo-list-input" type="text" placeholder="What needs to be done" v-model="state.inputValue">
        <label @click="checkAll" class="todo-list-clicl-all" ></label>
      </div>
      <!-- todoItem组件 -->
      <div>
        <template v-for="(item, index) in state.todoList" :key="`todoList${index}`">
          <TodoListItem :todoTitle="item.todoTitle"
          :index="index" :checked="item.checked"
          @changeCheck="changeCheck" @delItem="delItem"></TodoListItem>
        </template>
      </div>
      <!-- todoItem end -->

      <div class="todo-list-footer" v-if="state.todoList.length">
        <div class="todo-list-text-button-box">
          <span>{{ state.left }} items left</span>
        </div>

        <div>
          <span @click="changeFilter()" 
          class="filter-button"
          :class="{'click': state.filter === 0}">All</span>
          <span @click="changeFilter(1)" 
          class="filter-button"
          :class="{'click': state.filter === 1}">Active</span>
          <span @click="changeFilter(2)" 
          class="filter-button"
          :class="{'click': state.filter === 2}">Complete</span>
        </div>

        <div @click="delCheckedAll" 
        :class="{'show': state.left !== state.todoList.length}"
        class="todo-list-text-button-box clear-all">
          Clear completed
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import config from '../config'
import { reactive, computed, watch } from 'vue'
import storage from '../utils/storage'

// 组件
import TodoListItem from '../components/todoListItem.vue';

const title = 'Todos'

const state = reactive({
  inputValue: '',
  // todo数组
  todoList: [
    {
      todoTitle: "todoValue",
      checked: false
    }
  ],
  // 状态筛选
  filter: 0,
  // 剩余多少项
  left: computed(() => {
    let cont = 0
    state.todoList.forEach(ele => {
      if (ele.checked) {
        cont++
      }
    })

    return state.todoList.length - cont
  })
})

/**
 * @description: 更改按钮选项
 * @param {*} filter
 * @return {*}
 */
const changeFilter = (filter = 0) => {
  state.filter = filter
}

/**
 * @description: 更改todo列表选中
 * @param {*} index
 * @return {*}
 */
const changeCheck = index => {
  state.todoList[index].checked = !state.todoList[index].checked
}

/**
 * @description: 删除todo选项
 * @param {*} index
 * @return {*}
 */
const delItem = index => {
  state.todoList.splice(index, 1)
}

/**
 * @description: 添加todo选项
 * @param {*}
 * @return {*}
 */
const addList = () => {
  let todoValue = state.inputValue 
  todoValue ? state.todoList.push(
    {
      todoTitle: todoValue,
      checked: false
    }) : ''
  
  state.inputValue = ''
}

/**
 * @description: 全选或者全不选
 * @param {*}
 * @return {*}
 */
const checkAll = () => {
  if (state.left !== 0) {
    state.todoList.forEach(ele => {
      ele.checked = true
    })
  } else {
    state.todoList.forEach(ele => {
      ele.checked = false
    })
  }
}

/**
 * @description: 批量删除
 * @param {*}
 * @return {*}
 */
const delCheckedAll = () => {
  state.todoList = state.todoList.filter(ele => {
    if (!ele.checked) {
      return ele
    }
  })
}

if (storage.getItem('todoList')) {
  state.todoList = storage.getItem('todoList')
}

watch(() => state.todoList, val => {
  storage.setItem('todoList', val)
},
{
  deep: true
})
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';
$title-margin: 10px 0;
$input-padding: 16px 16px 16px 64px;
$sec-w: 550px;
$check-all-w: 30px;

.todo-list-main-sec {
  display: flex;
  align-items: center;
  flex-direction: column;

  .todo-list-title {
    color: $todo-list-tittle-color;
    font-size: $todo-list-title-font-size;
    font-weight: $todo-list-font-weight;
    margin: $title-margin;
  }

  .todo-list-content-sec {
    width: $sec-w;
  }

  .todo-list-input-box {
    position: relative;

    .todo-list-input {
      position: relative;
      font-size: $todo-list-input-font-size;
      font-weight: $todo-list-font-weight;
      color: $todo-list-font-color;
      padding: $input-padding;
      border: none;
      box-shadow: $shadow;
      width: calc(100% - 76px);
      outline: none;
      background: #fff;
  
      &::placeholder {
        font-weight: $todo-list-font-weight;
        color: lighten($todo-list-font-color, 50%);
        font-style: italic;
      }
    }

    .todo-list-clicl-all {
      position: absolute;
      top: 25%;
      left: 12px;
      height: $check-all-w;
      width: $check-all-w;
      background: #fff;
      z-index: 3;
      cursor: pointer;

      &::after {
        content: '❯';
        position: absolute;
        top: calc(50% + 9px);
        left: -20px;
        display: block;
        width: 60px;
        height: 34px;
        font-size: 22px;
        color: #e6e6e6;
        transform: rotate(90deg);
      }
    }
  }

  .todo-list-footer {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    box-shadow: $shadow;
    background-color: #fff;
    width: $sec-w - 26px;
    color: $todo-list-footer-color;
    font-weight: 100;
    padding: 10px 15px;
    height: 20px;
    user-select: none;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 
      0 8px 0 -3px #f6f6f6, 
      0 9px 1px -3px rgb(0 0 0 / 20%), 
      0 16px 0 -6px #f6f6f6, 
      0 17px 2px -6px rgb(0 0 0 / 20%);
      z-index: -1;
    }

    .filter-button {
      margin: 3px;
      padding: 3px 7px;
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: 3px;
      cursor: pointer;
      transition: all .2s;
      z-index: 4;
    }

    // .todo-list-text-button-box {
    //   width: 80px;
    // }

    .click {
      border-color: $todo-list-click-border-color;
    }
  }

  .clear-all {
    cursor: pointer;
    opacity: 0;
  }

  .show {
    opacity: 1;
  }
}
</style>