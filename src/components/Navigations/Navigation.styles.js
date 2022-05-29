import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";

export const StyledTopNav = styled(Card)`
    grid-column: 1/-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 0 5%;
`;

export const StyledSideNav = styled(StyledTopNav)`
    height: 100%;
    grid-column: 1/2;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5em;
    position: relative;
    transition: display 0.5s;
    @media (max-width: 954px) {
        display: none;
    }
`;

export const StyledCloseSideNavBtn = styled(Button)`
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: none;
    padding: 0.75em 0.75em;
`;
