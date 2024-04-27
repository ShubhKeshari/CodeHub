import { useContext } from "react";
import { AuthContext } from "../Components/Auth";

export function Home() {
  const {userDetails}= useContext(AuthContext);
    return (
      <>
        {userDetails.isAuth?<h1>Welcome {userDetails.username}</h1>:<h1>Welcome User</h1>}
      </>
    );
  }
  

  