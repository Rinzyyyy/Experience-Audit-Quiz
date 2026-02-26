---
name: Quiz Stats Page
overview: "Add localStorage-based quiz history tracking and a new `/stats` route with two Recharts charts: a weekly questions count bar chart and a per-session accuracy chart. Also tracks per-question correct/incorrect aggregates."
todos:
  - id: install-deps
    content: Install react-router-dom and recharts
    status: completed
  - id: add-question-ids
    content: Add id field to Question interface and all 20 questions in questions.ts
    status: completed
  - id: storage-lib
    content: Create src/lib/storage.ts with all localStorage utilities
    status: completed
  - id: wrap-router
    content: Wrap App in BrowserRouter in src/main.tsx
    status: completed
  - id: update-app
    content: Add Routes to App.tsx, useEffect to save quiz result on results screen, and a Stats nav link
    status: completed
  - id: stats-page
    content: Create src/pages/StatsPage.tsx with weekly question count bar chart and accuracy line chart
    status: in_progress
isProject: false
---

# Quiz History & Stats Page Plan

## New Dependencies

- `react-router-dom` — for the `/` and `/stats` routes
- `recharts` — for the two charts

## localStorage Data Model

### Two separate keys:

`**"eaq_history"**` — per-session records, auto-cleaned after 30 days:

```ts
interface QuizRecord {
  date: string; // ISO string
  total: number; // questions in the quiz (QUIZ_SIZE)
  correct: number; // score
}
```

`**"eaq_question_stats"**` — per-question aggregates, never expires:

```ts
interface QuestionStatsMap {
  [id: number]: { correct: number; incorrect: number };
}
```

Both are saved together when `state.screen` transitions to `'results'`.

## Files to Change / Create

### 1. `src/data/questions.ts`

Add `id: number` field to the `Question` interface and assign IDs 1–20 to each question.

### 2. `src/lib/storage.ts` (new)

- `loadHistory()` — loads + auto-prunes records older than 30 days
- `saveRecord(record)` — appends to history, wrapped in try/catch for QuotaExceededError
- `loadQuestionStats()` — loads the per-question map
- `updateQuestionStats(answers)` — increments correct/incorrect for each question answered

### 3. `src/main.tsx`

Wrap `<App />` with `<BrowserRouter>` from react-router-dom.

### 4. `src/App.tsx`

- Split into `<Routes>`: `"/"` → `<QuizApp>` (existing logic), `"/stats"` → `<StatsPage />`
- In `<QuizApp>`, add a `useRef` save-guard + `useEffect` that fires once when `state.screen === 'results'`, calling both `saveRecord` and `updateQuestionStats`
- Add a fixed "Stats" link button in the top-right corner of the page

### 5. `src/pages/StatsPage.tsx` (new)

Two Recharts charts styled to the dark slate palette:

**Chart 1 — Questions This Week (Bar Chart)**

- X-axis: Mon–Sun labels for the current week
- Y-axis: total questions answered that day
- Groups `eaq_history` records by date within the current Mon–Sun window

**Chart 2 — Quiz Accuracy Over Time (Line Chart)**

- X-axis: session number / date label
- Y-axis: accuracy % (0–100)
- Each point = one completed quiz from `eaq_history`

Also includes a "Back" button to return to `/`.

## Flow Diagram

```mermaid
flowchart TD
    main["main.tsx (BrowserRouter)"] --> router["App.tsx (Routes)"]
    router -->|"/"| quiz["QuizApp (start/quiz/results screens)"]
    router -->|"/stats"| stats["StatsPage"]
    quiz -->|"screen → results"| save["saveRecord() + updateQuestionStats()"]
    stats --> chart1["Bar: questions/day this week"]
    stats --> chart2["Line: accuracy per session"]
    save --> ls1["eaq_history"]
    save --> ls2["eaq_question_stats"]
    ls1 --> stats
    ls2 --> stats
```
