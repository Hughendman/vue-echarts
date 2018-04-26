import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/Tab'
import Home from '@/components/home/Home'
import EChart_1 from '@/components/canvas/eChart_1'
import EChart_2 from '@/components/canvas/eChart_2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tab',
      component: Tab,
      children:[
        { path: '', redirect: { name: 'Home' } },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'canvas/echart_1',
          name: 'EChart_1',
          component: EChart_1
        },
        {
          path: 'canvas/echart_2',
          name: 'EChart_2',
          component: EChart_2
        }
      ]
    }
  ]
})
