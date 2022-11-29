import React, { Component } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'
const m = 0;
const  n = 0;
let arr = new Array(m); // create an empty array of length n
//let innerArray = new Array(0);
for (var i = 0; i < m; i++) {
  arr[i] = new Array(n); // make each element an array
}


  axios.get("http://127.0.0.1:8000/commits")
    .then(function (response) {
        console.log((response.data));
        arr = (response.data);
    })

export const LineData  = [
  [
    { type: "string", id: "Date" },
    { type: "number", id: "Commits" },
  ],
  arr[0],
  arr[1],
  arr[2],
  arr[3],
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
          //data={this.state.chartData}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default LineCharts