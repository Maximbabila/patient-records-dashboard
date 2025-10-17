import { Patient } from '../types/patient';

// DummyJSON API base URL
const API_BASE_URL = 'https://dummyjson.com';

// Interface for DummyJSON user data
interface DummyJsonUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
}

// Interface for DummyJSON API response
interface DummyJsonResponse {
  users: DummyJsonUser[];
  total: number;
  skip: number;
  limit: number;
}

// Medical data arrays for generating realistic patient information
const allergies = ['Penicillin', 'Latex', 'Peanuts', 'Shellfish', 'Dust', 'Pollen', 'None'];
const conditions = ['Diabetes', 'Hypertension', 'Asthma', 'Arthritis', 'Heart Disease', 'None'];
const relationships = ['Spouse', 'Parent', 'Child', 'Sibling', 'Friend', 'Other'];
const statuses: ('active' | 'inactive' | 'pending')[] = ['active', 'inactive', 'pending'];

// Transform DummyJSON user data to our Patient interface
const transformUserToPatient = (user: DummyJsonUser): Patient => {
  // Generate random medical data based on user ID for consistency
  const allergy = allergies[user.id % allergies.length];
  const condition = conditions[user.id % conditions.length];
  const relationship = relationships[user.id % relationships.length];
  const status = statuses[user.id % statuses.length];
  
  // Generate last visit date (within last year)
  const lastVisit = new Date(Date.now() - (user.id * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
  
  // Generate emergency contact phone
  const emergencyPhone = `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;

  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    age: user.age,
    email: user.email,
    phone: user.phone,
    address: {
      street: user.address.address,
      city: user.address.city,
      state: user.address.stateCode,
      zipcode: user.address.postalCode
    },
    medicalInfo: {
      bloodType: user.bloodGroup,
      allergies: [allergy],
      conditions: [condition]
    },
    emergencyContact: {
      name: `Emergency Contact ${user.firstName}`,
      relationship,
      phone: emergencyPhone
    },
    lastVisit,
    status,
    // Use the image URL from DummyJSON
    photoUrl: user.image,
    // Additional medical data from DummyJSON
    height: user.height,
    weight: user.weight,
    eyeColor: user.eyeColor,
    hairColor: user.hair.color,
    hairType: user.hair.type,
    birthDate: user.birthDate,
    gender: user.gender
  };
};

// Fetch users from DummyJSON API
const fetchUsers = async (): Promise<DummyJsonUser[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: DummyJsonResponse = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching users from DummyJSON:', error);
    throw new Error('Failed to fetch patient data from API');
  }
};

export const patientService = {
  async getPatients(): Promise<Patient[]> {
    try {
      const users = await fetchUsers();
      return users.map(transformUserToPatient);
    } catch (error) {
      console.error('Error in getPatients:', error);
      throw error;
    }
  },

  async searchPatients(query: string): Promise<Patient[]> {
    try {
      const users = await fetchUsers();
      const patients = users.map(transformUserToPatient);
      
      if (query.trim() === '') {
        return patients;
      }
      
      return patients.filter(patient =>
        patient.name.toLowerCase().includes(query.toLowerCase()) ||
        patient.email.toLowerCase().includes(query.toLowerCase()) ||
        patient.phone.includes(query)
      );
    } catch (error) {
      console.error('Error in searchPatients:', error);
      throw error;
    }
  }
};
