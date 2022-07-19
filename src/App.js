import React from "react";
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextReducer from "./context/CartContextReducer";
import { Navigate, Routes, Route } from "react-router-dom";

//Component
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import ScrollTopMe from "./components/ScrollTopMe";
const App = () => {
    return (
        <ProductContextProvider>
            <CartContextReducer>
                <ScrollTopMe/>
                <Navbar />
                <Routes>
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/products" element={<Store />} />
                    <Route path="/cart" element={<ShopCart />} />
                    <Route path="/*" element={<Navigate to="/products" />} />
                </Routes>
            </CartContextReducer>
        </ProductContextProvider>
    );
};

export default App;
