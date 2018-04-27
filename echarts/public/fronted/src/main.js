// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//引入全局css
import './assets/common.css';
import './assets/md.less'

//引入ECharts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//引入d3
import * as d3 from 'd3'

//引入 md
import VueMarkdown from 'vue-markdown'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
