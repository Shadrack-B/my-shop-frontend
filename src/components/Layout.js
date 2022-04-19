import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import api from "../axios";
import AppContext from "../contexts/appContext";

const TopNav = () => (
    <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#home">MY SHOP</Navbar.Brand>
        </Container>
    </Navbar>
);

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    const { setCategory } = useContext(AppContext);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const cats = [];
                const response = await api.get("/categories");
                if (response && response.data) {
                    response.data.map((product) => {
                        cats.push(product.category);
                    });
                    const categories = [...new Set(cats)];
                    setCategories(categories);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchCategories();
    }, []);
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Button
                variant="link"
                onClick={() => {
                    setCategory("");
                }}
            >
                All
            </Button>
            {categories.map((category) => (
                <Button
                    variant="link"
                    onClick={() => {
                        setCategory(category);
                    }}
                    key={category}
                >
                    {category}
                </Button>
            ))}
        </Nav>
    );
};

const Layout = ({ children }) => {
    return (
        <div>
            <TopNav />
            <Container>
                <Row>
                    <Col lg={3}>
                        <Sidebar />
                    </Col>
                    <Col>
                        <div className="main">{children}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Layout;
