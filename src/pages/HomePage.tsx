import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <h2>Welcome to Jarurat Care</h2>
      <p>Your comprehensive patient records management system</p>
      <div className="cta-buttons">
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/patients')}
        >
          View Patients
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => navigate('/about')}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HomePage;
