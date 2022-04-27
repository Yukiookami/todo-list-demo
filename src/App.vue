<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-04-26 17:06:05
 * @FilePath: /todo-list/src/App.vue
-->
<script setup>
import HelloWorld from './views/todoList.vue'
</script>

<template>
  <HelloWorld />
</template>

<style lang="scss">
@import './assets/css/_variables.scss';

body {
  background-color: $todo-list-background-color;
  font-family: $todo-list-font-family;
}
</style>