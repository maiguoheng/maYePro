import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/test-route/',
      component: ()=>import('./components/HelloWorld'),
      children:[{
          path: 'abc3',
          component: ()=>import('./components/abc')
        
      }]
    },
    {
      path: '/abc',
      component: ()=>import('./components/HelloWorld')
    },
    {
      path: '/abc2',
      component: ()=>import('./components/HelloWorld2')
    }
  ]
})
