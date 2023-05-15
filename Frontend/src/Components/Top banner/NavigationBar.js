import React, { useEffect, useState } from "react";
import "../Top banner/NavigationBar.css";
import CustomButton from "../Global/CustomButton";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../assets/logo (3).png";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const handleToggle = (expanded) => {
    setExpanded(expanded);
  };
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const illustration = () => {
    navigate({
      pathname: "/Illustration",
    });
  };

  const logoRoute = () => {
    navigate({
      pathname: `/LogoDesign`,
    });
  };

  const portfolio = () => {
    navigate({
      pathname: `/Portfolio`,
    });
  };

  const logoRoute2 = (routeId) => {
    navigate({
      pathname: `/${routeId}`,
    });
  };

  const homeRoute = () => {
    navigate({
      pathname: "/",
    });
  };
  const branding = () => {
    navigate({
      pathname: "/BrandingAgency",
    });
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 991);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isMobileScreen) {
    return (
      <Navbar
        bg={expanded ? "black" : "transparent"}
        expand="lg"
        onToggle={handleToggle}
        expanded={expanded}
        collapseOnSelect
      >
        <Container className="no-scroll">
          <Navbar.Brand onClick={homeRoute} style={{ cursor: "pointer" }}>
            <img className="logo img-fluid" src={logo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto nav ">
              <Nav.Link
                className="font-face-hm"
                style={{ fontSize: "15px", paddingRight: "2rem" }}
                onClick={homeRoute}
              >
                Home
              </Nav.Link>

              <NavDropdown
                title="Service"
                id="collasible-nav-dropdown"
                className="li font-face-hm"
                style={{ fontSize: "15px", paddingRight: "2rem" }}
              >
                <NavDropdown.Item onClick={logoRoute}>Logo</NavDropdown.Item>
                <NavDropdown.Item onClick={illustration}>
                  Illustration
                </NavDropdown.Item>
                <NavDropdown.Item onClick={branding}>Branding</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link
                onClick={portfolio}
                className="font-face-hm"
                style={{ fontSize: "15px", paddingRight: "2rem" }}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#ContactForm"
                className="font-face-hm"
                style={{ fontSize: "15px", paddingRight: "2rem" }}
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <a href="#ContactForm">
              <button class="getAQuickButton">
                <span className="font-face-im">Get a Quick Qoute!</span>
              </button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  const renderDropdownItems = () => {
    const dropdownItems = [
      {
        name: "Logo",
        // description: "Logo Description",
        description:
          "A captivating logo is the cornerstone of any successful brand.",
        imageSrc: require("../../assets/logo.jpg"),
        href: "#action/3.1",
        route: "LogoDesign",
      },
      {
        name: "Illustration",
        // description: "Illustration Descripiton",
        description:
          "Vibrant and captivating illustrations that bring brands to life.",
        imageSrc: require("../../assets/illustration.jpg"),
        href: "#action/3.2",
        route: "Illustration",
      },
      {
        name: "Branding",
        // description: "Branding Description",
        description:
          "Strategic and compelling branding that breathes life into brands.",
        imageSrc: require("../../assets/branding.jpg"),
        href: "#action/3.3",
        route: "BrandingAgency",
      },
    ];

    return (
      <div className="my-dropdown row d-flex justify-content-center align-items-center">
        {dropdownItems.map((item, index) => {
          return (
            <div className="col-lg-4 py-2">
              <div className="dropdown-inner py-3">
                <NavDropdown.Item
                  onClick={() => logoRoute2(item.route)}
                  key={index}
                >
                  <div className="dropdown-link">
                    <div className="img py-2">
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="dropdown-image img-fluid"
                      />
                    </div>

                    <div className="dropdown-content">
                      <h4 className="pt-2 text-white dropdown-name">
                        {item.name}
                      </h4>
                      <p className="m-0 text-white dropdown-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </NavDropdown.Item>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Navbar
      bg={expanded ? "black" : "transparent"}
      expand="lg"
      onToggle={handleToggle}
      expanded={expanded}
      collapseOnSelect
    >
      <Container className="no-scroll">
        <Navbar.Brand onClick={homeRoute} style={{ cursor: "pointer" }}>
          <img className="logo img-fluid" src={logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto nav ">
            <Nav.Link
              className="font-face-hm"
              style={{ fontSize: "15px", paddingRight: "2rem" }}
              onClick={homeRoute}
            >
              Home
            </Nav.Link>

            <NavDropdown
              title="Service"
              id="collasible-nav-dropdown"
              className="li font-face-hm"
              style={{ fontSize: "15px", paddingRight: "2rem" }}
            >
              {renderDropdownItems()}
            </NavDropdown>
            <Nav.Link
              onClick={portfolio}
              className="font-face-hm"
              style={{ fontSize: "15px", paddingRight: "2rem" }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#ContactForm"
              className="font-face-hm"
              style={{ fontSize: "15px", paddingRight: "2rem" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <a href="#ContactForm">
            <button class="getAQuickButton">
              <span className="font-face-im">Get a Quick Qoute!</span>
            </button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
