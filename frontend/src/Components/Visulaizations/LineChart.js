

import { Paper } from '@mui/material';
import {  Line } from 'react-chartjs-2';


export default function LineVis(props){

    // const labels = ["Jan", "Feb", "Mar", "apr", "may", "jun", "jul"];
    let data = {
      labels: props.labels,
      datasets: props.raw_data
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
