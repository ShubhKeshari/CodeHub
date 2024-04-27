import { useEffect, useState } from "react";

export const useLocalStorage=(key)=>{
    const [data, setData] = useState("");
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem(key))||"";
        setData(data);
    }, []);
    const setValue = (value)=>{
       localStorage.setItem(key, JSON.stringify(value));

    }
    return [data, setValue];
}