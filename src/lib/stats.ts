import type { QuizRecord } from "./storage";

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export function getWeekData(history: QuizRecord[]) {
  if (history.length === 0) return [];

  // Find Monday of the earliest record's week as the origin
  const earliest = new Date(
    Math.min(...history.map((r) => new Date(r.date).getTime())),
  );
  const origin = new Date(earliest);
  origin.setDate(earliest.getDate() - ((earliest.getDay() + 6) % 7));
  origin.setHours(0, 0, 0, 0);

  // Bucket each record by week index from origin
  const counts: Record<number, number> = {};
  for (const r of history) {
    const weekIndex = Math.floor(
      (new Date(r.date).getTime() - origin.getTime()) / WEEK_MS,
    );
    counts[weekIndex] = (counts[weekIndex] ?? 0) + r.total;
  }

  // Fill all weeks from W1 to the latest, including empty ones
  const maxWeek = Math.max(...Object.keys(counts).map(Number));
  return Array.from({ length: maxWeek + 1 }, (_, i) => ({
    week: `W${i + 1}`,
    questions: counts[i] ?? 0,
  }));
}

export function getAccuracyData(history: QuizRecord[]) {
  return history.map((r, i) => ({
    session: `#${i + 1}`,
    accuracy: Math.round((r.correct / r.total) * 100),
  }));
}
