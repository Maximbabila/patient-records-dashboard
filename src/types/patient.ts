export interface Patient {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  medicalInfo: {
    bloodType: string;
    allergies: string[];
    conditions: string[];
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  lastVisit: string;
  status: 'active' | 'inactive' | 'pending';
  photoUrl?: string;
  // Additional medical data from DummyJSON
  height?: number;
  weight?: number;
  eyeColor?: string;
  hairColor?: string;
  hairType?: string;
  birthDate?: string;
  gender?: string;
}

export interface PatientCardProps {
  patient: Patient;
  onViewDetails: (patient: Patient) => void;
}

export interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

export interface PatientModalProps {
  patient: Patient | null;
  isOpen: boolean;
  onClose: () => void;
}
