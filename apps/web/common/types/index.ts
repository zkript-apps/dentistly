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

export interface ICheckup {
clinicId: string,
cost: number,
paymentStatus: string,
findings: string,
procedureId: string,
patientId: string
}

export interface IUpdateCheckup {
  id: string,
  clinicId: string,
  cost: number,
  paymentStatus: string,
  findings: string,
  procedureId: string,
  patientId: string
  }
  export interface IDeleteCheckup {
    id: string,
    }