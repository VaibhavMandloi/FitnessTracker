import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './ProgressChart.css';

function ProgressChart({ progress }) {
  const data = [{ name: 'Completed', value: progress }, { name: 'Remaining', value: 100 - progress }];
  const COLORS = ['#00C49F', '#FFBB28'];

  return (
    <div className="progress-container">
      <h3>Monthly Progress</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={[{ name: 'Completed', value: progress }, { name: 'Remaining', value: 100 - progress }]}
          dataKey="value"
          outerRadius={150}
          fill="#82ca9d"
        >
          <Cell fill="#00C49F" />
          <Cell fill="#FFBB28" />
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default ProgressChart;
