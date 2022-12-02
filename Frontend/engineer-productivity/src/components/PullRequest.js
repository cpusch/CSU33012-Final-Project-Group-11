import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'
import { Box } from '@mui/material';

function PullRequest() {
  var average = 232.2;
  var totalPulls = 1161;
  var highestPulls = 548;
    const [dataHook, setInfo] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios('http://127.0.0.1:8000/pulls');
            // console.log(res.data);
            setInfo(res.data);
        };

        getData();
    }, []);
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
            0: { color: '#9d66cd' },
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
            <h4>Chart Insights</h4>
        <Box
        color="black" 
        width={'700px'}
        height={'100px'}
        bgcolor="#66cdcd" p={1}>
          <b>Highest Number of pull requests: </b>{highestPulls}
          <br></br>
          <b>Total Pull Requests: </b> {totalPulls}
          <br></br>
          <b>Average Pull Requests: </b>{average}
        </Box>
        </div>
    )
}

export default PullRequest