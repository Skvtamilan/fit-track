import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

export default function ProgramDetail() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProgram = useCallback(() => {
    if (!programId) return;
    setLoading(true);
    setError(null);
    api.get(`/programs/${programId}`)
      .then(res => setProgram(res.data))
      .catch(err => {
        console.error('Program fetch error:', err);
        if (err.response) {
          if (err.response.status === 404) setError('Program not found');
          else setError(`Server error: ${err.response.status} ${err.response.statusText || ''}`);
        } else if (err.request) {
          setError('No response from server. Is the API running?');
        } else {
          setError('Error: ' + err.message);
        }
      })
      .finally(() => setLoading(false));
  }, [programId]);

  useEffect(() => {
    fetchProgram();
  }, [fetchProgram]);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return (
    <div className="container">
      <p>{error}</p>
      <div style={{marginTop:12}}>
        <button className="btn" onClick={() => navigate(-1)}>Back</button>
        <button className="btn" style={{marginLeft:8}} onClick={fetchProgram}>Retry</button>
      </div>
    </div>
  );
  if (!program) return null;

  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>Back</button>
      <h2>{program.title}</h2>
      <p>{program.description}</p>
      <section>
        <h3>Overview</h3>
        <p>{program.overview}</p>
      </section>
      <section>
        <h3>Schedule</h3>
        {program.weekly_schedule.map(day => (
          <div key={day.day} className="card">
            <h4>{day.day} - {day.focus}</h4>
            <p>{day.duration}</p>
            <ul>
              {String(day.exercises).split(',').map((ex,i) => <li key={i}>{ex.trim()}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h3>Nutrition</h3>
        {program.nutrition.map((meal,i) => (
          <div key={i} className="card">
            <strong>{meal.time || meal.name || `Meal ${i+1}`}</strong>: {meal.content || (meal.items ? meal.items.join(', ') : '')}
          </div>
        ))}
      </section>
      <section>
        <h3>Macros</h3>
        <p>Protein: {program.macros?.protein || program.macros?.proteinRange || 'N/A'} | Carbs: {program.macros?.carbs || 'N/A'} | Fats: {program.macros?.fats || 'N/A'}</p>
      </section>
      <section>
        <h3>Tips</h3>
        <ul>
          {program.tips && program.tips.map((tip,i) => <li key={i}>{tip}</li>)}
        </ul>
      </section>
    </div>
  );
}