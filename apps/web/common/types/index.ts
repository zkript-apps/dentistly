export interface IUserRegister {
  clinicName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
 

}

export interface IUser {
  role?: string;
  deletedAt?: string;
  updatedAt?: string;
  createdAt?: string;
}
