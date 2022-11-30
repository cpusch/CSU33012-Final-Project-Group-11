import React, { Component, useState } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'
// import { data } from './Timeline';
//let header = ["Commits", 0];
const m = 0;
const  n = 2;
let dataArr = new Array(m); // create an empty array of length n
//let innerArray = new Array(0);
for (var i = 0; i < m; i++) {
  dataArr[i] = new Array(n); // make each element an array
}

/*axios.get("http://127.0.0.1:8000/commits")
  .then(function (response) {
      console.log((response.data));
      let array = (response.data);
      console.log((array));
      dataArr.push(array[0]);
      dataArr.push(array[1]);
      dataArr.push(array[2]);
      dataArr.push(array[3]);
      console.log(dataArr);
  })*/

  function LineCharts() {
    const [dataHook, setDataHook] = useState([]);
    const getData = async () => {
        await axios.get("http://127.0.0.1:8000/commits")
            .then((response) => (response.data))
            .then((data) => {
                setDataHook(data)
            })
    }
    getData()
    console.log(dataHook)

  
const LineData  = [
  [
    { type: "string", id: "Date" },
    { type: "number", id: "Commits" },
  ],
  dataHook[0],
  dataHook[1],
  dataHook[2],
  dataHook[3],
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
/*class LineCharts extends Component {

  constructor(props){
    super(props);
    this.state ={
        chartData:props.chartData
    }
}*/
  //render() {
     //console.log(this.state.chartData);
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
   //}
}
export default LineCharts