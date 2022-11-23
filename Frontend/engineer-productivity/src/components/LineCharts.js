import React, { Component } from 'react'
import Chart from 'react-google-charts'
export const LineData = [
  [
    { type: "string", id: "Date" },
    { type: "number", id: "Commits" },
  ],
  ["January", 0],
  ["February", 12],
  ["March", 6],
  ["April", 9],
  ["May", 5],
  ["June", 5],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Commits',
  },
  series: {
    0: { curveType: 'function', color: '#A020F0'  },
  
  },
}
class LineCharts extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h4>Line Chart for Commits over a period of time</h4>
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