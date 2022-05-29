import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../contexts/appContext";
import { HiMinus, HiPlus } from "react-icons/hi";

const Button = styled.button`
    padding: ${(props) => (props.variant === "link" ? "0.5em 0" : "1em 2em")};
    color: ${(props) =>
        props.variant === "link" || props.variant === "outlined"
            ? "rgba(211, 126, 106, 1)"
            : "rgba(250, 250, 250, 1)"};
    background-color: ${(props) =>
        props.variant === "primary"
            ? "rgba(211, 126, 106, 1)"
            : "rgba(250, 250, 250, 0)"};
    border: ${(props) =>
        props.variant === "outlined"
            ? "1px solid rgba(211, 126, 106, 1)"
            : "none"};
    border-radius: 0.5em;
    box-shadow: ${(props) =>
        props.variant === "link"
            ? null
            : "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 3px 3px rgba(0, 0, 0, 0.08), 0px 1px 8px rgba(0, 0, 0, 0.1)"};
    font-size: 1rem;
    cursor: pointer;
`;

const AmountButton = styled(Button)`
    padding: 0.5em 0.5em 0.25em 0.5em;
`;

export const EditAmountButton = ({ productId }) => {
    const { cart, setCart } = useContext(AppContext);
    let amount = cart[productId];
    // console.log(amount);
    return (
        <div style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
            <AmountButton
                variant="primary"
                onClick={() => {
                    setCart((prevValue) => ({
                        ...prevValue,
                        [productId]: amount - 1,
                    }));

                    if (amount < 0) {
                        setCart((prevValue) => {
                            prevValue.filter(
                                (item, productId) =>
                                    Object.keys(item) !== productId
                            );
                        });
                    }
                }}
            >
                <HiMinus />
            </AmountButton>
            <p className="cart-item-amount-text">{amount}</p>
            <AmountButton
                variant="primary"
                onClick={() => {
                    setCart((prevValue) => ({
                        ...prevValue,
                        [productId]: amount + 1,
                    }));
                }}
            >
                <HiPlus />
            </AmountButton>
        </div>
    );
};

export const AddToCartButton = ({ productId }) => {
    const { cart, setCart } = useContext(AppContext);
    let amount = cart[productId];

    return (
        <div>
            {amount > 0 ? (
                <EditAmountButton productId={productId} />
            ) : (
                <Button
                    variant="primary"
                    onClick={() => {
                        setCart((prevValue) => ({
                            ...prevValue,
                            [productId]: 1,
                        }));
                    }}
                >
                    Add to Cart
                </Button>
            )}
        </div>
    );
};

export default Button;
