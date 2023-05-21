import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = (props) => {
  const navigate = useNavigate();
  let image = props.image;
  let borderRadius = props.borderRadius;
  let padding = props.padding;
  let width = props.width;
  let fontSize = props.fontSize;
  let alignSelf = props.alignSelf;
  let title = props.title;
  let marginRight = props.marginRight;
  let marginBottom = props.marginBottom;
  let marginTop = props.marginTop;
  let z = props.z;

  let routeId = props.rf;
  let rn = props?.rn;

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
    <>
      <button
        onClick={() => handleButtonClick(routeId)}
        type={props?.type}
        className="hoverBtn "
        style={{
          width: width,
          marginRight: marginRight,
          fontSize: fontSize,
          marginBottom: marginBottom,
          marginTop: marginTop,
          zIndex: 0,
        }}
      >
        <span
          className="font-face-im"
          style={{
            padding: props.padding,
            backgroundColor: props.bg === "black" ? "black" : "white",
            // color: props.rung === "white" ? "white" : 'black'
          }}
        >
          {title}
        </span>
      </button>
    </>
  );
};

export default CustomButton;
