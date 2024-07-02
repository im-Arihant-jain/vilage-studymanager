// PerformanceGraph.jsx
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const PerformanceGraph = ({ monthlyData, quarterlyData }) => {
  const [view, setView] = useState('monthly');

  const chartData = {
    labels: view === 'monthly'
      ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      : ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Performance',
        data: view === 'monthly' ? monthlyData : quarterlyData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Student Performance',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: view === 'monthly' ? 'Month' : 'Quarter',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Performance Score',
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div>
      <div>
        <button onClick={() => setView('monthly')} className="chart-button">Monthly</button>
        <button onClick={() => setView('quarterly')} className="chart-button">Quarterly</button>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PerformanceGraph;
