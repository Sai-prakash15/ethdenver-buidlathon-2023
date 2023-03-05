

import { Paper } from '@mui/material';
import {  Line } from 'react-chartjs-2';


export default function LineVis(){
    
    const labels = ["Jan", "Feb", "Mar", "apr", "may", "jun", "jul"];
    let data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 90],
        backgroundColor: 'yellow',
        borderWidth: 1
      },
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40].reverse(),
        backgroundColor: "red",
        borderWidth: 1
      }]

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


