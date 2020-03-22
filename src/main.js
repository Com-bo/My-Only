import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//引入rem.js
import rem from "./rem/rem.js" 

//引入mint-ui框架
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)

//axios全局配置
import axios from "axios"
axios.defaults.baseURL = '/api';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http=axios;


new Vue({
  router,
  store,
  rem,
  render: h => h(App)
}).$mount('#app')
