import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Mentorship from "./pages/mentorship/Mentorship.jsx";
import MentorFinderUI from "./pages/mentor-finder/MentorFinder.jsx";
import MentorSignUp from "./pages/mentor-signup/Mentor.jsx";
import RequestMentorship from "./pages/request-page/request-form.jsx";
import BecomeMentor from "./pages/be-a-mentor/becomeMentor.jsx";
import VolunteerPrograms from "./pages/volunteer-programs/VolunteerPrograms.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mentorship />} />

        <Route path="/becomeMentor" element={<BecomeMentor />} />

        <Route path="/finder" element={<MentorFinderUI />} />

        <Route path="/program" element={<MentorSignUp />} />

        <Route path="/request" element={<RequestMentorship />} />

        <Route path="/volunteerPrograms" element={<VolunteerPrograms />} />
      </Routes>
    </Router>
  );
}

export default App;
