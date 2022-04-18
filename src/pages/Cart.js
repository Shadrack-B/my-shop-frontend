import React from "react";
import "./Cart.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineDelete } from "react-icons/ai";
import { HiMinus, HiPlus } from "react-icons/hi";
import { Container } from "react-bootstrap";

const Cart = () => {
    return (
        <Row className="cart">
            <Col className="cart-items" lg={9}>
                <Card>
                    <Container className="cart-title-container">
                        <Card.Title>Cart</Card.Title>
                    </Container>
                    <div className="cart-item">
                        <Card.Body className="cart-item-body">
                            <div className="cart-item-body-desc">
                                <img
                                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                                    alt=""
                                    className="cart-item-image"
                                />
                                <Card.Text>
                                    Fjallraven - Foldsack No. 1 Backpack, Fits
                                    15 Laptops
                                </Card.Text>
                            </div>
                            <Card.Subtitle>109.95</Card.Subtitle>
                        </Card.Body>
                        <div className="card-item-footer">
                            <div className="cart-item-delete">
                                <AiOutlineDelete />
                                Remove
                            </div>
                            <div className="cart-item-amount">
                                <Button>
                                    <HiMinus />
                                </Button>
                                <Card.Subtitle className="cart-item-amount-text">
                                    1
                                </Card.Subtitle>
                                <Button>
                                    <HiPlus />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col className="cart-summary">
                <Card>
                    <Container className="cart-summary-container">
                        <Container className="cart-summary-title-container">
                            <Card.Title>Cart Summary</Card.Title>
                        </Container>

                        <div className="cart-summary-total">
                            <Card.Title>Total</Card.Title>
                            <Card.Subtitle>$2949</Card.Subtitle>
                        </div>
                        <div className="card-summary-footer">
                            <Button className="cart-summary-btn">
                                Checkout
                            </Button>
                        </div>
                    </Container>
                </Card>
            </Col>
        </Row>
    );
};

export default Cart;
