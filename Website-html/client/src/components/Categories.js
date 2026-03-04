import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'muscle-building', name: 'Muscle Building' },
  { id: 'strength-training', name: 'Strength Training' },
  { id: 'endurance-training', name: 'Endurance Training' },
  { id: 'yoga', name: 'Yoga' },
  { id: 'calisthenics', name: 'Calisthenics' },
  { id: 'powerlifting', name: 'Powerlifting' }
];

export default function Categories() {
  return (
    <div className="container">
      <h2>Training Categories</h2>
      <div className="grid">
        {categories.map(cat => (
          <div key={cat.id} className="card">
            <Link to={`/programs/${cat.id}`}>{cat.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}