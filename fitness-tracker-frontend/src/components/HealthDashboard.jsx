import React from 'react';
import { Flame,Droplets, Footprints, Navigation } from 'lucide-react';

// Previous CircularProgress and ProgressBar components remain the same
const CircularProgress = ({ value, color, icon, label, metric, goal, total }) => {
  const percentage = (value / total) * 100;
  const circumference = 2 * Math.PI * 60;
  
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="60"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          <circle
            cx="64"
            cy="64"
            r="60"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percentage / 100)}
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {icon}
          <span className="text-3xl font-bold">{value}</span>
          <span className="text-xs text-gray-400">{metric}</span>
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-2 text-center">
        Goal: {goal} {metric}
      </div>
    </div>
  );
};

const ProgressBar = ({ value, label, color, percentage }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-2xl font-bold text-white">{value}</span>
          <div className="text-xs text-gray-400">{label}</div>
        </div>
        <span className="text-sm" style={{ color }}>{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
};

// New Profile Component
const ProfileCard = () => {
  const profileData = {
    name: "James Pattinson",
    age: 26,
    weight: "75 cm",
    height: "185 cm",
    chest: "40 cm",
    shoulder: "24 cm"
  };

  const ProfileStat = ({ label, value }) => (
    <div className="flex-1">
      <div className="text-white text-lg font-medium">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-xl text-white mb-6">Profile</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-lg overflow-hidden mb-3">
          <img 
            src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white text-lg font-medium">{profileData.name}</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <ProfileStat label="Age" value={profileData.age} />
        <ProfileStat label="Weight" value={profileData.weight} />
        <ProfileStat label="Height" value={profileData.height} />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <ProfileStat label="Chest" value={profileData.chest} />
        <ProfileStat label="Shoulder" value={profileData.shoulder} />
      </div>
    </div>
  );
};

// Combined Dashboard Component
const HealthDashboard = () => {
  const metrics = [
    {
      label: "WATER INTAKE",
      value: 2.4,
      metric: "litres",
      color: "#4dabf7",
      icon: <Droplets size={20} className="text-blue-500 mb-2" />,
      goal: 4,
      total: 4,
      percentage: (2.4/4)*100
    },
    {
      label: "CALORIES BURN",
      value: 360,
      metric: "kcal",
      color: "#ffd93d",
      icon: <Flame size={20} className="text-yellow-500 mb-2" />,
      goal: 500,
      total: 500,
      percentage: (360/500)*100
    },
    {
      label: "STEPS",
      value: 1200,
      metric: "steps",
      color: "#6ce675",
      icon: <Footprints size={20} className="text-green-500 mb-2" />,
      goal: 2000,
      total: 2000,
      percentage: (1200/2000)*100
    },
    {
      label: "DISTANCE",
      value: 3.8,
      metric: "km",
      color: "#ff6b6b",
      icon: <Navigation size={20} className="text-red-500 mb-2" />,
      goal: 4,
      total: 4,
      percentage: (3.8/4)*100
    }
  ];

  return (
    <div className="p-6 bg-gray-950 min-h-full">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Dashboard Content */}
        <div className="col-span-9">
          <h2 className="text-xl text-white mb-6">Dashboard Health Rate</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {metrics.map((metric) => (
              <CircularProgress
                key={metric.label}
                value={metric.value}
                color={metric.color}
                icon={metric.icon}
                label={metric.label}
                metric={metric.metric}
                goal={metric.goal}
                total={metric.total}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <ProgressBar
                key={metric.label}
                value={metric.value}
                label={metric.label}
                color={metric.color}
                percentage={metric.percentage}
              />
            ))}
          </div>
        </div>
        
        {/* Profile Section */}
        <div className="col-span-3">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;