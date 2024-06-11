import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MultiAngle from "./pages/MultiAngle.jsx";
import AudioQuality from "./pages/AudioQuality.jsx";
import EasySetup from "./pages/EasySetup.jsx";
import ChargeAudience from "./pages/ChargeAudience.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/multi-angle" element={<MultiAngle />} />
        <Route exact path="/audio-quality" element={<AudioQuality />} />
        <Route exact path="/easy-setup" element={<EasySetup />} />
        <Route exact path="/charge-audience" element={<ChargeAudience />} />
      </Routes>
    </Router>
  );
}

export default App;