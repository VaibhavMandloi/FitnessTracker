import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetricsCard from './components/MetricsCard';
import ActivityChart from './components/ActivityChart';
import ProgressChart from './components/ProgressChart';
import './App.css';

function App() {
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/users/123') // Replace with your user ID
  //     .then((response) => setUserData(response.data))
  //     .catch((err) => console.error(err));
  // }, []);
  const userData ={
    metrics:{
      steps:5000,
      water:3,
      calories:2300,
      heartRate:73
    },
    weeklyActivity:[200,254,435,234,453,342,312],
    monthlyProgress:80
  }
  

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Welcome Back, {userData.name} 🎉</h1>
      <div className="dashboard">
        <MetricsCard title="Steps" value={userData.metrics.steps} unit="steps" />
        <MetricsCard title="Water" value={userData.metrics.water} unit="Liters" />
        <MetricsCard title="Calories" value={userData.metrics.calories} unit="cal" />
        <MetricsCard title="Heart Rate" value={userData.metrics.heartRate} unit="Bpm" />
        <ActivityChart data={userData.weeklyActivity} />
        <ProgressChart progress={userData.monthlyProgress} />
      </div>
    </div>
  );
}

export default App;
