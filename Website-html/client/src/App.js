import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories';
import ProgramsList from './components/ProgramsList';
import ProgramDetail from './components/ProgramDetail';
import Profile from './components/Profile';
import Progress from './components/Progress';
import Feedback from './components/Feedback';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/programs/:category" element={<ProgramsList />} />
        <Route path="/programs/:category/:programId" element={<ProgramDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;