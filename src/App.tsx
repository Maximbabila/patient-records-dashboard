import { useState } from 'react'
import Navbar from './components/Navbar'
import PatientsPage from './pages/PatientsPage'
import './App.css'

function App() {
  const [activeNavItem, setActiveNavItem] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'patients', label: 'Patients', href: '#patients' },
    { id: 'about', label: 'About', href: '#about' }
  ]

  const handleNavClick = (itemId: string) => {
    setActiveNavItem(itemId)
  }

  const renderPage = () => {
    switch (activeNavItem) {
      case 'patients':
        return <PatientsPage />
      case 'about':
        return (
          <div className="page-content">
            <div className="hero-section">
              <h2>About Jarurat Care</h2>
              <p>Learn more about our patient records management system</p>
              <div className="about-content">
                <p>Jarurat Care is a comprehensive patient records management system designed to help healthcare professionals efficiently manage patient information, track medical history, and provide better care.</p>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="hero-section">
            <h2>Welcome to Jarurat Care</h2>
            <p>Your comprehensive patient records management system</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => setActiveNavItem('patients')}
              >
                View Patients
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setActiveNavItem('about')}
              >
                Learn More
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="app">
      <Navbar
        brandName="Jarurat Care"
        tagline="Patient Records Dashboard"
        navItems={navItems}
        activeItem={activeNavItem}
        onNavClick={handleNavClick}
      />

      {/* Main Content */}
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
