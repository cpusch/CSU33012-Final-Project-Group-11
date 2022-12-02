import React, { Component, useState, useEffect } from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios'

function Table (){
  var highestCommits;
  var highestCommits2;
  var totalCommits;
  var totalCommits2;
  var average;
  var average2;
  const [dataHook, setInfo] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios('http://127.0.0.1:8000/commits');
            // console.log(res.data);
            setInfo(res.data);
        };

        getData();
    }, []);
    totalCommits = dataHook[0][1] + dataHook[1][1] + dataHook[2][1] + dataHook[3][1];
    average = totalCommits/4;
    /*
    function getHighestCommits (){
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
    highestCommits2 = getHighestCommits();*/
    
    
      
    
 const data = [
  ["Highest Commits", "Total Commits"],
  [totalCommits, average],
];

 const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  pageSize: 1,
};


  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default Table