import React, { Component, useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'
import { data } from './Timeline';
import { Box } from '@mui/material';

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
  var average = 553.75;
  var totalCommits = 2215;
  var highestCommits = 991;
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
/*function getHighestCommits (){
  var number1 = dataHook[0][1];
  var number2 = dataHook[1][1];
  var number3 = dataHook[2][1];
  var number4 = dataHook[3][1];
  if (number1 > number2 && number1 > number3 && number1 > number4){
    highestCommits = number1;
  }
  else if (number2 > number1 && number2 > number3 && number2 > number4){
    highestCommits = number2;
  }
  else if (number3 > number1 && number3 > number2 && number3 > number4){
    highestCommits = dataHook[2][1];
  }
  else if (number4 > number1 && number4 > number2 && number4 > number3){
    highestCommits = number4;
  }
  return highestCommits;
}
highestCommits2 = getHighestCommits();

function getTotalCommits (){
  totalCommits = dataHook[0][1] + dataHook[1][1] + dataHook[2][1] + dataHook[3][1];
  return totalCommits;
}
var totalCommits2 = getTotalCommits();
function getAverage(){
  average = totalCommits/4;
  return average;
}
var average2 = getAverage();*/
//functions preventing the page from loading
//hard coded in the insights as the functions were causing issues with the entire page loading


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
        <h4>Chart Insights</h4>
        <Box
        color="black" 
        width={'700px'}
        height={'100px'}
        bgcolor="palevioletred" p={1}>
          <b>Highest Number of Commits: </b>{highestCommits}
          <br></br>
          <b>Total commits: </b> {totalCommits}
          <br></br>
          <b>Average Commits: </b>{average}
        </Box>
      </div>
    )
  }

export default LineCharts