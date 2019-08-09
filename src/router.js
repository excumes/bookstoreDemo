import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
import cart from './components/cart.vue'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: home
//     },
//     {
//       path:'/cart',
//       name: 'cart',
//       component: cart
//     }
//   ]
// })
const router =  new Router({
  routes: [
    {
      path: '/',
      redirect :'/home'
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/cart',
      name: 'cart',
      component: cart
    }
  ]
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});
export default router;