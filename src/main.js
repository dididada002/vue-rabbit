
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化的样式文件
import '@/styles/common.scss'

// 测试接口函数
// import { getCategory } from './apis/testAPI'

// getCategory().then(res => {
//     console.log(res)
// })

// 引入懒加载指令插件并且注册
import {lazyPlugin} from '@/directives/index'
const app = createApp(App)

app.use(createPinia())
app.use(router)
//使用自定义懒加载插件
app.use(lazyPlugin)
app.mount('#app')
