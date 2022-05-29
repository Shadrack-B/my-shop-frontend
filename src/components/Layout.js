import React, { useContext } from "react";
import AppContext from "../contexts/appContext";
import { TopNav, SideNav } from "./Navigations/Navigation";
import styled from "styled-components";
import HumbergerMenu from "./HumbergerMenu";
import useWindowsDimensions from "../hooks/useWindowsDimensions";
import StatusInfo from "./StatusInfo";

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 4rem auto;
    position: relative;
    & .main {
        padding: 1em 5% 1em 1em;
        position: relative;
        grid-column: 2/-1;
        @media (max-width: 954px) {
            grid-column: 1/-1;
        }
    }
    & .modal-container {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100vw;
        height: 100vh;
        position: absolute;
    }
    & .show-modal {
        width: 60%;
        display: flex;
    }
`;

const SecondaryNav = styled.div`
    padding: 1em;
`;

const Layout = ({ children }) => {
    const { width } = useWindowsDimensions();
    const { statusInfo } = useContext(AppContext);
    return (
        <StyledLayout>
            <TopNav />

            <div className="main">
                {statusInfo.show ? <StatusInfo /> : null}
                <SecondaryNav>
                    {width <= 945 ? <HumbergerMenu /> : null}
                </SecondaryNav>
                {children}
            </div>
            <SideNav />
        </StyledLayout>
    );
};

export default Layout;
