import Vue from 'vue'
import Router from 'vue-router'
import Customer from '@/components/Customer'
import product from '@/components/customer/product'
import appraise from '@/components/customer/appraise'
import merchant from '@/components/customer/merchant'
import productDetial from '@/components/productDetial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customer',
      component: Customer
    },
    {
      path: '/index',
      name: 'customer',
      component: Customer,
      children: [ 
    　　　{ 
    　　　　path: 'product', 
      　　　component: product
    　　  },
          { 
      　　　　path: 'appraise', 
        　　　component: appraise 
      　　 },
          { 
        　　　path: 'merchant', 
          　　component: merchant 
        　},
    　　]
    },
    {
      path:'/productDetial',
      name:productDetial,
      component:productDetial
    }
  ],
  mode: 'history'
})
