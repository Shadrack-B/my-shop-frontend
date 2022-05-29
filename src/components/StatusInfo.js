import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AppContext from "../contexts/appContext";
import { gsap } from "gsap";

const StatusInfoBase = styled.div`
    max-width: 20rem;
    padding: 1.25em 2em;
    color: #ffffff;
    background-color: rgba(211, 126, 106, 1);
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0.5em;
    opacity: 0;
`;

const StatusInfo = () => {
    let statusInfoElement = useRef();
    const { statusInfo, setStatusInfo } = useContext(AppContext);
    useEffect(() => {
        gsap.fromTo(
            statusInfoElement,
            { y: -50 },
            { opacity: 1, y: 0, duration: 1 }
        );
        setTimeout(async () => {
            await gsap.to(statusInfoElement, {
                opacity: 0,
                y: -50,
                duration: 1,
            });
            setStatusInfo({ show: false, content: null });
        }, 2000);
    }, []);
    return (
        <StatusInfoBase
            className="statusInfo"
            ref={(el) => (statusInfoElement = el)}
        >
            {statusInfo.content}
        </StatusInfoBase>
    );
};

export default StatusInfo;
