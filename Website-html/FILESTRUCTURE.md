# FitTrack - Complete File Structure

## Complete Setup Created ✅

Your FitTrack fitness platform is now fully set up and ready to run on localhost!

---

## 📁 Files Created

### Root Directory
```
Website-html/
├── client/                  # React frontend application
│   ├── public/              # React public assets
│   ├── src/                 # React source code (components, css, api)
│   └── package.json         # React dependencies & scripts
├── index.js                 # Express server (uses sqlite database)
├── package.json             # Server dependencies & scripts (concurrently, sqlite3)
├── fitness.db               # SQLite database (auto-created)
├── public/                  # Static backend assets (program JSON files)
├── README.md                # Full documentation
├── QUICKSTART.md            # Quick setup guide
├── FILESTRUCTURE.md         # This file
└── .gitignore               # Git ignore rules
```

### Public Directory
```
public/
├── index.html              # Main HTML (single-page app)
├── css/
│   └── style.css          # Black theme styling (2000+ lines)
├── js/
│   └── app.js             # Frontend app logic (500+ lines)
└── programs/
    ├── bulking.json            # Bulking program details
    ├── lean-bulking.json       # Lean bulking program
    ├── cutting.json            # Cutting program
    ├── fat-loss.json           # Fat loss program
    ├── strength.json           # Strength training program
    ├── endurance.json          # Endurance program
    ├── yoga.json              # Yoga program
    ├── calisthenics.json      # Calisthenics program
    └── powerlifting.json      # Powerlifting program
```

---

## 🎯 Key Features by File

### Backend (index.js)
- Express server on port 5000 (or `PORT` env var)
- REST API endpoints for profiles, progress, feedback, programs
- SQLite database (`fitness.db`) instead of JSON file
- Automatically creates tables for profiles/progress/feedback
- CORS and body-parser middleware
- Serves React build in production


### Frontend HTML (public/index.html)
- 9 pages with routing system
- Profile management form
- Progress tracking interface
- Feedback submission form
- Program display system
- Responsive layout

### Styling (public/css/style.css)
- Complete black theme
- Red accent color
- Professional UI
- Mobile responsive
- Form styling
- Card layouts
- Progress bars

### Application Logic (public/js/app.js)
- Page navigation
- API communication with backend
- Profile calculation (BMI, calories, protein)
- Progress tracking management
- Feedback system
- Program loading and display

### Program Data (9 JSON files)
Each program includes:
- Complete 7-day weekly schedule
- Sample nutrition plans
- Macronutrient targets
- Expert tips and advice
- Program overview and goals
- Duration and difficulty level

---

## 🚀 How to Run

1. **Install dependencies**
```powershell
cd Website-html
npm install      # server
cd client && npm install && cd ..  # frontend
```

2. **Start development**
```powershell
npm run devall    # runs both server and client concurrently
```

3. **Open your browser**
```
http://localhost:3000
```

(Production build: `cd client && npm run build && cd .. && npm start`)


---

## 📊 API Endpoints

### Profiles
- `GET /api/profiles` - Retrieve user profiles
- `POST /api/profiles` - Save/update profile

### Progress
- `GET /api/progress` - Get all progress entries
- `POST /api/progress` - Log new progress
- `DELETE /api/progress/:id` - Remove entry

### Feedback
- `GET /api/feedback` - Get all feedback
- `POST /api/feedback` - Submit feedback
- `DELETE /api/feedback/:id` - Delete feedback

### Programs
- `GET /api/programs/:program` - Get program details

---

## 💾 Data Structure

The application now uses a SQLite database (`fitness.db`). Tables are created automatically when the server starts;
below is a simplified schema overview.

```sql
CREATE TABLE profiles (
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
);

CREATE TABLE progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT,
  weight REAL,
  bodyFat REAL,
  workouts TEXT,
  notes TEXT,
  createdAt TEXT
);

CREATE TABLE feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT,
  subject TEXT,
  message TEXT,
  rating INTEGER,
  createdAt TEXT
);
```  ],
  "progress": [
    {
      "id": timestamp,
      "date": "2026-02-25",
      "weight": 74.5,
      "bodyFat": 15,
      "workoutsCompleted": 5,
      "notes": "Good week",
      "createdAt": ISO timestamp
    }
  ],
  "feedback": [
    {
      "id": timestamp,
      "type": "Suggestion",
      "subject": "Add more programs",
      "text": "Great app!",
      "rating": "5",
      "createdAt": ISO timestamp
    }
  ]
}
```

---

## 🎨 Color Scheme

- **Primary**: #000000 (Black)
- **Secondary**: #1a1a1a (Dark Gray)
- **Tertiary**: #2a2a2a (Lighter Gray)
- **Accent**: #e74c3c (Red)
- **Text**: #ffffff (White)
- **Text Light**: #cccccc (Light Gray)
- **Border**: #333333 (Dark Gray)

---

## 📱 Pages & Functionality

1. **Home** - Overview with featured programs
2. **Training** - Category selection
3. **Muscle Building** - 4 sub-programs (Bulking, Lean Bulking, Cutting, Fat Loss)
4. **Strength Training** - Full strength program
5. **Endurance Training** - Cardio program
6. **Yoga** - Flexibility program
7. **Calisthenics** - Bodyweight program
8. **Powerlifting** - Big three training
9. **My Profile** - User details and calculations
10. **Progress** - Workout tracking
11. **Feedback** - Ratings and suggestions

---

## 🔒 Data Privacy

- All data stored **locally** on your computer
- No cloud storage or external servers
- No internet required after installation
- Complete data control

---

## 📈 Program Details

Each program includes:
- ✅ 7-day weekly workout schedule
- ✅ Sample daily nutrition plans
- ✅ Macronutrient targets
- ✅ Exercise lists with sets/reps
- ✅ Duration and difficulty
- ✅ Expert tips (8-14 per program)
- ✅ Program goals
- ✅ Recovery strategies

---

## ⚙️ Dependencies

```json
{
  "express": "^4.18.2",
  "body-parser": "^1.20.2",
  "cors": "^2.8.5"
}
```

---

## 📝 Notes

- **Size**: Lightweight (~500KB total)
- **Performance**: Instant page loads
- **Compatibility**: All modern browsers
- **Maintenance**: Self-contained, no external APIs
- **Scalability**: Can easily add more programs

---

## 🎓 Fitness Categories Covered

✅ Muscle Building (4 programs)
✅ Strength Training (1 program)
✅ Endurance Training (1 program)
✅ Yoga (1 program)
✅ Calisthenics (1 program)
✅ Powerlifting (1 program)

**Total: 9 Complete Training Programs**

---

## 🚨 Troubleshooting

**Issue**: Port 3000 or 5000 in use
**Solution**: Close apps using those ports or set a different `PORT` environment variable for the server

**Issue**: npm not found
**Solution**: Install Node.js from nodejs.org and restart your terminal

**Issue**: Data not saving
**Solution**: Ensure `fitness.db` was created and the directory is writable

**Issue**: Programs not showing
**Solution**: Verify all `.json` files in `public/programs/` exist and the API endpoint returns 200

---

## 📞 Support

Refer to:
- **README.md** - Full documentation
- **QUICKSTART.md** - Quick setup guide
- **Browser Console** (F12) - For debugging

---

**FitTrack v1.0 | Black Theme | 100% Local | Ready to Use** 💪

Created: February 25, 2026
