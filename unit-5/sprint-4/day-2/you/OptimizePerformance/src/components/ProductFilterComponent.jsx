import { useMemo,useState } from "react";
const ProductFilterComponent = () => {
    const [products, setProducts] = useState([
      { id: 1, name: "Laptop" },
      { id: 2, name: "Smartphone" },
      { id: 3, name: "Tablet" },
      { id: 4, name: "Headphones" },
      { id: 5, name: "Smartwatch" },
      { id: 6, name: "Camera" },
      { id: 7, name: "Keyboard" },
      { id: 8, name: "Mouse" },
      { id: 9, name: "Speaker" },
      { id: 10, name: "Charger" },
    ]);
    const [query, setQuery] = useState("");
    const [darkMode, setDarkMode] = useState(false); // New state for dark mode
  
    // useMemo to filter products based on the query
    // const filteredProducts = products.filter((product) => {
    //   console.log("Iterating through products to filter them...");
    //   return product.name.toLowerCase().includes(query.toLowerCase());
    // });

    //useMemo to store latest value
    const filteredProducts = useMemo(()=>products.filter((product) => {
        console.log("Iterating through products to filter them...");
        return product.name.toLowerCase().includes(query.toLowerCase());
      }),[query]
      );
    
    const toggleDarkMode = () => setDarkMode(!darkMode); // Function to toggle dark mode
  
    return (
      <div
        style={{
          padding: 16,
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <input
          type="text"
          placeholder="Search for a product"
          value={query}
          onChange={(e) =>setQuery(e.target.value) }
        />
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export {ProductFilterComponent}