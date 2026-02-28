const HISTORY_KEY = "eaq_history";
const PROGRESS_KEY = "eaq_progress";

export interface QuizRecord {
  date: string;
  total: number;
  correct: number;
}

export interface QuizProgress {
  correct: number;
  incorrect: number;
}

export type QuizProgressMap = Record<number, QuizProgress>;

export function loadHistory(): QuizRecord[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Error loading history:", error);
    return [];
  }
}

export function loadQuizProgress(): QuizProgressMap {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error("Error loading question stats:", error);
    return {};
  }
}

export function saveRecord(record: QuizRecord): void {
  try {
    const history = loadHistory();
    history.push(record);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error("Error saving quiz session:", error);
  }
}

export function saveProgress(progress: QuizProgressMap): void {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Error updating question stats:", error);
  }
}
