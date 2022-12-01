import React, { Component, useState } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'

function PullRequest() {
  const [dataHook, setDataHook] = useState([]);
  const getData = async () => {
      await axios.get("http://127.0.0.1:8000/pulls")
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
    { type: "number", id: "Pulls" },
  ],
  dataHook[0],
  dataHook[1],
  dataHook[2],
  dataHook[3],
  dataHook[4],
]
const BarChartOptions = {
  hAxis: {
    title: 'Commits',
  },
  vAxis: {
    title: 'Time',
  },
  series: {
    0: {color: '#9d66cd'},
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

export default PullRequest