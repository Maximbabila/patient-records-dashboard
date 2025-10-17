import React, { useEffect, useState } from 'react';
import './PatientForm.css';
import { patientService } from '../services/patientService';
import { Patient } from '../types/patient';

interface PatientFormData {
  // Personal Information
  name: string;
  age: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  
  // Address
  street: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Medical Information
  bloodType: string;
  allergies: string;
  conditions: string;
  height: string;
  weight: string;
  eyeColor: string;
  hair: string;
  birthDate: string;
  gender: 'male' | 'female' | 'other';
  
  // Emergency Contact
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactPhone: string;
}


export default function PatientForm() {
  const [isNewPatientModalOpen, setIsNewPatientModalOpen] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([])
  const loadPatients = async () => {
    try {
      const data = await patientService.getPatients();
      setPatients(JSON.parse(localStorage.getItem('patients') || JSON.stringify(data)));
      // setFilteredPatients(data);
    } catch (err) {
      // setError('Failed to load patients. Please try again.');
      console.error('Error loading patients:', err);
    }
  };
  useEffect(()=>{
    loadPatients();
  }, [])
  console.log("patients", patients);
  
  const [formData, setFormData] = useState<PatientFormData>({
    name: '',
    age: '',
    email: '',
    phone: '',
    status: 'active',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    bloodType: '',
    allergies: '',
    conditions: '',
    height: '',
    weight: '',
    eyeColor: '',
    hair: '',
    birthDate: '',
    gender: 'female',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    localStorage.setItem('patients', JSON.stringify([...patients, formData]));
    alert('Patient information submitted successfully!');
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      status: 'active',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      bloodType: '',
      allergies: '',
      conditions: '',
      height: '',
      weight: '',
      eyeColor: '',
      hair: '',
      birthDate: '',
      gender: 'female',
      emergencyContactName: '',
      emergencyContactRelationship: '',
      emergencyContactPhone: ''
    });
    setIsNewPatientModalOpen(false);
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h1>Patient Information Form</h1>
            <p>Complete all fields to register a new patient</p>
          </div>
          
          <div className="form-content">
            {/* Personal Information */}
            <section className="form-section">
              <h2 className="section-title">Personal Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Age *</label>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Birth Date *</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Status *</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Address */}
            <section className="form-section">
              <h2 className="section-title">Address</h2>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label className="form-label">Street *</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Zip Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Medical Information */}
            <section className="form-section">
              <h2 className="section-title">Medical Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Blood Type *</label>
                  <input
                    type="text"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    placeholder="e.g., O-, A+, B+"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Height (cm) *</label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Weight (kg) *</label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Eye Color *</label>
                  <input
                    type="text"
                    name="eyeColor"
                    value={formData.eyeColor}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Hair</label>
                  <input
                    type="text"
                    name="hair"
                    value={formData.hair}
                    onChange={handleChange}
                    placeholder="e.g., Brown Curly"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Allergies</label>
                  <input
                    type="text"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    placeholder="e.g., Latex, Penicillin"
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width">
                  <label className="form-label">Conditions</label>
                  <textarea
                    name="conditions"
                    value={formData.conditions}
                    onChange={handleChange}
                    placeholder="e.g., Hypertension, Diabetes"
                    rows={3}
                    className="form-textarea"
                  />
                </div>
              </div>
            </section>

            {/* Emergency Contact */}
            <section className="form-section">
              <h2 className="section-title">Emergency Contact</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Relationship *</label>
                  <input
                    type="text"
                    name="emergencyContactRelationship"
                    value={formData.emergencyContactRelationship}
                    onChange={handleChange}
                    placeholder="e.g., Parent, Spouse, Sibling"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </section>

            <div className="form-actions">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Submit Patient Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}