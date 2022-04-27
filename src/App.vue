<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-04-26 17:37:09
 * @FilePath: /todo-list-demo/src/App.vue
-->
<script setup>
import TodoList from './views/todoList.vue'
</script>

<template>
  <TodoList />
</template>

<style lang="scss">
@import './assets/css/_variables.scss';

* {
  font-family: $todo-list-font-family;
  font-size: $todo-list-font-size;
}

body {
  background-color: $todo-list-background-color;
}
</style>