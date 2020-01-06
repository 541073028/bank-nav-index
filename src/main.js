import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WebConfig from './web.config'
import './plugins/axios'
//引入重置样式
import '@/assets/css/reset.css'
//引入vant相关
//引入移动端适配
import '@/assets/js/flexible.js'
//toast轻提示
import 'vant/lib/toast/style';
// import qs from 'qs'
//
// Vue.prototype.$qs = qs;

/**
 * web配置文件
 */
Vue.webConfig = WebConfig;
Vue.prototype.$webConfig = WebConfig;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
