import React, { Component } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'

//example to get data from api.When opening react app in browser
//prints the hello world from the '/' webpage of the api running 
//on the following ip
axios.get("http://127.0.0.1:8000/")
    .then(function (response) {
        console.log(typeof (response.data));
    });

// sample data
export const data = [
    [
        { type: "string", id: "Issue Name" },
        { type: "date", id: "Issue Made" },
        { type: "date", id: "Issue Closed" },
    ],
    ["Create CI/CD Workflow", new Date(2022, 0, 13), new Date(2022, 0, 15)],
    ["Fix bug with input", new Date(2022, 1, 4), new Date(2022, 1, 28)],
    ["Push to production", new Date(2022, 2, 1), new Date(2022, 3, 7)],
];



class Timeline extends Component {
    render() {
        return (
            <div className="container mt-5">
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="Timeline"
                    loader={<div>Loading Timeline</div>}
                    data={data}
                />
            </div>
        )
    }
}
export default Timeline