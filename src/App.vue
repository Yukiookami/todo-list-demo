<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-04-18 07:43:43
 * @FilePath: /todo-list-demo/src/App.vue
-->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
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