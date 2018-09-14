import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import category from '@/components/category'
import hot from '@/components/hot'
import shop from '@/components/shop'
import my from '@/components/my'
// 添加一个商品详情路由
import detail from '@/components/detail'
// 导入

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {keepalive: true},
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/hot',
      name: '/hot',
      component: hot
    },
    {
      path: '/shop',
      name: '/shop',
      component: shop
    },
    {
      path: '/my',
      name: '/my',
      component: my
    },
    {
      path: '/detail/:id',
      component: detail,
      name: 'detail'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
