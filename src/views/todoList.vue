<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-05-15 12:01:19
 * @FilePath: /todo-list/src/views/todoList.vue
-->
<template>
  <div class="todo-list-main-sec">
    <h1 class="todo-list-title">{{ title }}</h1>
    
    <section class="todo-list-content-sec">
      <div class="todo-list-input-box">
        <input @keyup.enter="addTodo" class="todo-list-input" type="text" placeholder="What needs to be done" v-model="state.inputValue">
        <label @click="checkAll" class="todo-list-clicl-all" ></label>
      </div>
      <!-- todoItem组件 -->
      <template v-for="(item, index) in state.todoList" :key="`todolistItem${index}`">
        <TodoListItem v-if="item.checked === state.filterBoolean || state.filterBoolean === 0"
        :todoTitle="item.todoTitle"
        :checked="item.checked"
        :index="index"
        @changeCheck="changeCheck"
        @delItem="delItem"></TodoListItem>
      </template>
      <!-- todoItem end -->

      <div class="todo-list-footer" v-if="state.todoList.length">
        <div class="todo-list-text-button-box">
          <span>{{ state.left }} items left</span>
        </div>

        <div>
          <span class="filter-button" 
          :class="{'click': !state.filterNum}"
          @click="changeFilterNum(0)">All</span>
          <span class="filter-button" 
          :class="{'click': state.filterNum === 1}"
          @click="changeFilterNum(1)">Active</span>
          <span class="filter-button" 
          :class="{'click': state.filterNum === 2}"
          @click="changeFilterNum(2)">Complete</span>
        </div>

        <div :class="{'show': state.left !== state.todoList.length}" 
        class="todo-list-text-button-box clear-all" @click="delAll">
          Clear completed
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, reactive } from 'vue'

// 组件
import TodoListItem from '../components/todoListItem.vue';

const title = 'Todos'

const state = reactive({
  inputValue: '',
  left: computed(() => {
    let count = 0
    state.todoList.forEach(ele => {
      if (ele.checked) {
        count++
      } 
    })

    return state.todoList.length - count
  }),
  todoList: [
    {
      todoTitle: 'textValue',
      checked: false
    },
    {
      todoTitle: 'textValue',
      checked: true
    },
    {
      todoTitle: 'textValue',
      checked: false
    }
  ],
  filterNum: 0,
  filterBoolean: computed(() => {
    if (state.filterNum === 1) {
      return false
    } else if (state.filterNum === 2) {
      return true 
    } else {
      return 0
    }
  }) 
})

const changeCheck = (index) => {
  state.todoList[index].checked = !state.todoList[index].checked 
}

const delItem = (index) => {
  state.todoList.splice(index, 1)
}

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

const delAll = () => {
  state.todoList = state.todoList.filter(ele => {
    if (!ele.checked) {
      return ele
    }
  })
}

const addTodo = () => {
  let todoValue = state.inputValue

  todoValue ? state.todoList.push(
    {
      todoTitle: todoValue,
      checked: false
    }
  ) : ''

  state.inputValue = ''
}

const changeFilterNum = (val) => {
  state.filterNum = val
}
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
      transition: color .4s;
    }

    .todo-list-text-button-box {
      // width: 100px;
    }

    .click {
      border-color: $todo-list-click-border-color;
    }
  }

  .clear-all {
    cursor: pointer;
    opacity: 0;
    z-index: -10;
    // transition: all .3s ease-in-out;
  }

  .show {
    opacity: 1;
    z-index: 1;
  }
}
</style>