import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 配置axios
import axios from 'axios';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b4590d46039fe6f1bc80f13/portal';
axios.defaults.headers.common['Authorization'] = 'testTOKEn';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 添加请求拦截器
axios.interceptors.response.use(function (res) {
  // 在发送请求之前做些什么
  console.log(res)

  // if (res.code == 401) {
  //   console.log(111)
  // }

  return res;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
Vue.prototype.axios = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
