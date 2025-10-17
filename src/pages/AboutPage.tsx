function AboutPage() {
  return (
    <div className="page-content">
      <div className="hero-section">
        <h2>About Jarurat Care</h2>
        <p>Learn more about our patient records management system</p>
      </div>
      
      <div className="about-content">
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>To provide healthcare professionals with a comprehensive, user-friendly platform for managing patient records efficiently and securely.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                <path d="M13 12h3"></path>
                <path d="M8 12h3"></path>
              </svg>
            </div>
            <h3>Key Features</h3>
            <p>Comprehensive patient profiles, medical history tracking, appointment management, and secure data storage with real-time updates.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Security & Privacy</h3>
            <p>We prioritize patient data security with encrypted storage, secure access controls, and compliance with healthcare regulations.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h3>Technology</h3>
            <p>Built with modern web technologies including React, TypeScript, and responsive design for optimal performance across all devices.</p>
          </div>
        </div>
        
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Patients Managed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Data Security</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">System Availability</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
