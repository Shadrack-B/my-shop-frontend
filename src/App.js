import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import AppContext from "./contexts/appContext";

function App() {
    const [cart, setCart] = useState({
        "6253f96f7391511e6e9cf7b4": 1,
        "6253f96f7391511e6e9cf7b6": 4,
        "6253f96f7391511e6e9cf7b5": 3,
    });
    const [category, setCategory] = useState("");
    const [showSideNav, setShowSideNav] = useState(false);
    const [statusInfo, setStatusInfo] = useState({
        show: false,
        content: null,
    });

    useEffect(() => {
        if (localStorage.getItem("cart")) {
            // console.log("Cart", localStorage.getItem("cart"));
            setCart(JSON.parse(localStorage.getItem("cart")));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    return (
        <Router>
            <AppContext.Provider
                value={{
                    cart,
                    setCart,
                    category,
                    setCategory,
                    showSideNav,
                    setShowSideNav,
                    statusInfo,
                    setStatusInfo,
                }}
            >
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Layout>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
