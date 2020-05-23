import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import gbdata from './gbdata'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$gbdata = gbdata

//todo 路由导航,判断权限
router.beforeEach((to, from, next) => {

  next()
})

router.afterEach((to, from) => {
  try {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    // eslint-disable-next-line
  } catch (err) {
    window.scrollTo(0, 0)
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



// var Profile = Vue.extend({
//   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
// // 创建 Profile 实例，并挂载到一个元素上。
// new Profile().$mount('#mount-point')