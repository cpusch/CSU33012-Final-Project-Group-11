//import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LineCharts from './components/LineCharts';
import BarChart from './components/BarChart';
import Timeline from './components/Timeline';
import Dropdown from './components/Dropdown';


function App() {
  const options = [
    {value: "Monthly", label: "Monthly"},
    {value: "Yearly", label: "Yearly"},
    //<Dropdown placeHolder="Select..." options={options}/>
];
  return (
    <div className="App">
    
     <LineCharts />
     <BarChart/>
     <Timeline/>
    </div>
  );
}

export default App;
