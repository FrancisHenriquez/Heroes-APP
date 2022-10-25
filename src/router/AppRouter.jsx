import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/components/pages/LoginPage'
import { DCpage, MarvelPage } from '../heroes/pages'

import { Navbar } from '../UI/components'

export const AppRouter = () => {
  return (
   <>
   <Navbar />
   <Routes>
            <Route path="/marvel" element={ <MarvelPage/>} />
            <Route path="/DC" element={ <DCpage/>} />
            <Route path="/login" element={ <LoginPage/>} />
            <Route path="/" element={ <Navigate to="/marvel" />} />
            
   </Routes>
            
          
            
   </>
  )
}
