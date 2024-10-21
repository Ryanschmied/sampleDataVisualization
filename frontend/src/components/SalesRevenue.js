import React, { useState, useEffect } from 'react';
import SalesDataService from '../services/sales.service';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesRevenue = React.forwardRef((_props, ref) => {
  const [salesData, setSalesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSalesData();
  }, []);

  const getSalesData = () => {
    SalesDataService.getAll()
      .then(res => {
        setSalesData(res.data);
      })
      .catch(e => {
        setError("Failed to load sales data.");
        console.log(e);
      });
  };

  const chartData = {
    labels: salesData ? salesData.map(datum => datum.dateCreated.slice(0,10)) : [],
    datasets: [
      {
        label: 'Sales Revenue',
        data: salesData ? salesData.map((datum => datum.total)) : [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Revenue over Time',
      },
    }
  };

  return (
    <div className="chart-container">
      {error ? (
        <p>{error}</p>
      ) : salesData.length > 0 ? (
        <Line ref={ref} options={options} data={chartData} />
      ) : (
        <p>No sales data available.</p>
      )}
    </div>
  );
});

export default SalesRevenue;
