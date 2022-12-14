import React, { Component } from 'react';
import Chart from './LineCharts';
class API extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{}
        }
    }
    componentWillMount(){
        this.getchartData();
    }
    async getchartData(){
        //Ajax Calls here
        await fetch('http://127.0.0.1:8000/commits')
            .then(res=>res.json())
            .then((response) => console.log(response))
            .then(res=>this.setState({chartData:{apiResponse:res}}))
           // JSON.parse(res);
    }
    render(){
        return(
            <div className="Api">
                <div className="Api-header">
                    <h2>Dashboard</h2>
                </div>
                <Chart chartData={this.state.chartData}/>
            </div>
        );
    }
}
export default API;