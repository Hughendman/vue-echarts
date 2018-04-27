import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/Tab'
import Home from '@/components/home/Home'
import EChart_1 from '@/components/canvas/eChart_1'
import EChart_2 from '@/components/canvas/eChart_2'
import D3_1 from '@/components/d3/d3_1'
import D3_2 from '@/components/d3/d3_2'


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
        },
        {
          path: 'd3/d3_1',
          name: 'D3_1',
          component: D3_1
        },
        {
          path: 'd3/d3_2',
          name: 'D3_2',
          component: D3_2
        }
      ]
    }
  ]
})
