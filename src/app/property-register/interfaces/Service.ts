export enum CSSIcons {
    UTENSILS = 'fa-solid fa-utensils',
    WATER_LADDER = 'fa-solid fa-water-ladder',
    WIFI = 'fa-solid fa-wifi',
    SHIELD_DOG = 'fa-sharp fa-solid fa-shield-dog',
    BAN_SMOKING = 'fa-solid fa-ban-smoking',
    CAR_SIDE = 'fa-solid fa-car-side',
    DUMBBELL = 'fa-solid fa-dumbbell'
  }
  
export interface Service {
    title: string,
    icon: CSSIcons,
    activate: boolean
}
