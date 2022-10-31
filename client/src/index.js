import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsContextProver from "./component/context/products-context";
import CartContextProvider from "./component/context/cart-context";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UserContextProvider from "./component/context/user-context";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ProductsContextProver>
      <CartContextProvider>
        <Elements stripe={stripePromise}>
          <UserContextProvider>
              <App />
          </UserContextProvider>
        </Elements>
      </CartContextProvider>
    </ProductsContextProver>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
