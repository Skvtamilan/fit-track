import React, { useState, useEffect } from 'react';
import api from '../api';

export default function Progress() {
  const [entry, setEntry] = useState({ date: '', weight: '', bodyFat: '', workouts: '', notes: '' });
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/progress').then(res => setList(res.data));
  }, []);

  const handleChange = e => setEntry({ ...entry, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/progress', entry).then(res => {
      setList(prev => [res.data, ...prev]);
      setEntry({ date: '', weight: '', bodyFat: '', workouts: '', notes: '' });
    });
  };

  const handleDelete = id => {
    api.delete(`/progress/${id}`).then(() => {
      setList(prev => prev.filter(it => it.id !== id));
    });
  };

  return (
    <div className="container">
      <h2>Progress Tracking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={entry.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input type="number" name="weight" value={entry.weight} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Body Fat (%)</label>
          <input type="number" name="bodyFat" value={entry.bodyFat} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Workouts</label>
          <input name="workouts" value={entry.workouts} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea name="notes" value={entry.notes} onChange={handleChange} />
        </div>
        <button type="submit">Log Progress</button>
      </form>
      <div>
        {list.map(item => (
          <div key={item.id} className="card">
            <p><strong>{item.date}</strong> - {item.weight}kg / {item.bodyFat}%</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}