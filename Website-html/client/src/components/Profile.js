import React, { useState, useEffect } from 'react';
import api from '../api';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: '', age: '', weight: '', height: '', gender: '', goal: '', activityLevel: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/profiles').then(res => {
      if (res.data.length) setProfile(res.data[0]);
    });
  }, []);

  const handleChange = e => setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/profiles', profile).then(() => {
      setMessage('Profile saved');
    });
  };

  return (
    <div className="container">
      <h2>My Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={profile.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={profile.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input type="number" name="weight" value={profile.weight} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Height (cm)</label>
          <input type="number" name="height" value={profile.height} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={profile.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Goal</label>
          <select name="goal" value={profile.goal} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="muscle">Muscle Building</option>
            <option value="fat_loss">Fat Loss</option>
            <option value="endurance">Endurance</option>
          </select>
        </div>
        <div className="form-group">
          <label>Activity Level</label>
          <select name="activityLevel" value={profile.activityLevel} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="sedentary">Sedentary</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </select>
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}