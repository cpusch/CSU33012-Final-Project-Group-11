import React, { Component, useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'
import { data } from './Timeline';

/*const m = 4;
const  n = 2;
let arr = new Array(m); // create an empty array of length n
//let innerArray = new Array(0);
for (var i = 0; i < m; i++) {
  arr[i] = new Array(n); // make each element an array
}*/


  /*axios.get("http://127.0.0.1:8000/commits")
    .then(function (response) {
        console.log((response.data));
        arr = (response.data);
    })*/
function LineCharts() {
  const [dataHook, setInfo] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios('http://127.0.0.1:8000/commits');
            // console.log(res.data);
            setInfo(res.data);
        };

        getData();
    }, []);
    const LineData = [
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

    return (
      <div className="container mt-5">
        <h4>Line Chart</h4>
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

export default LineCharts