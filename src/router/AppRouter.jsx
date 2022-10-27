import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import { LoginPage } from '../auth/components/pages/LoginPage'
import { HeroesRoutes } from '../heroes'


import { Navbar } from '../UI/components'

export const AppRouter = () => {
  return (
   <>
   <Routes>
       
            <Route path="/login" element={ <LoginPage/>} />   
            <Route path="/*" element={ <HeroesRoutes/>} />
   </Routes>
             
   </>
  )
}
