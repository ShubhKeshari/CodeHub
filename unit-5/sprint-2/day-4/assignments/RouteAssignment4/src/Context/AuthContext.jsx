import { useState } from "react";
import { createContext } from "react";
import { Navbar } from "../Components/Navbar";
import { Navigate } from "react-router-dom";
import { LoadingHandling } from "../Components/Loadinghandling";
import { ErrorHandling } from "../Components/Errorhandling";

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
  const init ={isAuth:false ,Token:""};
  const [user,setUser]= useState(init);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [products,setProducts] =useState([]);

  const handleLogIn=(payloads)=>{
    setUser({
        isAuth:true,
        Token:payloads,
    })
    // return  <Navigate to="/" />;
  }
  async function fetchData(){
    try {
      setLoading(true);
      setError(false);
      let res=await fetch(`https://reqres.in/api/products`)
      res= await res.json();
      setProducts(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
   
   }
  const handleLogOut=()=>{
    setUser(init);
  }
  // if(loading){
  //   <LoadingHandling />
  //  }
  //  if(error){
  //   <ErrorHandling />
  //  }

  return (
    <AuthContext.Provider value={{handleLogOut,handleLogIn,user,fetchData,products,error,loading}}>
        {children}
    </AuthContext.Provider>
  )
}