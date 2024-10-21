import React, { useState, useEffect } from 'react';
import FulfillmentsDataService from '../services/fulfillments.service';
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

const Fulfillments = React.forwardRef((_props, ref) => {
  const [fulfillmentsData, setFulfillmentsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFulfillmentsData();
  }, []);

  const getFulfillmentsData = () => {
    FulfillmentsDataService.getAll()
     .then(res => {
      setFulfillmentsData(res.data);
     })
     .catch(e => {
      setError("Failed to load fulfillment data");
      console.log(e)
     })
  }

  const aggregatedData = aggregateDataByDate(fulfillmentsData,  'deliveryDate');
  
  const chartData = {
    labels: Object.keys(aggregatedData),
    datasets: [
      {
        label: '# of Fulfillments',
        data: Object.values(aggregatedData),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
        text: '# Fulfillments over Time',
      },
    }
  };

  return (
    <div className="chart-container">
    {error ? (
      <p>{error}</p>
    ) : fulfillmentsData.length > 0 ? (
      <Bar ref={ref} options={options} data={chartData} />
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
});

export default Fulfillments;
