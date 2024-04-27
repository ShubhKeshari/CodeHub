import { useContext } from "react";
import { AuthContext } from "../Components/Auth";

export function Users() {
  const {userDetails,handleLogOut} = useContext(AuthContext);
 // console.log(userDetails)
    return (
      <>
      <div>
       <h2>{userDetails.username}</h2>
       <button onClick={handleLogOut}>LogOut</button>
      </div>
      </>
    );
  }
  
 
  