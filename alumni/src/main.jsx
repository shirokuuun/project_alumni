import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RequestMentorship from './pages/request-page/request-form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RequestMentorship />
  </StrictMode>,
)
