import React, { Component, useState } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'

// sample data
// export const data = [
//     [
//         { type: "string", id: "Issue Name" },
//         { type: "date", id: "Issue Made" },
//         { type: "date", id: "Issue Closed" },
//     ],
//     ["Create CI/CD Workflow", new Date(2022, 0, 13), new Date(2022, 0, 15)],
//     ["Fix bug with input", new Date(2022, 1, 4), new Date(2022, 1, 28)],
//     ["Push to production", new Date(2022, 2, 1), new Date(2022, 3, 7)],
// ];

function Timeline() {
    const [dataHook, setDataHook] = useState([]);
    const getData = async () => {
        await axios.get("http://127.0.0.1:8000/timeline")
            .then((response) => JSON.parse(response.data))
            .then((data) => {
                setDataHook(data)
            })
    }
    getData()
    console.log(dataHook)
    return (
        <div className="container mt-5">
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="Timeline"
                loader={<div>Loading Timeline</div>}
                data={dataHook[0]}
            />
        </div>
    )
}
export default Timeline