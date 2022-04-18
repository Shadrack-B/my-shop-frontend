import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TopNav = () => (
    <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#home">MY SHOP</Navbar.Brand>
        </Container>
    </Navbar>
);

const Sidebar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
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
