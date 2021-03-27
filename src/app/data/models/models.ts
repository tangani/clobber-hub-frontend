import { IBaseModel, IProduct, IUser, ICategory } from './imodels';

export class BaseModel implements IBaseModel {
  id = '';
  title = '';
  category = '';
  isActive = false;
}

export class Product extends BaseModel implements IProduct {
  price = '';
  featured = false;
  rating = 0;
  description = '';
  label = '';
}

export class User implements IUser {
  id = '';
  fullName = '';
  lastName = '';
  emailAddress = '';
  phoneNumber = '';
  country = '';
  city = '';
  password = '';
  newPassword = '';
  role = '';
  createdDate = new Date();
}

export class Category implements ICategory {
  name = '';
  department = '';
}


