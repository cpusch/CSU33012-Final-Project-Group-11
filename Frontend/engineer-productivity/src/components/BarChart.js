import React, { Component } from 'react'
import Chart from 'react-google-charts'
export const BarData = [
  [
    { type: "string", id: "Date" },
    { type: "number", id: "Commits" },
  ],

  ["2022-08", 75],
  ["2022-09", 813],
  ["2022-10", 860],
  ["2022-11", 215],
]
const BarChartOptions = {
  hAxis: {
    title: 'Commits',
  },
  vAxis: {
    title: 'Time',
  },
  series: {
    0: {color: '#66CDAA'},
  },
}
class BarChart extends Component {

  constructor(props){
    super(props);
    this.state ={
        chartData:props.chartData
    }
}
  render() {
    return (
      <div className="container mt-5">
        <Chart
          width={'700px'}
          height={'410px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          //data={this.state.chartData}
          data={BarData}
          options={BarChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default BarChart