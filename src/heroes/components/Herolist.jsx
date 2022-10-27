import React from 'react'
import { getHeroesbyPublisher } from '../helpers'

export const Herolist = ({ publisher }) => {
    const heroes = getHeroesbyPublisher( publisher )
  return (
    <ul>
    {
        heroes.map(
            hero => (
                <li key={ hero.id }>
                    { hero.superhero }
                </li>
            )
        )
    }
    </ul>
  )
}
