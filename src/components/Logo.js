import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
    font-size: 2.25rem;
    color: rgba(211, 126, 106, 1);
    margin: 0;
    text-decoration: none;
`;

const Logo = () => {
    return <StyledLogo to="/">MY SHOP</StyledLogo>;
};

export default Logo;
