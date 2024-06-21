import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "./components";

import Terms from "./pages/terms";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
