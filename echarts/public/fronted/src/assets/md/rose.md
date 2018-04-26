> ECharts 提供了丰富的自定义配置选项，并且能够从全局、系列、数据三个层级去设置数据图形的样式。
## 详解
> 饼状图因为不在直角坐标系上，所以也不需要xAxis，yAxis。
> 这里data属性值不像柱状图里那样每一项都是单个数值，而是一个包含 name 和 value 属性的对象，ECharts 中的数据项都是既可以只设成数值，也可以设成一个包含有名称、该数据图形的样式配置、标签配置的对象，具体见 data 文档。
### 阴影的配置
> ECharts 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等，这些样式一般都会在系列的 itemStyle 里设置。例如阴影的样式可以通过下面几个配置项设置：
```
itemStyle: {
    // 阴影的大小
    shadowBlur: 200,
    // 阴影水平方向上的偏移
    shadowOffsetX: 0,
    // 阴影垂直方向上的偏移
    shadowOffsetY: 0,
    // 阴影颜色
    shadowColor: 'rgba(0, 0, 0, 0.5)'
}

```
> itemStyle的emphasis是鼠标 hover 时候的高亮样式。这个示例里是正常的样式下加阴影，但是可能更多的时候是 hover 的时候通过阴影突出。
```
itemStyle: {
    emphasis: {
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
}
```
### 深色背景和浅色标签

> 背景色是全局的，所以直接在 option 下设置 backgroundColor

## 下面是左侧南丁格尔的配置
```
option = {
    backgroundColor: '#2c343c',
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data:[
          {value:235, name:'视频广告'},
          {value:274, name:'联盟广告'},
          {value:310, name:'邮件营销'},
          {value:335, name:'直接访问'},
          {value:400, name:'搜索引擎'}
        ],
        roseType: 'angle',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

```
