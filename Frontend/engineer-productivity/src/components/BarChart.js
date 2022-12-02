import React, { Component, useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'

function BarChart() {
  const [dataHook, setInfo] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios('http://127.0.0.1:8000/commits');
            // console.log(res.data);
            setInfo(res.data);
        };

        getData();
    }, []);
    const BarData = [
        [
            { type: "string", id: "Date" },
            { type: "number", id: "Commits" },
        ],
        dataHook[0],
        dataHook[1],
        dataHook[2],
        dataHook[3],
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


  
    return (
      <div className="container mt-5">
          <h4>Bar Chart</h4>
        <Chart
          width={'700px'}
          height={'410px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          //data={this.state.chartData}
          data={BarData}
          options={BarChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }

export default BarChart