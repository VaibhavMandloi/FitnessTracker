import React from 'react';
import './MetricsCard.css' ;

function MetricsCard({ title, value, unit }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value} {unit}</p>
    </div>
  );
}

export default MetricsCard;