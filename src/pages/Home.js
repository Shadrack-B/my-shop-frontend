import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import api from "../axios";
import AppContext from "../contexts/appContext";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { category } = useContext(AppContext);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response =
                    category !== ""
                        ? await api.get(`/products/${category}`)
                        : await api.get(`/products/`);
                if (response && response.data) {
                    setProducts(response.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchProducts();
    }, [category]);
    return (
        <Container style={{ margin: "1em 0" }}>
            <CardGroup style={{ gap: "1em" }}>
                {products.map((product) => (
                    <Card
                        as={Link}
                        to={`/product/${product._id}`}
                        style={{
                            minWidth: "10rem",
                            justifyContent: "space-between",
                            border: "1px solid #adb5bd",
                            textDecoration: "none",
                            color: "inherit",
                        }}
                        key={product._id}
                    >
                        <div
                            style={{
                                height: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src={product.image}
                                style={{ width: "50%" }}
                            />
                        </div>
                        <Card.Body
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Card.Title>
                                {product.title.length > 20
                                    ? product.title.substring(0, 20) + "..."
                                    : product.title}
                            </Card.Title>
                            <Card.Subtitle>${product.price}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </Container>
    );
};

export default Home;
