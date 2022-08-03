import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import HistoryScreen from "./components/HistoryScreen";
import StatisticsScreen from "./components/StatisticsScreen";
import { v4 as uuidv4 } from "uuid";
import { createDefaultList } from "./api/lists";

function App() {
  if (localStorage.getItem("user_id") === null) {
    localStorage.setItem("user_id", uuidv4());
    createDefaultList(localStorage.getItem("user_id"));
  }

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
