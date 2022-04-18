import React, { useEffect, useState } from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import api from "../axios";

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
        <div className="product">
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                />
            </div>

            <div className="product-details">
                <Card.Title>{product.title}</Card.Title>
                <div className="product-meta">
                    <Card.Subtitle>Category: {product.category}</Card.Subtitle>
                    <Card.Subtitle>
                        Rating: {product.rating.rate}/5
                    </Card.Subtitle>
                </div>
                <Card.Body>{product.description}</Card.Body>

                <div className="product-footer">
                    <Card.Subtitle>
                        <Card.Subtitle>{product.price}</Card.Subtitle>
                    </Card.Subtitle>
                    <div>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
