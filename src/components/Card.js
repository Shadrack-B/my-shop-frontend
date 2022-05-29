import styled from "styled-components";

export const CardTitle = styled.h6`
    font-weight: 700;
    font-size: 1em;
    color: rgba(84, 66, 62, 1);
`;

export const CardText = styled.p`
    color: ${(props) =>
        props.variant === "primary"
            ? "rgba(211, 126, 106, 1)"
            : "rgba(84, 66, 62, 1)"};
`;

export const CardImage = styled.img``;

export const CardBody = styled.div`
    padding: 1em;
`;

const Card = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 3px 3px rgba(0, 0, 0, 0.08),
        0px 1px 8px rgba(0, 0, 0, 0.1);
`;

export default Card;
