import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'commits'],
  [0, 0,],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Commits',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class LineCharts extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Line Chart Example</h2>
        <Chart
          width={'700px'}
          height={'410px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default LineCharts