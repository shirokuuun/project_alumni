import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Your imports
import Mentorship from "./pages/Mentorship";
import MentorFinderUI from "./pages/MentorFinder";

// Collaborator's imports
import MentorshipProgram from "./pages/mentor-techies/mentor.jsx";
import RequestMentorship from "./pages/request-page/request-form.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<Mentorship />} />

        {/* The Finder/Directory Page */}
        <Route path="/finder" element={<MentorFinderUI />} />

        {/* Collaborator's Pages */}
        <Route path="/program" element={<MentorshipProgram />} />
        <Route path="/request" element={<RequestMentorship />} />
      </Routes>
    </Router>
  );
}

export default App;
