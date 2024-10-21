import React, { useState, useRef } from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Fulfillments from './components/Fulfillments';
import OrdersPlaced from './components/OrdersPlaced';
import SalesRevenue from './components/SalesRevenue';
import QuantitySold from './components/QuantitySold';
import WebVisitors from './components/WebVisitors';
import ChartFilter from './components/ChartFilter';
import DownloadChart from './components/DownloadChart';

function App() {
  const [selectedChart, setSelectedChart] = useState('webVisitors');

  // Create refs for each chart
  const webVisitorsRef = useRef(null);
  const fulfillmentsRef = useRef(null);
  const ordersPlacedRef = useRef(null);
  const salesRevenueRef = useRef(null);
  const quantitySoldRef = useRef(null);

  // Handle chart change based on filter selection
  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  // Function to dynamically select the current chart ref
  const getCurrentChartRef = () => {
    switch (selectedChart) {
      case 'webVisitors':
        return webVisitorsRef;
      case 'fulfillments':
        return fulfillmentsRef;
      case 'ordersPlaced':
        return ordersPlacedRef;
      case 'salesRevenue':
        return salesRevenueRef;
      case 'quantitySold':
        return quantitySoldRef;
      default:
        return webVisitorsRef;
    }
  };

  // Render chart based on the selected filter
  const renderChart = () => {
    switch (selectedChart) {
      case 'webVisitors':
        return <WebVisitors ref={webVisitorsRef} />;
      case 'fulfillments':
        return <Fulfillments ref={fulfillmentsRef} />;
      case 'ordersPlaced':
        return <OrdersPlaced ref={ordersPlacedRef} />;
      case 'salesRevenue':
        return <SalesRevenue ref={salesRevenueRef} />;
      case 'quantitySold':
        return <QuantitySold ref={quantitySoldRef} />;
      default:
        return <WebVisitors ref={webVisitorsRef} />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Nanoleaf
        </a>
      </nav>
      <div>
        <ChartFilter selectedChart={selectedChart} handleChartChange={handleChartChange} />
        {renderChart()}
        <DownloadChart chartRef={getCurrentChartRef()} fileName={selectedChart} />
      </div>
    </div>
  );
}

export default App;
