# FitTrack Deployment & Configuration Guide

## Summary of Changes Made

### 1. **Updated CORS Configuration** (`index.js`)
- Enhanced CORS to accept both localhost and production URLs
- Supports environment variables `FRONTEND_URL` and `BACKEND_URL`
- Allows cross-origin requests from Vercel frontend to Render backend

### 2. **Environment Configuration Files Created**
- **`client/.env.development`** – Local development settings
- **`client/.env.production.local`** – Production settings (for local testing)
- **`client/.env.production`** – Production settings template
- **`vercel.json`** – Vercel deployment configuration

### 3. **Deployment Configuration Created**
- **`render.yaml`** – Render backend configuration
- **`DEPLOYMENT.md`** – Step-by-step deployment guide (detailed)

---

## Quick Start: Local Development

### Prerequisites
- Node.js v14+ installed
- npm installed

### Run Locally
```bash
npm install
cd client && npm install && cd ..
npm run devall
```

**Access the app:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

---

## Deployment Quick Guide

### Backend (Render)
1. Push code to GitHub
2. Go to https://render.com → New Web Service
3. Connect your GitHub repo
4. Set environment variables:
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-vercel-app.vercel.app`
5. Deploy

**After deployment, copy the Render URL** (e.g., `https://fittrack-backend.onrender.com`)

### Frontend (Vercel)
1. Go to https://vercel.com → Import Project
2. Select GitHub repo and set Root Directory to `client`
3. Add environment variable:
   - `REACT_APP_API_BASE=https://your-render-backend.onrender.com/api` (use URL from step above)
4. Deploy

**Update Backend CORS:**
- Go back to Render dashboard
- Update `FRONTEND_URL` with your new Vercel URL
- Trigger redeploy

---

## Environment Variables Explained

| Variable | Location | Example | Purpose |
|----------|----------|---------|---------|
| `REACT_APP_API_BASE` | Frontend (Vercel) | `https://fittrack-backend.onrender.com/api` | API endpoint URL |
| `FRONTEND_URL` | Backend (Render) | `https://fittrack.vercel.app` | CORS origin for frontend |
| `NODE_ENV` | Backend (Render) | `production` | Enables production mode |

---

## API Configuration

The frontend automatically selects the correct API URL:
- **Local:** `http://localhost:5000/api` (from `.env.development`)
- **Production:** Uses `REACT_APP_API_BASE` from Vercel environment

The backend accepts requests from:
- `localhost:3000`, `localhost:5000` (development)
- Any URL in `FRONTEND_URL` environment variable
- No origin header (mobile apps, curl)

---

## Testing the Deployment

### Before deployment, test locally:
```bash
npm run devall
# Visit http://localhost:3000
# Navigate to Programs and check if data loads
```

### After deployment:
1. Visit your Vercel frontend URL
2. Try loading a program (should fetch from Render backend)
3. Check browser DevTools Network tab for API calls
4. If errors: check Render backend logs

---

## Troubleshooting

### CORS Error
**Problem:** `Access to XMLHttpRequest has been blocked by CORS policy`
- Ensure `FRONTEND_URL` in Render environment matches your Vercel domain exactly
- Check Render logs for CORS policy details

### 404 on API calls
**Problem:** Cannot find resource at `/api/programs/...`
- Verify `REACT_APP_API_BASE` in Vercel is correct (should end with `/api`)
- Check that Render backend is running

### Database errors
**Problem:** Data not persisting on Render
- Free tier uses ephemeral storage (resets when service stops)
- For persistence: upgrade to paid tier or use cloud database

### Blank page on Render
**Problem:** Can't access frontend
- Frontend is deployed to Vercel, not Render
- Only backend runs on Render
- Visit your Vercel deployment URL, not Render URL

---

## Project Structure Updated

```
Website-html/
├── client/
│   ├── .env.development          # ← Local dev API
│   ├── .env.production           # ← Production template
│   ├── .env.production.local     # ← Production local test
│   ├── src/
│   │   ├── api.js                # ← Uses REACT_APP_API_BASE
│   │   └── components/
│   └── package.json
├── index.js                       # ← Updated CORS
├── vercel.json                   # ← Vercel config
├── render.yaml                   # ← Render config
├── DEPLOYMENT.md                 # ← Full deployment guide
└── package.json
```

---

## Next Steps

1. **Review** the [DEPLOYMENT.md](./DEPLOYMENT.md) file for detailed step-by-step instructions
2. **Test locally** with `npm run devall` to ensure everything works
3. **Push to GitHub** (make sure `.gitignore` is updated)
4. **Deploy backend** to Render first
5. **Deploy frontend** to Vercel with the Render URL
6. **Update** Render environment variables with Vercel URL
7. **Test** the production deployment

---

## Key Files to Review

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** – Full deployment guide
- **[render.yaml](./render.yaml)** – Render configuration
- **[vercel.json](./vercel.json)** – Vercel configuration
- **[index.js](./index.js)** – Backend with CORS config
- **[client/src/api.js](./client/src/api.js)** – Frontend API setup
