# FitTrack - Fitness Training Platform

A professional fitness tracking and training platform with multiple specialized workout programs.

## Features

- **6 Training Categories**: Muscle Building, Strength Training, Endurance, Yoga, Calisthenics, Powerlifting
- **4 Muscle Building Subcategories**: Bulking, Lean Bulking, Cutting, Fat Loss
- **User Profile Management**: Track personal stats, calculate BMI and daily calories
- **Progress Tracking**: Log workouts, weight, body fat %, and notes
- **Feedback System**: Submit and view feedback with ratings
- **Black Theme UI**: Modern, professional all-black interface
- **Local Storage**: All data stored in JSON format locally

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes bundled with Node.js)

### Installation

1. **Clone or download the project**
```bash
cd Website-html
```

2. **Install server dependencies**
```bash
npm install
```

3. **Install client dependencies**
```bash
cd client
npm install
cd ..
```

4. **Start the development servers**
- run backend only:
  ```bash
  npm run server
  ```
- run frontend only:
  ```bash
  npm run client
  ```
- run both concurrently (development):
  ```bash
  npm run devall
  ```

The API will be available at `http://localhost:5000/api` during development and the React app at `http://localhost:3000`. In production the combined server serves everything on the same port (default 5000).

### Building for Production

To compile the React application and serve it from Express:

```bash
cd client && npm run build && cd ..
npm start
```

This will generate a `client/build` folder and the server will serve the static files automatically.

## Project Structure

```
Website-html/
├── client/                  # React frontend
│   ├── public/              # React public files
│   ├── src/                 # React source code
│   │   ├── components/      # UI components
│   │   ├── data/            # program/category mappings
│   │   ├── api.js           # axios instance
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── index.js                 # Express server (uses sqlite)
├── package.json             # Server dependencies & scripts
├── fitness.db               # SQLite database (auto-created)
├── public/                  # static assets served by backend
│   └── programs/            # JSON files for programs (read-only)
└── README.md               # This file
```

## API Endpoints

### Profiles
- `GET /api/profiles` - Get all user profiles
- `POST /api/profiles` - Save/update user profile

### Progress
- `GET /api/progress` - Get all progress entries
- `POST /api/progress` - Create new progress entry
- `DELETE /api/progress/:id` - Delete progress entry

### Feedback
- `GET /api/feedback` - Get all feedback
- `POST /api/feedback` - Submit new feedback
- `DELETE /api/feedback/:id` - Delete feedback

### Programs
- `GET /api/programs/:program` - Get specific program details

## Data Storage

The server uses an embedded SQLite database (`fitness.db`) located in the project root. Three tables are created automatically when the server first runs:

- `profiles` &ndash; user profile information
- `progress` &ndash; workout/weight/body‑fat logs
- `feedback` &ndash; messages and ratings submitted by users

You can open `fitness.db` with any SQLite viewer (e.g. [DB Browser for SQLite](https://sqlitebrowser.org/)) to inspect the contents. The schema is managed by the Express server and does not need manual modification.


## Usage

1. **Fill Your Profile**: Navigate to "My Profile" and enter your personal information
2. **Choose a Program**: Go to "Training" and select your training category
3. **View Program Details**: Click on a specific program to see the full workout and nutrition plan
4. **Track Progress**: Log your workouts and physical metrics in "Progress"
5. **Send Feedback**: Use the "Feedback" section to provide suggestions and ratings

## Program Categories

### Muscle Building
- **Bulking**: High-calorie surplus for maximum muscle growth
- **Lean Bulking**: Controlled surplus with minimal fat gain
- **Cutting**: Caloric deficit while preserving muscle
- **Fat Loss**: Aggressive fat loss with cardio emphasis

### Strength Training
- Focus on big compound lifts
- Progressive overload methodology
- Periodized training approach

### Endurance Training
- Aerobic base building
- HIIT and interval training
- VO2 max development

### Yoga
- Multiple yoga styles (Hatha, Vinyasa, Yin)
- Flexibility and balance work
- Mindfulness and meditation

### Calisthenics
- Bodyweight exercises
- Progressive skill development
- Advanced movements (handstands, muscle-ups)

### Powerlifting
- Specialized big three training (Squat, Bench, Deadlift)
- Periodized approach to peak performance
- Competition-focused programming

## Color Scheme

- **Primary**: Black (#000)
- **Secondary**: Dark Gray (#1a1a1a)
- **Accent**: Red (#e74c3c)
- **Text**: White (#fff)
- **Border**: Dark Gray (#333)

## Troubleshooting

### Server won't start
- Make sure port 3000 is not in use
- Try: `npm start`
- If issues persist, use: `npm install` again

### Data not saving
- Check that `fitness.db` exists in the project root (it is created on first run)
- Ensure the app has write permissions for the directory

### Programs not loading
- Verify all JSON files exist in `public/programs/`
- Check browser console (F12) for errors

## Stopping the Server

Press `Ctrl+C` in the terminal to stop the server.

## Notes

- All data is stored locally on your machine
- No internet connection required after startup
- Data persists between sessions
- Each user should have their own browser profile for separate accounts

## Support

For issues or suggestions, use the Feedback section within the app.

---

Built with Node.js and Express | Black Theme UI | 2026
