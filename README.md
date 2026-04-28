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

