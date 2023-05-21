import React from "react";
import {
  Direction,
  FloatMenuItemButton,
  FloatingGroup,
  Size,
} from "react-motion-float-button";

import { Phone, Whatsapp } from "@emotion-icons/remix-fill";

const FloatingBtn = () => {
  const handleButton = () => {
    var url = "https://wa.me/+19015464595";
    window.open(url);
  };

  const navigateContact = () => {
    const element = document.getElementById("ContactForm");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FloatingGroup
        size={Size.REGULAR}
        direction={Direction.TOP}
        spacing={100}
      >
        <FloatMenuItemButton
          icon={<Whatsapp size="50%" />}
          buttonColor="green"
          onClick={handleButton}
        />
        <FloatMenuItemButton
          icon={<Phone size="60%" />}
          buttonColor="blue"
          onClick={navigateContact}
        />
      </FloatingGroup>
    </>
  );
};

export default FloatingBtn;
