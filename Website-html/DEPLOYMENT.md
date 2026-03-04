# Deployment Instructions: Vercel (Frontend) + Render (Backend)

## Prerequisites
- GitHub account
- Vercel account (https://vercel.com)
- Render account (https://render.com)

---

## Step 1: Deploy Backend to Render

1. Push your code to GitHub
2. Go to https://render.com and sign in
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:**
     - Add `NODE_ENV = production`
     - Add `FRONTEND_URL = https://your-vercel-app.vercel.app` (update after deploying frontend)
6. Click "Deploy"
7. Once deployed, note the backend URL (e.g., `https://fittrack-backend.onrender.com`)

---

## Step 2: Deploy Frontend to Vercel

### Option A: Using Vercel CLI
```bash
npm install -g vercel
cd client
vercel --prod
```

### Option B: Using Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `client`
   - **Environment Variables:**
     - Add `REACT_APP_API_BASE` = `https://your-render-backend.onrender.com/api`
5. Click "Deploy"

---

## Step 3: Update Backend with Frontend URL

After deploying the frontend to Vercel:
1. Go back to Render dashboard
2. Open your FitTrack backend service
3. Edit Environment Variables
4. Update `FRONTEND_URL` to your Vercel URL (e.g., `https://fittrack.vercel.app`)
5. Trigger a redeploy

---

## Environment Variables Reference

### Frontend (.env.production)
```
REACT_APP_API_BASE=https://your-render-backend.onrender.com/api
```

### Backend (Render Dashboard)
```
NODE_ENV=production
FRONTEND_URL=https://your-vercel-app.vercel.app
```

---

## Troubleshooting

### "Failed to load resource" or CORS errors
- Verify the backend URL in frontend `.env`
- Check Render logs for CORS issues
- Ensure `FRONTEND_URL` matches your Vercel domain exactly

### Database file not found
- Render creates `fitness.db` on first run; it's stored in the ephemeral filesystem
- Data persists only during the current session on free tier
- **For production:** upgrade to paid plan or use managed database

### Frontend can't connect to backend
- Verify both services are running
- Check browser DevTools Network tab for actual URLs being called
- Ensure firewall doesn't block requests

---

## Local Development

For testing locally before deployment:
```bash
npm install
npm run devall
```
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## Notes

- **Free tier limitations:** Render spins down unused services after 15 minutes
- **Database persistence:** Free tier doesn't persist between sessions
- **Alternative databases:** Consider Firebase, MongoDB Atlas for persistent storage
- **Cost:** Both Vercel and Render free tiers are suitable for small projects
