import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useState } from "react";
import AppContext from "./contexts/appContext";

function App() {
    const [cart, setCart] = useState([
        { id: "6253f96f7391511e6e9cf7b4", amount: 2 },
    ]);
    const [category, setCategory] = useState("");
    return (
        <Router>
            <AppContext.Provider
                value={{ cart, setCart, category, setCategory }}
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
