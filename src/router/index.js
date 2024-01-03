// createRouter: 创建router实例
//createWebHistory: 创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import Stu1 from '@/views/Stu/stu1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        }, {
          path: 'category',
          component: Category
        }
      ]
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/stu',
      component: Stu1
    }
  ]
})

export default router
