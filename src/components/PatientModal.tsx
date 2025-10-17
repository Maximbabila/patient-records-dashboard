import { PatientModalProps } from '../types/patient';

function PatientModal({ patient, isOpen, onClose }: PatientModalProps) {
  if (!isOpen || !patient) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Patient Details</h2>
          <button className="close-button" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <div className="patient-modal-header">
            <div className="patient-modal-avatar">
              {patient.photoUrl ? (
                <img 
                  src={patient.photoUrl} 
                  alt={patient.name}
                  className="patient-modal-photo"
                />
              ) : (
                <span className="patient-modal-initials">
                  {patient.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
            <div className="patient-modal-info">
              <h3>{patient.name}</h3>
              <p className="patient-modal-age">Age: {patient.age} years</p>
              <span className={`status-badge status-${patient.status}`}>
                {patient.status}
              </span>
            </div>
          </div>
          
          <div className="patient-details-grid">
            <div className="detail-section">
              <h3>Personal Information</h3>
              <div className="detail-item">
                <label>Name:</label>
                <span>{patient.name}</span>
              </div>
              <div className="detail-item">
                <label>Age:</label>
                <span>{patient.age} years</span>
              </div>
              <div className="detail-item">
                <label>Email:</label>
                <span>{patient.email}</span>
              </div>
              <div className="detail-item">
                <label>Phone:</label>
                <span>{patient.phone}</span>
              </div>
              <div className="detail-item">
                <label>Status:</label>
                <span className={`status-badge status-${patient.status}`}>
                  {patient.status}
                </span>
              </div>
            </div>

            <div className="detail-section">
              <h3>Address</h3>
              <div className="detail-item">
                <label>Street:</label>
                <span>{patient.address.street}</span>
              </div>
              <div className="detail-item">
                <label>City:</label>
                <span>{patient.address.city}</span>
              </div>
              <div className="detail-item">
                <label>State:</label>
                <span>{patient.address.state}</span>
              </div>
              <div className="detail-item">
                <label>Zip Code:</label>
                <span>{patient.address.zipcode}</span>
              </div>
            </div>

            <div className="detail-section">
              <h3>Medical Information</h3>
              <div className="detail-item">
                <label>Blood Type:</label>
                <span>{patient.medicalInfo.bloodType}</span>
              </div>
              <div className="detail-item">
                <label>Allergies:</label>
                <span>{patient.medicalInfo.allergies.join(', ')}</span>
              </div>
              <div className="detail-item">
                <label>Conditions:</label>
                <span>{patient.medicalInfo.conditions.join(', ')}</span>
              </div>
              {patient.height && (
                <div className="detail-item">
                  <label>Height:</label>
                  <span>{patient.height} cm</span>
                </div>
              )}
              {patient.weight && (
                <div className="detail-item">
                  <label>Weight:</label>
                  <span>{patient.weight} kg</span>
                </div>
              )}
              {patient.eyeColor && (
                <div className="detail-item">
                  <label>Eye Color:</label>
                  <span>{patient.eyeColor}</span>
                </div>
              )}
              {patient.hairColor && (
                <div className="detail-item">
                  <label>Hair:</label>
                  <span>{patient.hairColor} {patient.hairType}</span>
                </div>
              )}
              {patient.birthDate && (
                <div className="detail-item">
                  <label>Birth Date:</label>
                  <span>{new Date(patient.birthDate).toLocaleDateString()}</span>
                </div>
              )}
              {patient.gender && (
                <div className="detail-item">
                  <label>Gender:</label>
                  <span>{patient.gender}</span>
                </div>
              )}
            </div>

            <div className="detail-section">
              <h3>Emergency Contact</h3>
              <div className="detail-item">
                <label>Name:</label>
                <span>{patient.emergencyContact.name}</span>
              </div>
              <div className="detail-item">
                <label>Relationship:</label>
                <span>{patient.emergencyContact.relationship}</span>
              </div>
              <div className="detail-item">
                <label>Phone:</label>
                <span>{patient.emergencyContact.phone}</span>
              </div>
            </div>

            <div className="detail-section">
              <h3>Visit Information</h3>
              <div className="detail-item">
                <label>Last Visit:</label>
                <span>{new Date(patient.lastVisit).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientModal;
