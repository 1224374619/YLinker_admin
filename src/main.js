     // import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import axios from "axios";
import App from './App'
import queryString from 'querystring'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Cookies from 'js-cookie'
import Vuex from 'vuex'
import Moment from 'moment'
import {CodeToTag} from './cookie';
// import './utils/http'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
// import Mock from './mock'
// Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$CodeToTag = {
  CodeToTag
}
Vue.config.productionTip = false

let config = {
  //判断当前开发环境，切换代理配置
  // baseURL: process.env.NODE_ENV === 'production' ? '/api/v1/' : '/api/',
  baseURL: '/api/v1/',
  // headers: {
  //     'Auth-Token': token
  // },
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);
// 添加request拦截器 
_axios.interceptors.request.use(
  function (config) {
      let token = Cookies.get('token')
      if (token) {
          config.headers['Auth-Token'] = token;
      }else {
        router.push({
          path: "/login"
        });
      }
      return config
  },
  function (error) {
      Promise.reject(error)
  })

// /api/v1/consumer-user
const instance = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? '/api/v1/consumer-user' : '/api/',
  baseURL: '/api/v1/',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [(data) => queryString.stringify(data)]
})
Vue.prototype.$_http = instance;
const local = axios.create({
  baseURL: '/api/v1/',
  // headers:{'Auth-Token':store.state.token === ''?'':store.state.token},
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
})
Vue.prototype.$local = local;
_axios.interceptors.response.use(response => {
  return response;
}, error => {
  // logger and notification;
  // Notification.error({
  //     title: '错误',
  //     message: error.message
  // });
  return Promise.reject(error);
});
Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
      http: {
          get() {
              return _axios;
          }
      },
      $http: {
          get() {
              return _axios;
          }
      },
  });
};
Vue.use(Plugin)

// 定义全局时间戳过滤器
Vue.filter('formatDate', function(value) {
  var timestamp = (new Date()).getTime()-24*60*60*1000
  var timestampOne = (new Date()).getTime()-48*60*60*1000
  if(value > timestamp) {
    return Moment(value).format('今天'+'HH:mm');
  }
  else if(value > timestampOne && value < timestamp) {
    return Moment(value).format('昨天'+'HH:mm');
  }
  else{
    return Moment(value).format('YYYY-MM-DD');
  }
});
//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
   
  const token = Cookies.get('token')
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      // Message({
      //     message: '请先登录！',
      //     type: 'error',
      //     duration: 1 * 1000
      // })
      setTimeout(()=>next({
          path: '/login'
          // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        }),1000)
      
    }
  } else {
    next()
  }
})
//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

  