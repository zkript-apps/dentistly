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
  lastName: string;
  firstName: string;
  middleName: string;
  DoB: Date;
  age: Number;
  gender: String;
  address: String;
  status: String;
  clinic: String;
  relativesContactInfo: String;
  deletedAt?: string;
  updatedAt?: string;
  createdAt?: string;
}
