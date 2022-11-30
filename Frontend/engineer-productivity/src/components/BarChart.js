import React, { Component, useState } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'

const m = 0;
const  n = 2;
let dataArr = new Array(m); // create an empty array of length n
//let innerArray = new Array(0);
for (var i = 0; i < m; i++) {
  dataArr[i] = new Array(n); // make each element an array
}

/*axios.get("http://127.0.0.1:8000/commits")
  // .then(res=>res.json())
  .then(function (response) {
      console.log((response.data));
      let array = (response.data);
      console.log((array));
      dataArr.push(array[0]);
      dataArr.push(array[1]);
      dataArr.push(array[2]);
      dataArr.push(array[3]);
      // let dataArr = array;
      console.log(dataArr);
  })*/
  function BarChart() {
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
 const BarData  = [
  [
    { type: "string", id: "Date" },
    { type: "number", id: "Commits" },
  ],
  dataHook[0],
  dataHook[1],
  dataHook[2],
  dataHook[3],
 ];
/*export const BarData = [
  [
    { type: "string", id: "Date" },
    { type: "number", id: "Commits" },
  ],

  ["2022-08", 75],
  ["2022-09", 813],
  ["2022-10", 860],
  ["2022-11", 215],
]*/
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
/*
  constructor(props){
    super(props);
    this.state ={
        chartData:props.chartData
    }
}*/
  //render() {
    console.log(BarData);
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
  //}
}
export default BarChart