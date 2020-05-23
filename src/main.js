import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false
var a={
  install:function(){
    console.error('hello');
  }
}
Vue.use(a)
Vue.use(a)


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