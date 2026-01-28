import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Mentorship from "./pages/mentorship/Mentorship.jsx";
import MentorFinderUI from "./pages/mentor-finder/MentorFinder.jsx";
import MentorshipProgram from "./pages/mentor-signup/Mentor.jsx";
import RequestMentorship from "./pages/request-page/request-form.jsx";
import BecomeMentor from "./pages/be-a-mentor/becomeMentor.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mentorship />} />

        <Route path="/becomeMentor" element={<BecomeMentor />} />

        <Route path="/finder" element={<MentorFinderUI />} />

        <Route path="/program" element={<MentorshipProgram />} />

        <Route path="/request" element={<RequestMentorship />} />
      </Routes>
    </Router>
  );
}

export default App;
