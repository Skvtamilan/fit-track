# FitTrack - Installation Verification Checklist

## ✅ Pre-Installation Checklist

Before running the app, verify you have:
- [ ] Node.js installed (check: `node --version`)
- [ ] npm installed (check: `npm --version`)
- [ ] All files downloaded to Website-html folder
- [ ] Sufficient disk space (~100MB)

---

## 🔧 Installation Steps

### Step 1: Open PowerShell
```
Windows Key + R
Type: powershell
Press Enter
```

### Step 2: Navigate to Project
```powershell
cd C:\Users\arvin\OneDrive\Desktop\Website-html
```

### Step 3: Install Dependencies
```powershell
npm install
```

**Expected output:**
```
added 50+ packages
up to date in 15s
```

### Step 4: Start Server
```powershell
npm start
```

**Expected output:**
```
🏋️  FitTrack Server is running at http://localhost:3000
📊 API endpoints available at http://localhost:3000/api

Press Ctrl+C to stop the server
```

---

## ✅ Verification Checklist After Starting

### Server Running Check
- [ ] Console shows "running at http://localhost:3000"
- [ ] No error messages in console
- [ ] Console shows API endpoints available

### File Structure Check
Verify these folders exist:
- [ ] `public/` folder
- [ ] `public/css/` folder with `style.css`
- [ ] `public/js/` folder with `app.js`
- [ ] `public/programs/` folder with 9 JSON files

Program files to verify:
- [ ] `bulking.json`
- [ ] `lean-bulking.json`
- [ ] `cutting.json`
- [ ] `fat-loss.json`
- [ ] `strength.json`
- [ ] `endurance.json`
- [ ] `yoga.json`
- [ ] `calisthenics.json`
- [ ] `powerlifting.json`

---

## 🌐 Browser Access Verification

### Step 1: Open Browser
Open any modern browser (Chrome, Firefox, Edge, Safari)

### Step 2: Navigate to App
Go to: **http://localhost:3000**

### Expected Result:
- [ ] Page loads successfully
- [ ] FitTrack logo visible
- [ ] Navigation menu visible
- [ ] "Get Started" button present
- [ ] No console errors (F12)

---

## ✅ Feature Testing

### Home Page
- [ ] Title "Welcome to FitTrack" visible
- [ ] 6 training category cards visible
- [ ] "Get Started" button clickable

### Navigation
- [ ] Click "Training" - loads categories
- [ ] Click "My Profile" - loads form
- [ ] Click "Progress" - loads tracking form
- [ ] Click "Feedback" - loads feedback form
- [ ] Click logo - returns to home

### Profile Page
- [ ] All input fields present (Name, Age, Weight, Height, etc.)
- [ ] Select dropdowns work
- [ ] "Save Profile" button is clickable
- [ ] Success message appears after saving

### Training Categories
- [ ] "Muscle Building" card clickable
- [ ] "Strength Training" card clickable
- [ ] "Endurance Training" card clickable
- [ ] "Yoga" card clickable
- [ ] "Calisthenics" card clickable
- [ ] "Powerlifting" card clickable

### Program Details
**Muscle Building Page:**
- [ ] 4 program cards visible (Bulking, Lean Bulking, Cutting, Fat Loss)
- [ ] Clicking each loads detailed program page

**Program Detail Page (Example: Bulking):**
- [ ] Full program title visible
- [ ] Description visible
- [ ] 7-day schedule visible with exercises
- [ ] Nutrition plans visible
- [ ] Tips section visible
- [ ] "Back" button works

### Progress Tracking
- [ ] Date field present and shows today's date
- [ ] Weight input field works
- [ ] Body Fat % input field works
- [ ] "Log Progress" button clickable
- [ ] Success message appears after logging
- [ ] Previous entries display below form

### Feedback System
- [ ] All form fields present (Type, Subject, Feedback, Rating)
- [ ] "Submit Feedback" button works
- [ ] Success message appears
- [ ] Submitted feedback displays in list

---

## 🐛 Troubleshooting Tests

