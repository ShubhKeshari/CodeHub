
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { legacy_createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// Action Types
const SET_THEME = "SET_THEME";
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_USER = "UPDATE_USER";

// Theme Reducer
function themeReducer(state = "light-mode", action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}

// Cart Reducer
function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}

// User Reducer
function userReducer(state = { username: null, loggedIn: false }, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  user: userReducer,
});
const store = legacy_createStore(rootReducer);

function Sidebar() {
  const themeState = useSelector((state) => state.theme);
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);

  return (
    <pre className="sidebar left-sidebar">
      <strong>Theme State:</strong>
      {JSON.stringify(themeState, null, 2)}
      <hr />
      <strong>Cart State:</strong>
      {JSON.stringify(cartState, null, 2)}
      <hr />
      <strong>User State:</strong>
      {JSON.stringify(userState, null, 2)}
    </pre>
  );
}

// ThemeSwitch Component
function ThemeSwitch() {
  const dispatch = useDispatch();
  return (
    <div className="theme-switcher">
      <button
        onClick={() => dispatch({ type: "SET_THEME", payload: "light-mode" })}
      >
        Light Mode
      </button>
      <button
        onClick={() => dispatch({ type: "SET_THEME", payload: "dark-mode" })}
      >
        Dark Mode
      </button>
    </div>
  );
}

// Cart Component
function Cart() {
  const dispatch = useDispatch();
  const addToCart = (itemName) => {
    if (itemName) {
      dispatch({ type: "ADD_TO_CART", payload: itemName });
    }
  };

  return (
    <div className="cart-adder">
      <input type="text" id="itemName" placeholder="Item Name" />
      <button
        onClick={() => addToCart(document.getElementById("itemName").value)}
      >
        Add to Cart
      </button>
    </div>
  );
}

// User Component
function User() {
  const dispatch = useDispatch();
  const login = (username) => {
    if (username) {
      dispatch({ type: "UPDATE_USER", payload: { username, loggedIn: true } });
    }
  };
  const logout = () => {
    dispatch({
      type: "UPDATE_USER",
      payload: { username: null, loggedIn: false },
    });
  };

  return (
    <div className="login-logout">
      <input type="text" id="userName" placeholder="Username" />
      <button onClick={() => login(document.getElementById("userName").value)}>
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <ThemeSwitch />
          <Cart />
          <User />
        </div>
      </div>
    </Provider>
  );
}
