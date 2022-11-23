import React, { Component } from 'react'
import Chart from 'react-google-charts'
export const LineData = [
  [
    { type: "date", id: "Date" },
    { type: "number", id: "Commits" },
  ],
  [new Date(2022, 0, 13), 0],
  [new Date(2022, 1, 17), 12],
  [new Date(2022, 2, 22), 6],
  [new Date(2022, 3, 29), 9],
  [new Date(2022, 4, 1), 5],
  [new Date(2022, 4, 3), 5],
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