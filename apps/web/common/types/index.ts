export interface IUser {
  clinicId: string;
  username: string;
  email: string;
  password: string;
  role: string;
  deletedAt?: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface IPatient {
  patientId: string;
  name: string;
  email: string;
  deletedAt?: string;
  updatedAt?: string;
  createdAt?: string;
}
