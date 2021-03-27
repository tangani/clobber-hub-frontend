export interface IBaseModel {
  id: string;
  title: string;
  category: string;
  isActive: boolean;
}

export interface IProduct extends IBaseModel {
  price: string;
  featured: boolean;
  rating: number;
  description: string;
  label: string;
}

export interface IUser {
  id: string;
  fullName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  country: string;
  city: string;
  password: string;
  newPassword: string;
  role: string;
  createdDate: Date;
}

export interface ICategory {
  name: string;
  department: string;
}

