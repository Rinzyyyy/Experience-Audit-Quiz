import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { StatsPage } from './pages/StatsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  );
}
