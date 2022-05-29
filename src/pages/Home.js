import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Card, {
    CardText,
    CardTitle,
    CardImage,
    CardBody,
} from "../components/Card";
import { Link } from "react-router-dom";
import api from "../axios";
import AppContext from "../contexts/appContext";
import Rating from "../components/Rating";

const ProductsCardGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5em;

    @media (max-width: 1253px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 660px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 470px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ProductCard = styled(Card)`
    max-width: 13.625rem;
`;

const ProductHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.25em;
`;

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
        <ProductsCardGroup>
            {products.map((product) => (
                <ProductCard
                    as={Link}
                    to={`/product/${product._id}`}
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
                        <CardImage
                            variant="top"
                            src={product.image}
                            style={{ width: "50%" }}
                        />
                    </div>
                    <CardBody
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <ProductHeader>
                            <CardTitle>
                                {product.title.length > 20
                                    ? product.title.substring(0, 30) + "..."
                                    : product.title}
                            </CardTitle>
                            <CardText variant="primary">
                                ${product.price}
                            </CardText>
                        </ProductHeader>
                        <Rating rating={product.rating.rate} />
                    </CardBody>
                </ProductCard>
            ))}
        </ProductsCardGroup>
    );
};

export default Home;
