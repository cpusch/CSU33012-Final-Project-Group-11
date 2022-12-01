import React, { Component, useState } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'


function FormatData(apiData) {
    const data = [
        [
            { type: "string", id: "Issue Name" },
            { type: "date", id: "Issue Made" },
            { type: "date", id: "Issue Closed" },
        ]
    ];
    for (var i = 0; i < apiData.length; i++) {
        data.push([apiData[i].name, new Date(apiData[i].date_created), new Date(apiData[i].date_closed)])
    }
    return data
}

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
    // console.log(dataHook)
    return (
        <div className="container mt-5">
            <Chart
                width={'100%'}
                height={'400px'}

                chartType="Timeline"
                loader={<div>Loading Timeline</div>}
                data={FormatData(dataHook)}
            />
        </div>
    )
}
export default Timeline