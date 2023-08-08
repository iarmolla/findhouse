import { TypeOfHouse } from "src/app/property-register/interfaces/Ownership";
import { Service } from "src/app/property-register/interfaces/Service";
import { User } from "./User";

export interface Owner {
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
    user: User
}