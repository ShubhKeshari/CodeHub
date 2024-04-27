import "./styles.css";
import React, from "react";
import { Provider } from "react-redux";
import store  from "./redux/store";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import User from "./components/User";
import ThemeSwitch from "./components/Theme";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
      </div>
      <div className="main-content">
        <ThemeSwitch />
        <Cart />
        <User />
      </div>
    </Provider>
  );
}
