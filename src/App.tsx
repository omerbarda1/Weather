import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainPage from "./components/MainPage/MainPage";
import CityFullDisplay from "./components/CityFullDisplay/CityFullDisplay";
import { TemperatureProvider } from "./context/DegreeContext";

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <TemperatureProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/city" element={<CityFullDisplay />} />
            </Routes>
          </Router>
        </TemperatureProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
