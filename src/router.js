import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      component: ()=>import('./pages/login')
    },
    {
      path: '/test-route',
      component: ()=>import('./components/HelloWorld'),
      children:[{
          path: 'abc3',
          component: ()=>import('./components/abc')
        
      }]
    }
    
  ]
})
