import React, { useState } from "react";
import Header from "./Header";
import NavigationBar from "../Top banner/NavigationBar";

const HeroImage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (expanded) => {
    setExpanded(expanded);
  };
  return (
    <div className="myClass">
      <NavigationBar />
      <Header
        buttonText={"World-Class Branding & Marketing Agency"}
        heading1={"We Propel Your"}
        heading2={"Brand"}
        heading3={"Onto The Digital Stage"}
      />
    </div>
  );
};

export default HeroImage;
