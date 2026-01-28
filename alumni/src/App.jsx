import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Your imports
import Mentorship from "./pages/mentorship/Mentorship";
import MentorFinderUI from "./pages/mentor-finder/MentorFinder";
import VolunteerPrograms from "./pages/volunteer-programs/VolunteerPrograms"; // Import the new page

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
        
        {/* Volunteer Programs Page */}
        <Route path="/VolunteerPrograms" element={<VolunteerPrograms />} />

        {/* Collaborator's Pages */}
        <Route path="/program" element={<MentorshipProgram />} />
        <Route path="/request" element={<RequestMentorship />} />
      </Routes>
    </Router>
  );
}

export default App;