import React from 'react'
import { About } from './about/About'
import { Inicio } from './inicio/Inicio'
import { Proyectos } from './proyectos/Proyectos'

import './HomeScreen.scss'; 

export const HomeScreen = () => {
  return (
    <div className='homeScreenContainer'>
      <Inicio />
      <About />
      <Proyectos />
    </div>
  )
}
