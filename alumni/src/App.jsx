import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

import RequestMentorship from './pages/request-page/request-form.jsx'
import MentorshipProgram from './pages/mentor-techies/mentor.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Redirect Root to Program */}
        <Route path="/" element={<Navigate to="/program" replace />} />

        {/* THE PAGES */}
        <Route path="/program" element={<MentorshipProgram />} />
        <Route path="/request" element={<RequestMentorship />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;