import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import HistoryScreen from "./components/HistoryScreen";
import StatisticsScreen from "./components/StatisticsScreen";

function App() {
  return (
    <div className="bg-grayBg">
      <Routes>
        <Route path="/" element={<MainScreen></MainScreen>} />
        <Route path="/history" element={<HistoryScreen></HistoryScreen>} />
        <Route
          path="/statistics"
          element={<StatisticsScreen></StatisticsScreen>}
        />
      </Routes>
    </div>
  );
}

export default App;
