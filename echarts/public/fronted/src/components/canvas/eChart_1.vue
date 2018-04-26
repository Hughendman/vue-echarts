<template>
  <div>
    <h1>e-chart_1:南丁格尔图</h1>
    <div class="charts">
      <div class="myChart" :style="{width: '500px', height: '500px'}"></div>
      <div class="tip">
        <vue-markdown :ishljs = "true">{{msg}}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import {rose} from '../../assets/eCharts/rose';
    import rosemd from '../../assets/md/rose.md';
    export default {
      data(){
        return {
          msg:rosemd
        }
      },
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementsByClassName('myChart')[0]);
          // 绘制图表
          let option = rose();
          myChart.setOption(option);
        }
      },
      components: {
        VueMarkdown
      }
    }
</script>

<style scoped lang="less">
  .charts {
    padding: 20px;
    position: relative;
    .myChart {
      position: absolute;
      left: 0px;
    }
    .tip {
      position: absolute;
      right: 0px;
      width: 460px;
      height: 460px;
      overflow: auto;
      background-color: #ccc;
      padding: 20px;
    }
  }
</style>
