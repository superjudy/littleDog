import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/Hello'
import Customer from '@/components/Customer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customer',
      component: Customer
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