### Test 1: API Connection
Open browser console (F12) and check:
- [ ] No CORS errors
- [ ] Network tab shows 200 status codes
- [ ] API calls to /api/profiles, /api/progress work

### Test 2: Data Persistence
- [ ] Fill profile and save
- [ ] Refresh page (F5)
- [ ] Profile data still there
- [ ] Log progress entry
- [ ] Refresh page
- [ ] Progress entry still there

### Test 3: Theme Loading
- [ ] Background is completely black
- [ ] Text is white/light gray
- [ ] Buttons are red
- [ ] No styling issues visible
- [ ] All text readable

### Test 4: Responsive Design
- [ ] Resize browser window
- [ ] App still functions on narrow screens
- [ ] Mobile layout works (press F12, toggle mobile view)

---

## 📊 Database Verification

Check that `fitness.db` was created:
1. Go to project folder
2. Should see `fitness.db` file
3. Open it with a SQLite viewer (or run `sqlite3 fitness.db ".tables"`)
4. Tables `profiles`, `progress` and `feedback` should exist

After adding data via the app:
- [ ] Rows appear in the corresponding tables
- [ ] `createdAt`/`updatedAt` timestamps are populated
- [ ] IDs are auto‑incrementing integers

---

## 🎨 Visual Verification

### Colors Check
- [ ] Background: Pure Black (#000)
- [ ] Text: White (#fff)
- [ ] Buttons: Red (#e74c3c)
- [ ] Cards: Dark Gray (#1a1a1a)
- [ ] Borders: Gray (#333)

### Layout Check
- [ ] Navigation sticky at top
- [ ] Container max-width 1200px centered
- [ ] Cards have hover effects
- [ ] Forms have proper spacing
- [ ] Footer at bottom

### Font Check
- [ ] Font is Roboto or system default
- [ ] Text is readable
- [ ] Headings are larger than body
- [ ] All emojis display correctly

---

## 📈 Performance Tests

### Load Time
- [ ] Page loads in under 2 seconds
- [ ] No spinning loader indefinitely
- [ ] Smooth page transitions

### Response Time
- [ ] Saving profile takes <1 second
- [ ] Logging progress takes <1 second
- [ ] Loading programs takes <1 second

### Stability
- [ ] No crashes after 10 minutes of use
- [ ] Can navigate between pages 20+ times without issues
- [ ] Can add 5+ progress entries without problems

---

## ✅ Final Verification Checklist

- [ ] Server runs without errors
- [ ] All 9 programs load correctly
- [ ] Profile form saves and retrieves data
- [ ] Progress tracking works
- [ ] Feedback system works
- [ ] UI is all black with red accents
- [ ] All navigation links work
- [ ] Data persists after refresh
- [ ] No console errors (F12)
- [ ] Responsive on mobile view

---

## 🎯 All Tests Passed?

If all checkmarks are complete, your FitTrack installation is **100% successful!**

You can now:
- ✅ Create profiles
- ✅ View all 9 training programs
- ✅ Track progress
- ✅ Submit feedback
- ✅ Access from http://localhost:3000

---

## 🚀 Next Steps

1. **Explore Programs**: Click through each training category
2. **Create Profile**: Fill in your fitness details
3. **Start Tracking**: Log your first workout
4. **Share Feedback**: Help improve the platform

---

## 📞 Troubleshooting Guide

**If anything fails:**

1. **Check Console (F12)**
   - Look for red error messages
   - Screenshot errors
   - Note exact error text

2. **Verify Node.js**
   ```powershell
   node --version
   npm --version
   ```

3. **Reinstall if needed**
   ```powershell
   rm -r node_modules
   npm install
   npm start
   ```

4. **Check Ports**
   - Make sure nothing else uses port 3000 (React) or 5000 (API)
   - Try restarting your computer

5. **Clear Browser Cache**
   - Ctrl+Shift+Delete
   - Clear all cache
   - Refresh page

---

**FitTrack Installation Verification v1.0**
**Created: February 25, 2026**

Ready to begin your fitness journey? 💪
