import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeTab, setActiveTab] = useState('programs');

  const features = [
    { icon: '💪', title: 'Tailored Programs', desc: 'Programs designed for every fitness level' },
    { icon: '📊', title: 'Track Progress', desc: 'Monitor your workouts and body metrics' },
    { icon: '🎯', title: 'Achieve Goals', desc: 'Follow proven plans to reach your targets' },
    { icon: '🥗', title: 'Nutrition Plans', desc: 'Get macro guidance for every program' }
  ];

  const programs = [
    { id: 'bulking', name: 'Bulking', category: 'muscle-building', emoji: '📈' },
    { id: 'cutting', name: 'Cutting', category: 'muscle-building', emoji: '📉' },
    { id: 'strength', name: 'Strength', category: 'strength-training', emoji: '🏋️' },
    { id: 'endurance', name: 'Endurance', category: 'endurance-training', emoji: '🏃' },
    { id: 'yoga', name: 'Yoga', category: 'yoga', emoji: '🧘' },
    { id: 'calisthenics', name: 'Calisthenics', category: 'calisthenics', emoji: '🤸' }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '9', label: 'Programs' },
    { number: '100%', label: 'Effectiveness' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Fitness Journey</h1>
          <p className="hero-subtitle">
            Access world-class training programs, nutrition guides, and progress tracking—all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/categories" className="btn btn-primary">
              Start Your Journey
            </Link>
            <Link to="/profile" className="btn btn-secondary">
              Set Your Goals
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section container">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container">
        <h2>Why Choose FitTrack?</h2>
        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="programs-section container">
        <h2>Popular Programs</h2>
        <div className="programs-grid">
          {programs.map(prog => (
            <Link
              key={prog.id}
              to={`/programs/${prog.category}/${prog.id}`}
              className="program-card"
            >
              <div className="program-icon">{prog.emoji}</div>
              <h3>{prog.name}</h3>
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works container">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Profile</h3>
            <p>Tell us about your fitness level and goals</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Choose Program</h3>
            <p>Pick from our curated selection of programs</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Follow Plan</h3>
            <p>Get detailed workouts and nutrition guidance</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Track Progress</h3>
            <p>Monitor metrics and celebrate victories</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform?</h2>
          <p>Join thousands of users achieving their fitness goals with FitTrack</p>
          <Link to="/categories" className="btn btn-large">
            Explore Programs Now
          </Link>
        </div>
      </section>
    </div>
  );
}