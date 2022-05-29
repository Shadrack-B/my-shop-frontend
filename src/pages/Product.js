import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button, { AddToCartButton } from "../components/Button";
import api from "../axios";
import Card from "../components/Card";
import Rating from "../components/Rating";
import Tab from "../components/Tab";

const ProductBase = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;
`;

const ProductItem = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
`;
const ProductItemImage = styled(Card)`
    width: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    & .product-image {
        width: 70%;
    }
`;

const ProductItemBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2em;
    gap: 2em;
    width: 50%;
    & h6 {
        align-self: center;
    }
`;

const ProductItemBodyMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2em;
    width: 100%;
`;

const ProductItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 0 2em;
`;

const ProductItemInfoTabs = styled(Button)``;
const ProductItemInfoBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;
const Product = () => {
    const [product, setProduct] = useState({
        rating: {
            rate: null,
            count: null,
        },
        _id: "",
        title: "",
        price: null,
        description: "",
        category: "",
        image: "",
    });
    const { id: productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/product/${productId}`);
                if (response && response.data) {
                    setProduct(response.data[0]);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, []);

    return (
        <ProductBase>
            <ProductItem>
                <ProductItemImage>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                    />
                </ProductItemImage>
                <ProductItemBody>
                    <h6>{product.title}</h6>
                    <ProductItemBodyMeta>
                        <Rating rating={product.rating.rate} />
                        <p className="meta1">${product.price}</p>
                    </ProductItemBodyMeta>
                    <p>Amount Instock: 5</p>
                    <AddToCartButton productId={product._id} />
                </ProductItemBody>
            </ProductItem>
            <Tab />
        </ProductBase>
    );
};

export default Product;
