
import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../UI/components"
import { DCpage, HeroPage, MarvelPage, SearchPage } from "../pages"


export const HeroesRoutes = () => {
  return (
   <>
   <Navbar />

   <div className="container">
   <Routes>
            <Route path="/marvel" element={ <MarvelPage/>} />
            <Route path="/DC" element={ <DCpage/>} />
            <Route path="/" element={ <Navigate to="login" />} />
            <Route path="Hero/:id" element={ <HeroPage/>} />
            <Route path="/Search" element={ <SearchPage/>} />
   </Routes>
   </div>
  
   
   </>
  )
}
