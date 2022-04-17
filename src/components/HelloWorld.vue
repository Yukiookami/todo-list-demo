<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-04-18 07:53:45
 * @FilePath: /todo-list/src/components/HelloWorld.vue
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

</style>