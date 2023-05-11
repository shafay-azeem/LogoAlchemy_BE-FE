import React from "react";
import "../Global/CustomButton.css";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
const CustomButtonArrow = (props) => {
    let title = props.title;
    let routeId = props.rf
    let rn = props?.rn
    const navigate = useNavigate();

    function handleButtonClick(routeId) {
        if (rn === "yes") {
            navigate({
                pathname: `/${routeId}`,
            });
        } else {
            const divsLocation = document.getElementById(routeId);
            if (divsLocation) {
                divsLocation.scrollIntoView({ behavior: "smooth" });
            }
        }

    }

    return (
        <div>
            <button class="learn-more" onClick={() => handleButtonClick(routeId)}>
                <span >{title}</span>
            </button>
        </div>
    );
};

export default CustomButtonArrow;