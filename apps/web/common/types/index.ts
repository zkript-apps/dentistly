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
  clinicId: string;
  lastName: string;
  firstName: string;
  middleName: string;
  DoB: string;
  age: number;
  gender: string;
  address: string;
  status: string;
  clinic: string;
  relativesContactInfo: {
    name: string,
    contactNumber: string,
    relationship: string
    };
  deletedAt?: string;
  updatedAt?: string;
  createdAt?: string;
}
