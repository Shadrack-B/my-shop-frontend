import { useState, useEffect } from "react";

const getWindowsDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
};

const useWindowsDimensions = () => {
    const [dimensions, setDimensions] = useState(getWindowsDimensions());
    useEffect(() => {
        window.addEventListener("resize", () => {
            setDimensions(getWindowsDimensions());
        });
    }, []);
    return dimensions;
};

export default useWindowsDimensions;
