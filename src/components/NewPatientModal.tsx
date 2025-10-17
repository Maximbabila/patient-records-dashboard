import { PatientModalProps } from "../types/patient";
import PatientForm from "./PatientForm";

function NewPatientModal({ isOpen, onClose }: PatientModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Add New Patient</h2>
            <button className="close-button" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <PatientForm />
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

export default NewPatientModal;