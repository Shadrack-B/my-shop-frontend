import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledTabGroup = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(84, 66, 62, 0.25);
`;
const StyledTab = styled(Button)`
    background-color: ${(props) =>
        props.variant === "active-tab" ? "rgba(212, 192, 199, 1)" : null};
    box-shadow: ${(props) => (props.variant !== "active-tab" ? "none" : null)};
    color: rgba(84, 66, 62, 1);
    transition: background-color 0.5s;
`;

const StyledTabBody = styled.div`
    padding: 2em;
`;

const Tab = () => {
    const [currentTab, setCurrentTab] = useState("description");
    const tabs = {
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid repellendus labore laborum voluptas iste ex recusandae iusto nobis necessitatibus. Saepe, assumenda. Ullam corrupti enim itaque, error in quo cupiditate! Ad quis error aspernatur sint molestias. Officia animi autem, quas cupiditate voluptatibus minima quibusdam nemo doloremque distinctio accusantium sit iusto hic voluptate sapiente consequuntur. Quos facere enim sit tenetur saepe quia, hic sapiente omnis tempore vitae nesciunt, similique quisquam sed, laborum consectetur iusto velit? Perspiciatis vel assumenda enim fugiat facilis!",
        features:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus numquam est dolores molestiae ex! Ipsum, eius? Placeat minus praesentium libero facere voluptates beatae animi sunt cum molestiae modi pariatur provident quo earum expedita officiis minima laudantium quos, vel dolorem.",
        reviews:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nulla.",
    };

    return (
        <div>
            <StyledTabGroup>
                {Object.keys(tabs).map((tab) => (
                    <StyledTab
                        onClick={() => setCurrentTab(tab)}
                        variant={tab === currentTab ? "active-tab" : null}
                    >
                        <p className="tab-text">
                            {tab.replace(/^\w/, (c) => c.toUpperCase())}
                        </p>
                    </StyledTab>
                ))}
            </StyledTabGroup>
            <StyledTabBody>
                <p>{tabs[currentTab]}</p>
            </StyledTabBody>
        </div>
    );
};

export default Tab;
