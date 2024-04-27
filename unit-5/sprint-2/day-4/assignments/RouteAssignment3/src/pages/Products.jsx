import { useContext } from "react"
import { useCallback } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useState } from "react";
import { useEffect } from "react";

export const Products =()=>{
    const {user} =useContext(AuthContext);
    const [products,setProducts] =useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

   async function fetchData(){
    setLoading(true);
     let res=await fetch(`https://reqres.in/api/products`)
     res= await res.json();
     setProducts(res.data);
     console.log(res.data);
   }
   useEffect(()=>{
       fetchData();
   },[])

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