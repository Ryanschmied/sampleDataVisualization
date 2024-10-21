import React from 'react';

const DownloadChart = ({ chartRef, fileName = 'chart' }) => {
  const downloadChartAsImage = () => {
    if (!chartRef.current) return;

    const chart = chartRef.current;
    const link = document.createElement('a');
    link.href = chart.toBase64Image();
    link.download = `${fileName}.jpg`;
    link.click();
  };

  return (
    <button onClick={downloadChartAsImage}>Download as JPG</button>
  );
};

export default DownloadChart;
