# Render deploy quick steps (TanStack Start + Vite)

## 1) Confirm local build works
From `red-palm-vision/`:
- `npm install`
- `npm run build`

## 2) Render settings
In the Render service for this project, set:
- **Root Directory**: `red-palm-vision`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start`
  - (Only keep this if Render is using the Node “start” process. If you are using static site hosting, omit Start Command.)

## 3) If Render still fails with `package.json` JSON parse errors
That error means Render is pointing at the wrong folder (or that folder contains an invalid `package.json`, e.g. git conflict markers).

Fix by changing **Root Directory** until Render logs show it is loading:
- `red-palm-vision/package.json`

You can also check your repo for any stray `src/package.json` with merge-conflict markers:
- `<<<<<<< HEAD`
- `=======`
- `>>>>>>>`

Remove those markers so `package.json` is valid JSON.

## 4) Deploy
- Trigger a new deployment in Render.

## 5) Verify
After deploy, open the Render URL in browser and confirm the homepage loads.

