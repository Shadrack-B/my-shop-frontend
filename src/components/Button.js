import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import BootstrapButton from "react-bootstrap/Button";
import AppContext from "../contexts/appContext";
import { HiMinus, HiPlus } from "react-icons/hi";

const Button = ({ productId }) => {
    const { cart, setCart } = useContext(AppContext);
    // const product = cart.filter((product) => product.id === productId);
    let amount = null;
    // if (product) {
    //     amount = product[0].amount;
    // }
    // console.log("Button product", amount);

    return (
        <div>
            {amount > 0 ? (
                <div className="cart-item-amount">
                    <BootstrapButton
                        onClick={() => {
                            // setAmount((prevAmount) => prevAmount - 1);
                        }}
                    >
                        <HiMinus />
                    </BootstrapButton>
                    <Card.Subtitle className="cart-item-amount-text">
                        {amount}
                    </Card.Subtitle>
                    <BootstrapButton
                        onClick={() => {
                            // setAmount((prevAmount) => prevAmount + 1);
                        }}
                    >
                        <HiPlus />
                    </BootstrapButton>
                </div>
            ) : (
                <BootstrapButton
                    onClick={() => {
                        setCart((prevValue) => [...prevValue, productId]);
                        // setAmount((prevAmount) => prevAmount + 1);
                    }}
                >
                    Add to Cart
                </BootstrapButton>
            )}
        </div>
    );
};

export default Button;
