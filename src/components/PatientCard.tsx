import { PatientCardProps } from '../types/patient';

function PatientCard({ patient, onViewDetails }: PatientCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#10b981';
      case 'inactive': return '#6b7280';
      case 'pending': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div className="patient-card">
      <div className="patient-card-header">
        <div className="patient-avatar">
          {patient.photoUrl ? (
            <img 
              src={patient.photoUrl} 
              alt={patient.name}
              className="patient-photo"
            />
          ) : (
            <span className="patient-initials">
              {patient.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div className="patient-status">
          <span 
            className="status-dot" 
            style={{ backgroundColor: getStatusColor(patient.status) }}
          ></span>
          <span className="status-text">{patient.status}</span>
        </div>
      </div>
      
      <div className="patient-info">
        <h3 className="patient-name">{patient.name}</h3>
        <p className="patient-age">Age: {patient.age} • {patient.gender}</p>
        {patient.height && patient.weight && (
          <p className="patient-physical">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            {patient.height}cm • {patient.weight}kg
          </p>
        )}
        <p className="patient-contact">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          {patient.phone}
        </p>
        <p className="patient-email">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          {patient.email}
        </p>
        <p className="patient-blood-type">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          Blood Type: {patient.medicalInfo?.bloodType}
        </p>
      </div>
      
      <div className="patient-card-footer">
        <button 
          className="view-details-btn"
          onClick={() => onViewDetails(patient)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default PatientCard;
