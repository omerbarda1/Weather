import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CityFullDisplay from "./components/CityFullDisplay/CityFullDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/city" element={<CityFullDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
