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
