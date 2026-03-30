import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DesignGuide from "./components/DesignGuide";
import Home from "./pages/Home";
import MainContainer from "./components/MainContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designguide" element={<DesignGuide />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;
