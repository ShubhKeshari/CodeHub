
import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const location = useLocation();
  console.log(location);
  const hideNavbarPaths: string[] = [
    "/adminDashboard",
    "/adminProducts",
    "/addProduct",
    "/adminUsers",
    "/settings",
  ];

  const isAdminRoute: boolean = hideNavbarPaths.includes(location.pathname);
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <AllRoutes />
   
      
    </>
  );
}

export default App;

