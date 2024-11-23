import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import './ActivityChart.css' ;

function ActivityChart({ data }) {
  const formattedData = data.map((steps, index) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index],
    steps,
  }));

  return (
    <div className="chart-container">
    <BarChart width={500} height={300} data={formattedData}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="steps" fill="#8884d8" />
    </BarChart>
    </div>
  );
}

export default ActivityChart;