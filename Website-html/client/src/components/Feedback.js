import React, { useState, useEffect } from 'react';
import api from '../api';

export default function Feedback() {
  const [entry, setEntry] = useState({ type: '', subject: '', message: '', rating: 0 });
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/feedback').then(res => setList(res.data));
  }, []);

  const handleChange = e => setEntry({ ...entry, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/feedback', entry).then(res => {
      setList(prev => [res.data, ...prev]);
      setEntry({ type: '', subject: '', message: '', rating: 0 });
    });
  };

  const handleDelete = id => {
    api.delete(`/feedback/${id}`).then(() => {
      setList(prev => prev.filter(it => it.id !== id));
    });
  };

  return (
    <div className="container">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type</label>
          <select name="type" value={entry.type} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
            <option value="praise">Praise</option>
          </select>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input name="subject" value={entry.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={entry.message} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input type="number" name="rating" min="1" max="5" value={entry.rating} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      <div>
        {list.map(item => (
          <div key={item.id} className="card">
            <p><strong>{item.subject}</strong> ({item.type}) - {item.rating} ⭐</p>
            <p>{item.message}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}