export interface IUser {
  clinicId: string;
  username: string;
  email: string;
  password: string;
  role?: string;
  deletedAt?: string;
  updatedAt?: string;
  createdAt?: string;
}
