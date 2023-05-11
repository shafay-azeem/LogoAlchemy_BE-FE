import React, { useState } from "react";
// import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Header from "./Header";
import { Button } from "react-bootstrap";
import logo from "../../assets/logo (3).png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CustomButton from "../Global/CustomButton";
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
