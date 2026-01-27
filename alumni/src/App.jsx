import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mentorship from "./pages/Mentorship"; // Remove .jsx extension
import MentorFinderUI from "./pages/MentorFinder"; // Match the actual export name

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mentorship />} />
        <Route path="/finder" element={<MentorFinderUI />} />
      </Routes>
    </Router>
  );
}

export default App;
