export enum Role {
    OWNER = 'PROPIETARIO',
    TENANT = 'INQUILINO'
}

export interface User {
    name: string,
    user: string,
    email: string,
    password: string,
    role: Role
}