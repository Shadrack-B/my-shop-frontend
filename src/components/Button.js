import React from "react";
import BootstrapButton from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/productSlice";

const Button = ({ productId }) => {
    const cart = useSelector((state) => state.product.cart);

    const dispatch = useDispatch();
    return (
        <BootstrapButton
            onClick={() => {
                const newCart = [...cart, newItem];
                dispatch(addToCart({ cart: productId }));
            }}
        />
    );
};

export default Button;
