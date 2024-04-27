import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Products } from "../pages/Products"
import { Contact } from "../pages/Contact"
import { About } from "../pages/About"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<p>Page Not FOund 404</p>} />
        </Routes>
    )
}