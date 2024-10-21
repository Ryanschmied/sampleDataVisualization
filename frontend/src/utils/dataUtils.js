export const aggregateDataByDate = (data, dateField) => {
    return data.reduce((acc, curr) => {
      const date = curr[dateField].slice(0, 10);  // Extracts only the date (YYYY-MM-DD)
      acc[date] = (acc[date] || 0) + 1;  // Increment count for that date
      return acc;
    }, {});
  };