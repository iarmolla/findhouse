// import { User } from 'src/app/property-register/interfaces/User';
import { Service } from "./Service";

export enum TypeOfHouse {
    APARTMENT,
    HOUSE,
    CABIN
}

export interface ResOwnership {
  success:boolean,
  message: string,
  data: Ownership[]
}
export interface Ownership {
    userId: string,
    ownershipId: string,
    createAt: null,
    modifiedAt: null,
    country: string,
    state: string,
    city: string,
    address: string,
    house_type: TypeOfHouse,
    images: any,
    rooms: number,
    bathrooms: number,
    house_area: number,
    description: string,
    price: number,
    deposit: number,
    payment_conditions: string,
    additional_services: Service[],
    additional_fees: [],
    policies_cancellation: string,
    latitude: number,
    longitude: number,
    pets_allowed: boolean,
    smoking_policy: string,
    available_date: number,
    user?:UserOwnership
}

export interface UserOwnership {
  id: string,
  userId: string,
  username: string,
  password: string,
  name: string,
  email: string,
  phone: string,
  role: string,
  registerDate: Date,
  birthDate:Date,
  description:string,
}
