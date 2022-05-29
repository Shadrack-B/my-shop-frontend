import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RatingBase = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
    & svg {
        position: absolute;
    }
`;

const BigStars = ({ width, height }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 126 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <clipPath id="big-star">
                <path
                    d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
                    fill="#D4C0C7"
                />
                <path
                    d="M37 0L39.4697 7.60081H47.4616L40.996 12.2984L43.4656 19.8992L37 15.2016L30.5344 19.8992L33.004 12.2984L26.5384 7.60081H34.5303L37 0Z"
                    fill="#D4C0C7"
                />
                <path
                    d="M63 0L65.4697 7.60081H73.4616L66.996 12.2984L69.4656 19.8992L63 15.2016L56.5344 19.8992L59.004 12.2984L52.5384 7.60081H60.5303L63 0Z"
                    fill="#D4C0C7"
                />
                <path
                    d="M89 0L91.4697 7.60081H99.4616L92.996 12.2984L95.4656 19.8992L89 15.2016L82.5344 19.8992L85.004 12.2984L78.5384 7.60081H86.5303L89 0Z"
                    fill="#D4C0C7"
                />
                <path
                    d="M115 0L117.47 7.60081H125.462L118.996 12.2984L121.466 19.8992L115 15.2016L108.534 19.8992L111.004 12.2984L104.538 7.60081H112.53L115 0Z"
                    fill="#D4C0C7"
                />
            </clipPath>
        </svg>
    );
};

const SmallStars = ({ width, height }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 76 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <clipPath id="small-star">
                <path
                    d="M6 0.285645L7.34708 4.43154H11.7063L8.17963 6.99385L9.52671 11.1397L6 8.57744L2.47329 11.1397L3.82037 6.99385L0.293661 4.43154H4.65292L6 0.285645Z"
                    fill="#D37E6A"
                />
                <path
                    d="M22 0.285645L23.3471 4.43154H27.7063L24.1796 6.99385L25.5267 11.1397L22 8.57744L18.4733 11.1397L19.8204 6.99385L16.2937 4.43154H20.6529L22 0.285645Z"
                    fill="#D37E6A"
                />
                <path
                    d="M38 0.285645L39.3471 4.43154H43.7063L40.1796 6.99385L41.5267 11.1397L38 8.57744L34.4733 11.1397L35.8204 6.99385L32.2937 4.43154H36.6529L38 0.285645Z"
                    fill="#D37E6A"
                />
                <path
                    d="M54 0.285645L55.3471 4.43154H59.7063L56.1796 6.99385L57.5267 11.1397L54 8.57744L50.4733 11.1397L51.8204 6.99385L48.2937 4.43154H52.6529L54 0.285645Z"
                    fill="#D4C0C7"
                />
                <path
                    d="M70 0.285645L71.3471 4.43154H75.7063L72.1796 6.99385L73.5267 11.1397L70 8.57744L66.4733 11.1397L67.8204 6.99385L64.2937 4.43154H68.6529L70 0.285645Z"
                    fill="#D4C0C7"
                />
            </clipPath>
        </svg>
    );
};

const RatingBackground = styled.div`
    width: ${({ width }) => width + "px"};
    height: ${({ height }) => height + "px"};
    clip-path: ${({ starSize }) => `url(#${starSize})`};
    background: ${(props) => {
        const rating = (parseFloat(props.rating) / 5) * 100;
        return `linear-gradient(to right,
       rgba(211, 126, 106, 1) 0%,
       rgba(211, 126, 106, 1) ${rating}%,
       rgba(212, 192, 199, 1) ${rating}%,
       rgba(212, 192, 199, 1) 100%
   )`;
    }};
`;

const Rating = ({ rating }) => {
    const [starMaskSize, setStarMaskSize] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        const setStates = () => {
            if (window.innerWidth < 660) {
                setHeight(13);
                setWidth(76);
                setStarMaskSize("small-star");
            } else {
                setHeight(22);
                setWidth(126);
                setStarMaskSize("big-star");
            }
        };
        const setListener = () => {
            window.addEventListener("resize", () => {
                setStates();
            });
        };
        setStates();
        setListener();
    }, []);

    return (
        <RatingBase>
            <div>
                <RatingBackground
                    rating={rating}
                    width={width}
                    height={height}
                    starSize={starMaskSize}
                />
                {starMaskSize === "big-star" ? (
                    <BigStars width={width} height={height} />
                ) : (
                    <SmallStars width={width} height={height} />
                )}
            </div>
            <p className="meta1">{rating}/5</p>
        </RatingBase>
    );
};

export default Rating;
