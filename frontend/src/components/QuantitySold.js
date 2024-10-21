import React, { useState, useEffect } from 'react';
import SalesDataService from '../services/sales.service';
import LineItemsDataService from '../services/lineItems.service';

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

const QuantitySold = React.forwardRef((_props, ref) => {
  const [salesData, setSalesData] = useState([]);
  const [lineItemsData, setLineItemsData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    getSalesData();
    getLineItemsData();
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
  
  const getLineItemsData = () => {
    LineItemsDataService.getAll()
      .then(res => {
        setLineItemsData(res.data);
      })
      .catch(e => {
        setError("Failed to load line items data");
        console.log(e);
      });
  };

  // Improve time complexity of getting line items for a given SO
  const preprocessLineItems = () => {
    return lineItemsData.reduce((acc, item) => {
      if (!acc[item.salesOrderId]) {
        acc[item.salesOrderId] = 0;
      }
      acc[item.salesOrderId] += item.qty;
      return acc;
    }, {});
  };

  const lineItemsLookup = preprocessLineItems();

    
  const chartData = {
    labels: salesData.map(datum => datum.dateCreated.slice(0, 10)),
    datasets: [
      {
        label: 'Qty Sold',
        data: salesData.map(data => lineItemsLookup[data.salesOrderId] || 0),
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
        text: 'Items sold over time',
      },
    }
  };

  return (
    <div className="chart-container">
      {error ? (
        <p>{error}</p>
      ) : salesData.length > 0 && lineItemsData.length > 0 ? (
        <Bar ref={ref}  options={options} data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
});

export default QuantitySold;
