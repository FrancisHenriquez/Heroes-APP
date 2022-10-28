import { heroes } from "../Data/Hero"

export const getHeroById = ( id ) => {
    
    return heroes.find( hero => hero.id === id)
}