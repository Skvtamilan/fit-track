const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 5000;
const dbFile = path.join(__dirname, 'fitness.db');
const db = new sqlite3.Database(dbFile);

// create tables if they don't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    weight REAL,
    height REAL,
    gender TEXT,
    goal TEXT,
    activityLevel TEXT,
    createdAt TEXT,
    updatedAt TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    weight REAL,
    bodyFat REAL,
    workouts TEXT,
    notes TEXT,
    createdAt TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT,
    subject TEXT,
    message TEXT,
    rating INTEGER,
    createdAt TEXT
  )`);
});

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.get('/api/profiles', (req, res) => {
  db.all('SELECT * FROM profiles ORDER BY id DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/profiles', (req, res) => {
  const { id, name, age, weight, height, gender, goal, activityLevel } = req.body;
  const now = new Date().toISOString();
  if (id) {
    db.run(
      `UPDATE profiles SET name=?, age=?, weight=?, height=?, gender=?, goal=?, activityLevel=?, updatedAt=? WHERE id=?`,
      [name, age, weight, height, gender, goal, activityLevel, now, id],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
      }
    );
  } else {
    db.run(
      `INSERT INTO profiles (name, age, weight, height, gender, goal, activityLevel, createdAt, updatedAt) VALUES (?,?,?,?,?,?,?,?,?)`,
      [name, age, weight, height, gender, goal, activityLevel, now, now],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true, id: this.lastID });
      }
    );
  }
});

app.get('/api/progress', (req, res) => {
  db.all('SELECT * FROM progress ORDER BY date DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/progress', (req, res) => {
  const { date, weight, bodyFat, workouts, notes } = req.body;
  const now = new Date().toISOString();
  db.run(
    `INSERT INTO progress (date, weight, bodyFat, workouts, notes, createdAt) VALUES (?,?,?,?,?,?)`,
    [date, weight, bodyFat, workouts, notes, now],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, id: this.lastID });
    }
  );
});

app.delete('/api/progress/:id', (req, res) => {
  db.run('DELETE FROM progress WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.get('/api/feedback', (req, res) => {
  db.all('SELECT * FROM feedback ORDER BY createdAt DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/feedback', (req, res) => {
  const { type, subject, message, rating } = req.body;
  const now = new Date().toISOString();
  db.run(
    `INSERT INTO feedback (type, subject, message, rating, createdAt) VALUES (?,?,?,?,?)`,
    [type, subject, message, rating, now],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, id: this.lastID });
    }
  );
});

app.delete('/api/feedback/:id', (req, res) => {
  db.run('DELETE FROM feedback WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.get('/api/programs/:program', (req, res) => {
  const programPath = path.join(__dirname, 'public', 'programs', `${req.params.program}.json`);
  if (fs.existsSync(programPath)) {
    const programData = JSON.parse(fs.readFileSync(programPath, 'utf8'));
    res.json(programData);
  } else {
    res.status(404).json({ error: 'Program not found' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`FitTrack Server running at http://localhost:${PORT}`);
});
