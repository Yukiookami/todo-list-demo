<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-04-18 07:49:25
 * @FilePath: /todo-list-demo/src/components/HelloWorld.vue
-->
<template>
  <div class="todo-list-main-sec">
    <h1 class="todo-list-title">{{ title }}</h1>
    
    <section class="todo-list-content-sec">
      <div class="todo-list-input-box">
        <input class="todo-list-input" type="text" placeholder="What needs to be done" v-model="state.inputValue">
        <label class="todo-list-clicl-all" ></label>
      </div>
      <!-- todoItem组件 -->
      <div></div>
      <!-- todoItem end -->

      <div class="todo-list-footer">
        <div class="todo-list-text-button-box">
          <span>{{ state.cont }} items left</span>
        </div>

        <div>
          <span class="filter-button click">All</span>
          <span class="filter-button">Active</span>
          <span class="filter-button">Complete</span>
        </div>

        <div class="todo-list-text-button-box"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const title = 'Todos'

const state = reactive({
  inputValue: '',
  cont: 0
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
      width: 75px;
    }

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