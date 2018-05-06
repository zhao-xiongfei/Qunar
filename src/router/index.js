import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DujiaIndex from '@/components/dujia/index'
import DujiaList from '@/components/dujia/DujiaList'
import ListDetails from '@/components/dujia/ListDetails'
import Sc from '@/components/Sc'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Sc',
      name: 'Sc',
      component: Sc
    },
    {
      path: '/DujiaIndex',
      name: 'DujiaIndex',
      component: DujiaIndex
    },
    {
      path: '/DujiaList',
      name: 'DujiaList',
      component: DujiaList
    },
    {
      path: '/ListDetails',
      name: 'ListDetails',
      component: ListDetails
    },

  
  ]
})
