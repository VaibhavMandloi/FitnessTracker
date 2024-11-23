import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const WeeklyReport = () => {
  const weeklyData = [
    {
      day: 'Monday',
      achieved: 85
    },
    {
      day: 'Tuesday',
      achieved: 92
    },
    {
      day: 'Wednesday',
      achieved: 78
    },
    {
      day: 'Thursday',
      achieved: 95
    },
    {
      day: 'Friday',
      achieved: 88
    },
    {
      day: 'Saturday',
      achieved: 72
    },
    {
      day: 'Sunday',
      achieved: 82
    }
  ];

  const getBarColor = (value) => {
    if (value >= 90) return '#6CE675';
    if (value >= 80) return '#4DABF7';
    if (value >= 70) return '#FFD93D';
    return '#FF6B6B';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
          <p className="text-white font-medium">{label}</p>
          <p className="text-blue-400">
            {`Achievement: ${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-white">Weekly Achievement Report</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Average:</span>
          <span className="text-lg text-white font-medium">
            {Math.round(weeklyData.reduce((acc, curr) => acc + curr.achieved, 0) / weeklyData.length)}%
          </span>
        </div>
      </div>
      
      <div className="h-80 w-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={weeklyData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false}
              stroke="#374151"
            />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#374151' }}
            />
            <YAxis 
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#374151' }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="achieved"
              radius={[4, 4, 0, 0]}
            >
              {weeklyData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={getBarColor(entry.achieved)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center space-x-6 mt-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
          <span className="text-sm text-gray-400">Excellent (≥90%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-sm text-gray-400">Good (≥80%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
          <span className="text-sm text-gray-400">Fair (≥70%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
          <span className="text-sm text-gray-400">Needs Improvement (70%)</span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReport;