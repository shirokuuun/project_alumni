import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Your imports
import Mentorship from "./pages/mentorship/Mentorship.jsx";
import MentorFinderUI from "./pages/mentor-finder/MentorFinder.jsx";

// Collaborator's imports
import MentorSignUp from "./pages/mentor-signup/Mentor.jsx";
import RequestMentorship from "./pages/request-page/Request-form.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<Mentorship />} />

        {/* The Finder/Directory Page */}
        <Route path="/finder" element={<MentorFinderUI />} />

        {/* Collaborator's Pages */}
        <Route path="/program" element={<MentorSignUp />} />
        <Route path="/request" element={<RequestMentorship />} />
      </Routes>
    </Router>
  );
}

export default App;
