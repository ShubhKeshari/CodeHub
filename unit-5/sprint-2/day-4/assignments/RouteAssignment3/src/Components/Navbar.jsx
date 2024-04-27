import { NavLink } from "react-router-dom"

const listOfLinks=[
    {
       to:"/",
       text:"Home",
    },
    {
        to:"/abouT",
        text:"About",
    },
    {
        to:"/logIn",
        text:"LogIn",
    },
    {
        to:"/contacts",
       text:"Contacts",
    },
    {
        to:"/product",
        text:"Products",
    },
]

export const Navbar =()=>{
    return(
        <div>
            {
                listOfLinks.map((link,index)=>{
                    return(
                        <NavLink key={index} to={link.to}>{link.text}</NavLink>
                    )
                })
            }
        </div>
    )
}