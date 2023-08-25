import React from 'react';
import 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

const RadarChart = (props) => {
  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
        stepSize: 20,
      },
    },
  };

  return (
    <div  style={{ width: '50%', height: 'auto' }}>
      <Radar data={props.data} options={options} />
    </div>
  );
};

export default RadarChart;
