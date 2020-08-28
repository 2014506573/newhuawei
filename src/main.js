
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//ui组件
import Mint from 'mint-ui';
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css'

import router from '../src/assets/js/router.js'

// 全局的css
import '../src/assets/css/cssreset.css'

// import '../src/assets/css/common.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
