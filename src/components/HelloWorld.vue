<!--
 * @Author: zxy
 * @Date: 2022-04-10 10:40:51
 * @LastEditTime: 2022-04-16 12:09:20
 * @FilePath: /todo-list/src/components/HelloWorld.vue
-->
<template>
  <h1>{{ title }}</h1>
  
  <section>
    <input type="text" v-model="state.inputValue">
    <!-- todoItem组件 -->
    <div></div>
    <!-- todoItem end -->

    <div>
      <div>
        <span>{{ state.cont }} items left</span>
      </div>

      <div>
        <span>All</span>
        <span>Active</span>
        <span>Complete</span>
      </div>

      <div></div>
    </div>
  </section>
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