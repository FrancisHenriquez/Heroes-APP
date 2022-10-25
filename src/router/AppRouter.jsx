import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/components/pages/LoginPage'
import { DCpage } from '../heroes/pages/DCpage'
import { MarvelPage } from '../heroes/pages/MarvelPage'

export const AppRouter = () => {
  return (
   <>
   <Routes>
            <Route path="marvel" element={ <MarvelPage/>} />
            <Route path="/DC" element={ <DCpage/>} />
            <Route path="/login" element={ <LoginPage/>} />
            <Route path="/" element={ <Navigate to="/marvel" />} />
            
   </Routes>
            
          
            
   </>
  )
}
