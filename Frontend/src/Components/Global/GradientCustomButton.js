import React from "react";
import "../Global/CustomButton.css";
import { useNavigate } from "react-router-dom";

const GradientCustomButton = (props) => {
  const navigate = useNavigate();
  let padding = props.padding;
  let width = props.width;
  let fontSize = props.fontSize;
  let title = props.title;
  let marginTop = props.marginTop;
  let marginBottom = props.marginBottom;
  let routeId = props?.rf;

  function handleButtonClick(routeId) {
    navigate({
      pathname: `/${routeId}`,
    });
  }

  return (
    <button
      onClick={() => handleButtonClick(routeId)}
      class="gradiantButton"
      style={{
        width: width,
        padding: padding,
        fontSize: fontSize,
        marginBottom: marginBottom,
        marginTop: marginTop,
      }}
    >
      <span className="font-face-im">{title}</span>
    </button>
  );
};

export default GradientCustomButton;
