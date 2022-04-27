/*
 * @Author: zxy
 * @Date: 2021-11-07 10:49:02
 * @LastEditTime: 2022-04-27 16:51:49
 * @FilePath: /todo-list-demo/src/config/index.js
 */

// 环境配置封装
const env = import.meta.env.MODE || 'production'

const EnvConfig = {
  dev: {
    baseAPI: '',
    mockAPI: ''
  },
  test: {
    baseAPI: '',
    mockAPI: ''
  },
  production: {
    baseAPI: ``,
    mockAPI: ''
  }
}

export default {
  env,
  mock: true,
  namespace: 'todoList',
  ...EnvConfig[env]
}