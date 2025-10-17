import { useState, useEffect } from 'react';
import { Patient } from '../types/patient';
import { patientService } from '../services/patientService';
import SearchBar from '../components/SearchBar';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import NewPatientModal from '../components/NewPatientModal';

function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewPatientModalOpen, setIsNewPatientModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPatients();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPatients(patients);
    } else {
      const filtered = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phone.includes(searchTerm)
      );
      setFilteredPatients(filtered);
    }
  }, [searchTerm, patients]);

  const loadPatients = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await patientService.getPatients();
      setPatients(JSON.parse(localStorage.getItem('patients') || "null") || data);
      setFilteredPatients(JSON.parse(localStorage.getItem('patients') || "null") || data);
    } catch (err) {
      setError('Failed to load patients. Please try again.');
      console.error('Error loading patients:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleViewDetails = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  const handleAddNewPatient = () => {
    setIsNewPatientModalOpen(true);
  };

  const handleCloseNewPatientModal = () => {
    setIsNewPatientModalOpen(false);
    setSelectedPatient(null);
  };

  if (loading) {
    return (
      <div className="patients-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading patients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patients-page">
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={loadPatients}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="patients-page">
      {/* Header Section */}
      <div className="patients-header">
        <div className="header-content">
          <h1>Patient Records</h1>
          <p>Manage and view patient information</p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="patients-controls">
        <div className="controls-grid">
          <div className="search-section">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              placeholder="Search by name, email, or phone..."
            />
          </div>
          <div className="stats-section">
            <div className="patients-stats">
              <div className="stat-item">
                <span className="stat-number">{patients.length}</span>
                <span className="stat-label">Total Patients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{filteredPatients.length}</span>
                <span className="stat-label">Showing</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{patients.length - filteredPatients.length}</span>
                <span className="stat-label">Filtered Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary add-new-patient-btn" onClick={handleAddNewPatient}>
        Add New Patient
      </button>

      {/* Main Content Section */}
      <div className="patients-main">
        <div className="patients-grid">
          {filteredPatients.length === 0 ? (
            <div className="no-results">
              <div className="no-results-content">
                <div className="no-results-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
                <h3>No patients found</h3>
                <p>
                  {searchTerm 
                    ? `No patients match "${searchTerm}". Try a different search term.`
                    : 'No patients available at the moment.'
                  }
                </p>
                {searchTerm && (
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setSearchTerm('')}
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          ) : (
            filteredPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onViewDetails={handleViewDetails}
              />
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      <PatientModal
        patient={selectedPatient}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <NewPatientModal
        isOpen={isNewPatientModalOpen}
        onClose={handleCloseNewPatientModal}
        patient={null}
      />
    </div>
  );
}

export default PatientsPage;
