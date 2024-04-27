import { useContext } from "react";
import "./App.css";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeProvider";
import { AuthContext } from "./context/AuthContextProvider";
import { LoginForm } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./components/Dashboard";

function App() {
  const { theme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div
      className="ThemeStyle"
      style={{ backgroundColor: theme == "dark" ? "black" : "yellow" }}
    >
      <div className="App">
        <Navbar />
        {isLoggedIn.isAuth ? <Dashboard /> : <LoginForm />}
      </div>
    </div>
  );
}

export default App;
