// 柱状图组件

// 1.功能代码放入组件
// 2.可变部分抽象成prop参数

import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

const BarChart = ({ title }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    // 1. 生成实例
    const myChart = echarts.init(chartRef.current)
    // 2. 准备图表参数
    const option = {
      title: {
        text: title
      },  
      xAxis: {
        type: 'category',
        data: ['Vue','React','Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [10,40,70],
          type: 'bar'
        }
      ]
    }
    // 3. 渲染参数
    option && myChart.setOption(option)
  }, [])
  return <div ref={chartRef} style={{ width: '400px', height: '300px' }}></div>
}

export { BarChart }