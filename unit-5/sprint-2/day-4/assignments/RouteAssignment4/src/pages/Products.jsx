import { useContext } from "react"
import { useCallback } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingHandling } from "../Components/Loadinghandling";
import { ErrorHandling } from "../Components/Errorhandling";

export const Products =()=>{
    const {user,fetchData,products,loading,error} =useContext(AuthContext);
     const navigate = useNavigate();
  

//    async function fetchData(){
//     setLoading(true);
//      let res=await fetch(`https://reqres.in/api/products`)
//      res= await res.json();
//      setProducts(res.data);
//      console.log(res.data);
//    }
   useEffect(()=>{
       fetchData();
   },[])

   if(loading){
    return <LoadingHandling />
   }
   if(error){
    return <ErrorHandling />
   }

return(
    <div>
      {
        products.map((product,index)=>{
            return(
                <div key={index}>
                    <h1>{product.name}</h1>
                    <p>{product.year}</p>
                    <p>{product.pantone_value}</p>
                </div>
            )
        })
      }
    </div>
    
)
}