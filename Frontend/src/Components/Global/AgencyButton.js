import React from "react";
import { useNavigate } from "react-router-dom";

const AgencyButton = (props) => {
  const navigate = useNavigate();
  let borderRadius = props.borderRadius;
  let padding = props.padding;
  let width = props.width;
  let fontSize = props.fontSize;
  let marginLeft = props.marginLeft;
  let routeId = props.rf;

  function handleButtonClick(routeId) {
    navigate({
      pathname: `/${routeId}`,
    });
  }

  return (
    <>
      <button
        onClick={() => handleButtonClick(routeId)}
        className="font-face-gm"
        style={{
          background:
            "linear-gradient(to right, #B91532, #9E3040, #9B3342, #8E4049, #755A56, #5F7061, #48876D, #3C9373, #1F8C8A, #207E8C, #226E8E, #236190, #245891, #273C95, #273B95)",
          border: "none",
          borderRadius: borderRadius,
          color: "white",
          width: width,
          padding: padding,
          fontSize: fontSize,
          textShadow: "1px 1px 1px rgba(0,0,0,0.4)",
          cursor: "pointer",
          boxShadow: "1px 1px 3p",
          marginLeft: marginLeft,
          // cursor: "none",
        }}
      >
        {props.title}
      </button>
    </>
  );
};

export default AgencyButton;
