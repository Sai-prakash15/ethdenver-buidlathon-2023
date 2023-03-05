

import { Paper } from '@mui/material';
import React from 'react';
import {  Line } from 'react-chartjs-2';
import { inferLineGraphLabels } from './Utils';


function getFormattedData(data){
  
}

export default function LineVis(props){

    // const labels = ["Jan", "Feb", "Mar", "apr", "may", "jun", "jul"];
    // const [labels, setLabels] = React.useState('');
    const labels = inferLineGraphLabels(props.raw_data)
    console.log(labels)
    const output = Object.keys(props.raw_data[0]).map(key => {
      return {
        label: key,
        data: props.raw_data.map(obj => obj[key])
      };
    });

    let data = {
      labels: labels,
      datasets: output
    };

    const config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart'
            }
          }
        },
      };

    return (
        <Paper variant="outlined" sx={{ height:"350px",alignItems: 'center', width:"700px", marginTop: "10px",
       p:"10px"}} >
        <Line data={data} options={config} />
        </Paper>
    )
}
