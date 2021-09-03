export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
  email: string;
  phone: string;
  address: string;
  ticket: string;
  present: boolean;
  token?: string;
}
