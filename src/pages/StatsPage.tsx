import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart2, TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { loadHistory } from "../lib/storage";
import type { QuizRecord } from "../lib/storage";

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

function getWeekData(history: QuizRecord[]) {
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

function getAccuracyData(history: QuizRecord[]) {
  return history.map((r, i) => ({
    session: `#${i + 1}`,
    accuracy: Math.round((r.correct / r.total) * 100),
  }));
}

const tooltipStyle = {
  backgroundColor: "#1e293b",
  border: "1px solid #334155",
  borderRadius: "8px",
  color: "#e2e8f0",
  fontSize: "12px",
};

const tooltipLabelStyle = { color: "#94a3b8" };

export function StatsPage() {
  const history = useMemo(() => loadHistory(), []);
  const weekData = useMemo(() => getWeekData(history), [history]);
  const accuracyData = useMemo(() => getAccuracyData(history), [history]);

  const totalQuestions = history.reduce((s, r) => s + r.total, 0);
  const totalCorrect = history.reduce((s, r) => s + r.correct, 0);
  const overallAccuracy =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="min-h-screen w-full px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <BarChart2 className="w-4.5 h-4.5 text-blue-400" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-none">
                Your Stats
              </h1>
              <p className="text-slate-500 text-xs mt-0.5">Last 30 days</p>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors text-xs font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
        </div>

        {/* Summary pills */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Sessions", value: history.length },
            { label: "Questions", value: totalQuestions },
            { label: "Accuracy", value: `${overallAccuracy}%` },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-black text-white tabular-nums">
                {value}
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Chart 1 — Questions Per Week */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <BarChart2 className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Questions Per Week
            </span>
          </div>
          {totalQuestions === 0 ? (
            <p className="text-slate-500 text-sm text-center py-8">
              No data yet — complete a quiz to see results.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weekData} barCategoryGap="30%">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                  vertical={false}
                />
                <XAxis
                  dataKey="week"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={24}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  labelStyle={tooltipLabelStyle}
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                  formatter={(v?: number) => [v ?? 0, "Questions"]}
                />
                <Bar dataKey="questions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Chart 2 — Accuracy Over Time */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Accuracy Per Session
            </span>
          </div>
          {accuracyData.length === 0 ? (
            <p className="text-slate-500 text-sm text-center py-8">
              No data yet — complete a quiz to see results.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={accuracyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                  vertical={false}
                />
                <XAxis
                  dataKey="session"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={36}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  labelStyle={tooltipLabelStyle}
                  formatter={(v: number | undefined) => [
                    `${v ?? 0}%`,
                    "Accuracy",
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#34d399"
                  strokeWidth={2}
                  dot={{ fill: "#34d399", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "#34d399" }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
