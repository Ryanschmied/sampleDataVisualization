import React, { useState, useEffect } from 'react';
import SalesDataService from '../services/sales.service';
import { aggregateDataByDate } from '../utils/dataUtils';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OrdersPlaced = React.forwardRef((_props, ref) => {
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
        setError("Failed to load sales data");
        console.log(e);
      });
  };

  const aggregatedData = aggregateDataByDate(salesData, 'dateCreated');

  const chartData = {
    labels: Object.keys(aggregatedData),
    datasets: [
      {
        label: '# of Orders Placed',
        data: Object.values(aggregatedData),
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
        text: '# Placed Orders over Time',
      },
    }
  };

  return (
    <div className="chart-container">
      {error ? (
        <p>{error}</p>
      ) : salesData.length > 0 ? (
        <Bar ref={ref} options={options} data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
});

export default OrdersPlaced;
