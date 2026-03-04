# FitTrack - Quick Start Guide

## 🚀 Getting Started in 4 Steps

### Step 1: Install Server Dependencies
```powershell
cd Website-html
npm install
```

### Step 2: Install Client Dependencies
```powershell
cd client
npm install
cd ..
```

### Step 3: Run Development Servers
```powershell
npm run devall
```

This will launch the Express API on port 5000 and the React app on port 3000 (React development server proxies `/api` requests to 5000).

### Step 4: Open in Browser
Browse to **http://localhost:3000** to use the app. The React router handles navigation.

---

## 📋 What's Included

✅ **6 Training Categories**
- 🏋️ Muscle Building (4 sub-programs)
- 💪 Strength Training
- 🏃 Endurance Training
- 🧘 Yoga
- 🤸 Calisthenics
- ⚡ Powerlifting

✅ **Complete Programs**
- Detailed workout schedules (7 days/week)
- Sample nutrition plans
- Macro and micronutrient targets
- Expert tips and tricks

✅ **User Features**
- Profile management (BMI calculation, calorie target)
- Progress tracking (weight, body fat %, workouts)
- Feedback system (ratings and suggestions)
- All data stored locally in JSON format

✅ **Professional Black Theme**
- Clean, minimal design
- Red accent color
- Dark mode for comfortable viewing

---

## 🎯 First Time Setup

1. **Create Your Profile**
   - Click "My Profile" in navigation
   - Fill in your details (name, age, weight, height, etc.)
   - Click "Save Profile"
   - Your BMI, daily calories, and protein needs will calculate automatically

2. **Explore Programs**
   - Click "Training" in navigation
   - Choose your category
   - Click on a specific program to see full details
   - View complete 7-day schedule, nutrition, and tips

3. **Start Tracking**
   - Go to "Progress" tab
   - Log your workouts and weight
   - Track your improvements over time

4. **Send Feedback**
   - Use "Feedback" tab to share suggestions
   - Rate your experience
   - Help us improve the platform

---

## 🏋️ Training Programs Overview

### Muscle Building
- **Bulking**: High calories (2500-3500/day) for maximum size
- **Lean Bulking**: Moderate surplus (2200-2700/day) for quality gains
- **Cutting**: Deficit (1800-2300/day) for fat loss while keeping muscle
- **Fat Loss**: Aggressive deficit (1600-2200/day) for maximum fat loss

### Strength Training
- Focus on heavy compound lifts (Squat, Bench, Deadlift)
- Max effort and dynamic effort days
- 16-week progression plan

### Endurance Training
- Interval training, tempo work, long steady-state
- HIIT and cardiovascular conditioning
- VO2 max development protocol

### Yoga
- Hatha, Vinyasa, and Yin styles
- 60-75 minute sessions
- Flexibility, strength, and mindfulness focus

### Calisthenics
- Bodyweight mastery progression
- From basics to advanced skills (handstands, muscle-ups)
- No equipment needed

### Powerlifting
- Specialized training for big three lifts
- Competition-focused programming
- Periodized 16-week cycle

---

## 📊 Data Storage

User data is persisted in the SQLite database file `fitness.db` (created automatically). It contains profiles, progress logs and feedback. You can open the file with any SQLite viewer if you wish.

**Everything stays on your machine!**

---

## ⚙️ Stopping the Server

Press `Ctrl+C` in the PowerShell window to stop the server.

To restart, just run `npm start` again.

---

## 🐛 Troubleshooting

**Port 3000 or 5000 already in use?**
- Close other apps using those ports or change them via environment variables
- React defaults to 3000, server defaults to 5000 (`PORT` env)

**npm not found?**
- Install Node.js from https://nodejs.org/
- Restart PowerShell after installation

**Programs not loading?**
- Check that all JSON files exist in `public/programs/`
- Refresh your browser (Ctrl+R)

---

## 📱 Navigation

- **Home**: Overview and featured programs
- **Training**: Browse all categories and programs
- **My Profile**: Manage personal information and view stats
- **Progress**: Track workouts, weight, and improvements
- **Feedback**: Submit suggestions and ratings

---

## 💡 Pro Tips

1. **Set reminders** for workouts using your phone calendar
2. **Log progress weekly** every Sunday for consistency
3. **Take photos** every 2-4 weeks to visualize changes
4. **Join a community** for accountability and motivation
5. **Adjust programs** based on your recovery and results

---

## 🎨 Customization

The app uses these colors:
- **Black**: Primary background
- **Dark Gray**: Secondary elements
- **Red**: Action buttons and highlights
- **White**: Text

To modify, edit `public/css/style.css`

---

**Enjoy your fitness journey with FitTrack! 💪**

Need help? Check the README.md file for detailed information.
