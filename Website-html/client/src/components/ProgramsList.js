import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryPrograms } from '../data/programs';

export default function ProgramsList() {
  const { category } = useParams();
  const programs = categoryPrograms[category] || [];

  return (
    <div className="container">
      <h2>{category.replace(/-/g, ' ').toUpperCase()}</h2>
      <div className="grid">
        {programs.map(p => (
          <div key={p.id} className="card">
            <Link to={`/programs/${category}/${p.id}`}>{p.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}