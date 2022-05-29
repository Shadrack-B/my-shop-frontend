import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AppContext from "../contexts/appContext";
import api from "../axios";
import { EditAmountButton } from "../components/Button";
import Card from "../components/Card";
import Button from "../components/Button";

const CartBase = styled.div`
    display: flex;
    gap: 1.5em;
    & .cart-items-group {
        width: 75%;
    }
    @media (max-width: 660px) {
        & .cart-items-group {
            width: 100%;
        }
        flex-direction: column;
        position: relative;
    }
`;

const SectionTitle = styled.h5`
    margin: 0.5em 1.5em;
    white-space: nowrap;
`;

const CartItemsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
`;

const CartItem = styled(Card)`
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const CartItemBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartItemProduct = styled.div`
    display: flex;
    width: 80%;
    gap: 1em;
    align-items: center;
    & .cart-item-image {
        width: 5%;
    }
`;

const CartItemFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RemoveButton = styled(Button)`
    display: flex;
    gap: 0.25em;
    align-items: center;
    padding: 0;
`;

const CartSummary = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding: 1.5em;
`;

const AdditionalCostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-bottom: 1px solid rgba(84, 66, 62, 0.25);
    & .subtitle {
        margin-left: 0.5em;
    }
`;

const CheckOutButton = styled(Button)`
    width: 100%;
    margin-top: 1em;
    @media (max-width: 660px) {
        position: absolute;
    }
`;

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubtotal] = useState();
    const { cart, setCart, setStatusInfo } = useContext(AppContext);
    const products = Object.keys(cart);

    // const calcSubTotal = (items, itemAmounts) => {
    //     let total = 0;
    //     items.map((item) => {
    //         const totalItemPtice = item.price * itemAmounts[item._id];
    //         total += totalItemPtice;
    //     });
    //     // console.log("Subtotal has been calculated");
    //     setSubtotal(total);
    //     console.log(subTotal);
    // };

    useEffect(() => {
        const fetchCart = async () => {
            const urlString = `/cart?${products.map(
                // "id=" + item + "&"
                (item) => `${item}=${cart[item]}&`
            )}`;
            // console.log(urlString);
            try {
                const response = await api.get(urlString.replace(/,/g, ""));
                if (response && response.data) {
                    setCartItems(response.data.cart);
                    setSubtotal(response.data.subTotal);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchCart();
    }, [cart]);
    return (
        <CartBase>
            <div className="cart-items-group">
                <SectionTitle>Cart</SectionTitle>
                <CartItemsGroup>
                    {cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id}>
                            <CartItemBody>
                                <CartItemProduct>
                                    <img
                                        src={cartItem.image}
                                        alt={cartItem.title}
                                        className="cart-item-image"
                                    />
                                    <h6>{cartItem.title}</h6>
                                </CartItemProduct>
                                <p className="meta1">${cartItem.price}</p>
                            </CartItemBody>
                            <CartItemFooter>
                                <RemoveButton
                                    variant="link"
                                    onClick={() => {
                                        const productId = cartItem._id;
                                        setCart((prevValue) => {
                                            prevValue.filter(
                                                (item, productId) =>
                                                    Object.keys(item) !==
                                                    productId
                                            );
                                        });
                                    }}
                                >
                                    <svg
                                        width="18"
                                        height="20"
                                        viewBox="0 0 18 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17 4H13V3C13 2.20435 12.6839 1.44129 12.1213 0.87868C11.5587 0.316071 10.7956 0 10 0H8C7.20435 0 6.44129 0.316071 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H2V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V6H17C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4ZM7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H10C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V4H7V3ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V6H14V17Z"
                                            fill="#D37E6A"
                                        />
                                    </svg>
                                    <p className="meta1">Remove</p>
                                </RemoveButton>
                                <EditAmountButton productId={cartItem._id} />
                            </CartItemFooter>
                        </CartItem>
                    ))}
                </CartItemsGroup>
            </div>
            <div>
                <SectionTitle>Cart Summary</SectionTitle>
                <CartSummary>
                    <p>
                        Sub-total: <span className="meta1">${subTotal}</span>
                    </p>
                    <AdditionalCostContainer>
                        <p className="title">Additional costs </p>
                        <p className="subtitle">
                            Shipping: <span className="meta1">Free</span>
                        </p>
                    </AdditionalCostContainer>

                    <p>
                        Total: <span className="meta1">${subTotal}</span>
                    </p>
                </CartSummary>
                <CheckOutButton
                    disabled={cartItems.length < 1 ? "true" : null}
                    variant="primary"
                    onClick={() => {
                        setCart({});
                        setStatusInfo({
                            show: true,
                            content:
                                "You have successfully checked out. Thank you for shopping with us.",
                        });
                    }}
                >
                    Check Out
                </CheckOutButton>
            </div>
        </CartBase>
    );
};

export default Cart;
