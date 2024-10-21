import React, { useState, useEffect } from 'react';
import MarketingDataService from '../services/marketing.service';

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

const WebVisitors = React.forwardRef((_props, ref) => {
  const [marketingData, setMarketingData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMarketingData();
  }, []);

  const getMarketingData = () => {
    MarketingDataService.getAll()
      .then(res => {
        setMarketingData(res.data);
      })
      .catch(e => {
        setError("Failed to load marketing data.");
        console.log(e);
      });
  };

  const chartData = {
    labels: marketingData.map(datum => datum.weekNum),
    datasets: [
      {
        label: 'Web Visitors',
        data: marketingData.map(datum => datum.webVisitors),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Web Visitors over Time',
      },
    }
  };

  return (
    <div className="chart-container">
      {error ? (
        <p>{error}</p>
      ) : marketingData.length > 0 ? (
        <Line ref={ref} options={options} data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
});

export default WebVisitors;
