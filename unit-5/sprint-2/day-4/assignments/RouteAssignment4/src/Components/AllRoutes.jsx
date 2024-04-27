import {Routes , Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { LogIn } from '../pages/LogIn'
import { Contact } from '../pages/Contact'
import { Products } from '../pages/Products'
import { About } from '../pages/About'
import { PrivateRoute } from './PrivateRoute'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
export const AllRoutes =()=>{
    const {user} = useContext(AuthContext);
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        {/* {!user.isAuth&&<Route path="/logIn" element={<LogIn/>}/>} */}
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/product" element={<PrivateRoute><Products/></PrivateRoute>}/>
        <Route path="/abouT" element={<About/>}/>
        </Routes>
    )
}