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

export interface IUserForgotPassword {
  email: string;
}
export interface IUserNewPassword {
  newPassword: string;
  confirmPassword: string;
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
  paymentStatus: string;
  findings: string;
  procedureId: string;
  patientId: string;
}

export interface IUpdateCheckup {
  id: string;
  clinicId: string;
  cost: number;
  paymentStatus: string;
  findings: string;
  procedureId: string;
  patientId: string;
}
export interface IDeleteCheckup {
  id: string;
}

export interface IOperation {
  clinic: string;
  operationName: string;
  actions: "Create" | "Read" | "Update" | "Delete";
}

export interface IUpdateProcedure {
  procedureId: string;
  procedureName: string;
  description: string;
}
