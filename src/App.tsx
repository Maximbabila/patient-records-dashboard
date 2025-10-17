import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PatientsPage from './pages/PatientsPage'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'patients', label: 'Patients', path: '/patients' },
    { id: 'about', label: 'About', path: '/about' }
  ]

  return (
    <Router>
      <div className="app">
        <Navbar
          brandName="Jarurat Care"
          tagline="Patient Records Dashboard"
          navItems={navItems}
        />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
