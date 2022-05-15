<!--
 * @Author: zxy
 * @Date: 2022-04-26 17:31:35
 * @LastEditTime: 2022-05-15 10:27:39
 * @FilePath: /todo-list/src/components/todoListItem.vue
-->
<template>
  <div class="todo-item-sec">
    <input @click="changeCheck" 
    type="checkbox" class="todo-item-check"
    :class="{'todo-item-checked': props.checked}">
    <label class="todo-title"
    :class="{'clear': props.checked}">{{ props.todoTitle }}</label>
    
    <div @click="delItem" class="del-button"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  todoTitle: String,
  checked: Boolean,
  index: Number
})

const emit = defineEmits([
  'changeCheck',
  'delItem'
])

const changeCheck = () => {
  emit('changeCheck', props.index)
}

const delItem = () => {
  emit('delItem', props.index)
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';
$chek-h: 40px;
$del-button-c: #af5b5e;

.todo-item-sec {
  position: relative;
  font-size: 1.5rem;
  font-family: $todo-list-font-family;
  font-weight: 100;
  background-color: #fff;
  width: calc(100% + 4px);
  box-shadow: $shadow;
  
  .todo-item-check {
    text-align: center;
    width: $chek-h;
    height: $chek-h;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url('../assets/image/check.svg');
    background-repeat: no-repeat;
    background-position: center left;
    cursor: pointer;
    z-index: 9;
  }

  .todo-item-checked {
    background-image: url('../assets/image/checked.svg');
  }

  .todo-title {
    overflow: hidden;
    display: block;
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    line-height: 1.2;
    transition: color 0.4s;
  }

  .clear {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  .del-button {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 35px;
    height: 35px;
    margin: auto 0;
    font-size: 30px;
    color: $del-button-c;
    margin-bottom: 11px;
    transition: all 0.2s ease-out;
    cursor: pointer;
    
    &::after {
      content: '×';
    }

    &:hover {
      opacity: 1;
      z-index: 10;
    }
  }
}
</style>