import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import { GlobalProvider } from "./context/GlobalScope";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="watched" element={<Watched />} />
            <Route path="add" element={<Add />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
