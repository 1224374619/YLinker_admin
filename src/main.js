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

Vue.prototype.$http = axios //将axios挂载在Vue实例原型上

axios.defaults.baseURL = '/cmsapp/'
// axios.defaults.baseURL = '/api/'
// axios.defaults.headers.common['Authorization'] = 'f4c902c9ae5a2a9d8f84868ad064e706';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance= axios.create({
  baseURL: '/cmsapp/',
  headers:{'Content-Type':'application/x-www-form-urlencoded'},
  transformRequest:[ (data) => queryString.stringify(data)]
})
Vue.prototype.$_http=instance;

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
   
  const token = store.state.token
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

  