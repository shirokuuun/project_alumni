import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";

import LandingPage from "./pages/mentorships/LandingPage.jsx";
import MentorList from "./pages/mentorships/MentorList.jsx";
import MentorSignUp from "./pages/mentorships/MentorSignUp.jsx";
import RequestMentorship from "./pages/mentorships/RequestMentorship.jsx";
import BecomeMentor from "./pages/mentorships/BecomeMentor.jsx";
import VolunteerPrograms from "./pages/mentorships/VolunteerPrograms.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
        <Route path="/landingPage" element={<MainLayout><LandingPage /></MainLayout>} />

        <Route path="/becomeMentor" element={<MainLayout><BecomeMentor /></MainLayout>} />

        <Route path="/mentorList" element={<MainLayout><MentorList /></MainLayout>} />

        <Route path="/mentorSignUp" element={<MainLayout><MentorSignUp /></MainLayout>} />

        <Route path="/requestMentorship" element={<MainLayout><RequestMentorship /></MainLayout>} />

        <Route path="/volunteerPrograms" element={<MainLayout><VolunteerPrograms /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
