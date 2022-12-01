import React, { Component, useState } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'

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