import React from "react";
import { useState, useEffect, useRef } from "react";
function HomePage(){
    const [searchCountry, setSearchCountry] = useState("");
    const searchInputRef = useRef(null);
    const [searchHistory, setSearchHistory] = useState([]);
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setSearchCountry(event.target.value);
    };
    useEffect(() => {
        searchInputRef.current.focus();
    },[]);
    const handleSearch = async()=>{
        try {
            console.log(searchCountry)
            const response = await fetch(`https://restcountries.com/v3.1/currency/${searchCountry}`);
            const data = await response.json();
            setSearchHistory([...searchCountry,...data]);
            console.log(data);
        } catch (error){
            console.log(error);
        }
    }
    return(
        <div>
            <h1>Welcome to the Restcountries</h1>
            <input type="text" ref={searchInputRef}onChange = {handleInputChange}
            value={searchCountry}
            placeholder="Type any text here"/>
            <button onClick={handleSearch}>Search</button>
            
                {searchHistory.map((item) => (
                    <div key={item.name}>
                        <h2>{item.name}</h2>
                        <img src={item.flag} alt={item.name}/>
                    </div>
                ))}
            
        </div>
    );
}
export { HomePage };