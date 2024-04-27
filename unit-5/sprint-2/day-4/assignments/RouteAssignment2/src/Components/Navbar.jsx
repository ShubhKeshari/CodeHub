import { NavLink } from "react-router-dom"

const listOfLinks=[
    {
        to:"/",
        displayText:"Home",
    },
    {
        to:"/about",
        displayText:"About"
    },
    {
        to:"/products",
        displayText:"Products"
    },
    {
        to:"/contact",
        displayText:"Contacts"
    },
    {
        to:"*",
        displayText:"new Link"
    }
]

export const Navbar=()=>{
    return(
        <div>
            {
                listOfLinks.map(({to,displayText} ,index)=>{
                    return(
                        <NavLink  key={index} to={to} style={({isActive})=>isActive?{color:"red"}:{color:"black"}} >{displayText}</NavLink>
                    )
                })
            }
        </div>
    )
}