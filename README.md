# PreCheck Reimburse AI MVP

A lightweight MVP for pre-submission reimbursement risk screening.

## What It Does

- OCR-style invoice recognition flow
- AI precheck result: Pass / Warning / Block
- Reimbursement list and status tracking
- Feedback and policy/help section

## Architecture

- Frontend: `index.html` (UI + interaction)
- Backend: `server.js` (Node.js + Express)
- API:
  - `POST /api/ocr`
  - `POST /api/precheck`
  - `GET /api/reimbursements`

## Run Locally

```bash
npm install
npm start
```

Open: `http://localhost:3000`

## Flow Diagram

See `ai-precheck-flowchart-vertical.png`.

## PRD

See `AI报销预检助手 v1.3.md`.

## Demo Links

- GitHub Pages (static fallback): `https://wangaki973.github.io/precheck-reimburse-ai-mvp/`
- Fullstack deploy (recommended): deploy this repo to Render/Railway with `npm start`

> Note: GitHub Pages only hosts static files, so backend API calls fall back to mock data in static demo mode.

## Deploy (Render Fullstack)

1. Open [Render Dashboard](https://dashboard.render.com/) and click **New +** -> **Blueprint**.
2. Select this repo: `wangaki973/precheck-reimburse-ai-mvp`.
3. Keep default settings (Render reads `render.yaml` automatically), then click **Apply**.
4. Wait for build success, then open the generated `onrender.com` URL.

Health check path: `/healthz`

