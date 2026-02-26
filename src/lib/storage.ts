const HISTORY_KEY = "eaq_history";
const QUESTION_STATS_KEY = "eaq_question_stats";

export interface QuizRecord {
  date: string;
  total: number;
  correct: number;
}

export interface QuestionStat {
  correct: number;
  incorrect: number;
}

export type QuestionStatsMap = Record<number, QuestionStat>;

export function loadHistory(): QuizRecord[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Error loading history:", error);
    return [];
  }
}

export function loadQuestionStats(): QuestionStatsMap {
  try {
    const raw = localStorage.getItem(QUESTION_STATS_KEY);
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

export function updateQuestionStats(
  answers: { id: number; correct: boolean }[],
): void {
  try {
    const stats = loadQuestionStats();
    for (const { id, correct } of answers) {
      const prev = stats[id] ?? { correct: 0, incorrect: 0 };
      stats[id] = {
        correct: prev.correct + (correct ? 1 : 0),
        incorrect: prev.incorrect + (correct ? 0 : 1),
      };
    }
    localStorage.setItem(QUESTION_STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error("Error updating question stats:", error);
  }
}
