import React, { useEffect, useState } from 'react'
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
    const [dataHook, setInfo] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios('http://127.0.0.1:8000/timeline');
            // console.log(res.data);
            setInfo(FormatData(JSON.parse(res.data)));
        };

        getData();
    }, []);
    // console.log(dataHook)
    return (
        <div className="container mt-5">
            <Chart
                width={'100%'}
                height={'400px'}

                chartType="Timeline"
                loader={<div>Loading Timeline</div>}
                data={dataHook}
            />
        </div>
    )
}
export default Timeline