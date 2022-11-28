import React, { Component } from 'react'
import Chart from 'react-google-charts'

export const LineData = [
  [
    { type: "string", id: "Date" },
    { type: "number", id: "Commits" },
  ],
  ["2022-08", 75],
  ["2022-09", 813],
  ["2022-10", 860],
  ["2022-11", 215],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Commits',
  },
  series: {
    0: {curveType: 'function', color: '#F9429E'},
  
  },
}
class LineCharts extends Component {

  constructor(props){
    super(props);
    this.state ={
        chartData:props.chartData
    }
}
  render() {
    return (
      <div className="container mt-5">
        <h4>Line Chart for Commits over a period of time</h4>
        <Chart
          width={'700px'}
          height={'410px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={this.state.chartData}
          //data={LineData}
          options={{}}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default LineCharts