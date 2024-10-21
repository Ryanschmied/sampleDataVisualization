import React from 'react';

const ChartFilter = ({ selectedChart, handleChartChange }) => {
  return (
    <div className="chart-filter">
      <label htmlFor="chart-select">Select Chart: </label>
      <select id="chart-select" value={selectedChart} onChange={handleChartChange}>
        <option value="webVisitors">Web Visitors</option>
        <option value="fulfillments">Fulfillments</option>
        <option value="salesRevenue">Sales Revenue</option>
        <option value="quantitySold">Quantity Sold</option>
        <option value="ordersPlaced">Orders Placed</option>
      </select>
    </div>
  );
};

export default ChartFilter;
