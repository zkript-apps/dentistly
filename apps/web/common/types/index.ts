export interface IPatient {
clinicId: string,
lastName: string,
firstName: string,
middleName: string,
DoB: string,
gender: 'Male' | 'Female',
address: string,
status: 'Married' | 'Single' | 'Divorced',
relativesContactInfo: {
  name: string,
  contactNumber: string,
  relationshitL: string
},}
export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUser {
  id?: number;
  role?: any;
  registrationType?: any;
  address?: string;
  conatctNumber?: number;
  birthDate?: string;
  createdAt?: string;
  deletedAt?: string;
  updatedAt?: string;
}
