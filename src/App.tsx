import { useState } from 'react'
import Navbar from './components/Navbar'
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
        <div className="hero-section">
          <h2>Welcome to Jarurat Care</h2>
          <p>Your comprehensive patient records management system</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">View Patients</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
