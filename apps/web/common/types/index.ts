export interface IPatient {
  clinicId: string;
  lastName: string;
  firstName: string;
  middleName: string;
  DoB: string;
  gender: "Male" | "Female";
  address: string;
  status: "Married" | "Single" | "Divorced";
  relativesContactInfo: {
    name: string;
    contactNumber: string;
    relationshitL: string;
  };
}
export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUser {
  id?: number;
  role?: any;
  registrationType?: any;
  address?: string;
  contactNumber?: number;
  birthDate?: string;
  createdAt?: string;
  deletedAt?: string;
  updatedAt?: string;
}

export interface ICheckup {
  clinicId: string;
  cost: number;
  paymentStatus: "Unpaid" | "Paid" | "Partially Paid";
  findings: string;
  procedureId: string;
  patiendId: string;
}

export interface IUpdateCheckup {
  id: string;
  clinicId: string;
  cost: number;
  paymentStatus: "Unpaid" | "Paid" | "Partially Paid";
  findings: string;
  procedureId: string;
  patiendId: string;
}
export interface IDeleteCheckup {
  id: string;
}