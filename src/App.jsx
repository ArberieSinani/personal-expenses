import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/dashboard/overview/Overview";
import Goals from "./pages/dashboard/goals/Goals";
import Categories from "./pages/dashboard/categories/Categories";
import Budget from "./pages/dashboard/budget/Budget";
import Reports from "./pages/dashboard/reports/Reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
