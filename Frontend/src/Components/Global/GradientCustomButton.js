import React from "react";
import "../Global/CustomButton.css";

const GradientCustomButton = (props) => {
  let padding = props.padding;
  let width = props.width;
  let fontSize = props.fontSize;
  let title = props.title;
  let marginTop = props.marginTop;
  let marginBottom = props.marginBottom;
  return (
    <button
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
