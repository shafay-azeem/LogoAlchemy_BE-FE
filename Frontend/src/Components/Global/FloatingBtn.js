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
    var url = "tel:+19015464595";
    window.location.href = url;
  };

  return (
    <>
      <FloatingGroup size={Size.SMALL} direction={Direction.TOP} spacing={100}>
        <FloatMenuItemButton
          icon={<Whatsapp size="50%" />}
          buttonColor="#25D366"
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
