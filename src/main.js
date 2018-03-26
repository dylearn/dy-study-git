// 入口文件
// 路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// mitui
import {Header, Button, Swipe, SwipeItem} from 'mint-ui';


Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueResourse from 'vue-resource'
Vue.use(VueResourse)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import router from './router'
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})

