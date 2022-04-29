<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-04-29 10:09:22
 * @FilePath: /todo-list/src/App.vue
-->
<script setup>
import todoList from './views/todoList.vue'
</script>

<template>
  <todoList />
</template>

<style lang="scss">
@import './assets/css/_variables.scss';

body {
  background-color: $todo-list-background-color;
  font-family: $todo-list-font-family;
}
</style>