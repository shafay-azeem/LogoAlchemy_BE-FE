import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import Footer from "./Components/Miscellaneous/Footer";
import NavigationBar from "./Components/Top banner/NavigationBar";
import CustomButtonArrow from "./Components/Global/CustomButtonArror";
import logo from "./assets/portfolioIcon.png";
import Aos from "aos";
import ContactForm from "./Components/ContactForm/ContactForm";
import PortfolioGallery from "./PortfolioGallery";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Portfolio = ({ heading2 }) => {
  const navigate = useNavigate();
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  let rh = screenDimensions.height;
  let rw = screenDimensions.width;
  console.log(rh);
  console.log(rw);


  const blog = () => {
    navigate({
      pathname: "/Articles",
    });
  };
  const images = [
    require("./assets/Logo/1.jpg"),
    require("./assets/Logo/2.jpg"),
    require("./assets/Logo/3.jpg"),
    require("./assets/Logo/4.jpg"),
    require("./assets/Logo/5.jpg"),
    require("./assets/Logo/6.jpg"),
    require("./assets/Logo/7.jpg"),
    require("./assets/Logo/8.jpg"),

    require("./assets/Logo/9.jpg"),
    require("./assets/Logo/10.jpg"),
    require("./assets/Logo/11.jpg"),
    require("./assets/Logo/12.jpg"),
    require("./assets/Logo/13.jpg"),
    require("./assets/Logo/14.jpg"),
    require("./assets/Logo/15.jpg"),
    require("./assets/Logo/16.jpg"),
  ];

  const images1 = [
    require("./assets/Illustration/1.jpg"),
    require("./assets/Illustration/2.jpg"),
    require("./assets/Illustration/3.jpg"),
    require("./assets/Illustration/4.jpg"),
    require("./assets/Illustration/5.jpg"),
    require("./assets/Illustration/6.jpg"),
    require("./assets/Illustration/7.jpg"),
    require("./assets/Illustration/8.jpg"),
  ];

  const images2 = [
    require("./assets/Branding/1.jpg"),
    require("./assets/Branding/2.jpg"),
    require("./assets/Branding/3.jpg"),
    require("./assets/Branding/4.jpg"),
    require("./assets/Branding/5.jpg"),
    require("./assets/Branding/6.jpg"),
    require("./assets/Branding/7.jpg"),
    require("./assets/Branding/8.jpg"),
  ];

  return (
    <>
      <div className="Portfolio-Page">
        <NavigationBar />

        <div className="Main-Banner container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-12"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p className="bannerTitle font-face-im">
                    Our Recent
                    <br />
                    <span className="font-face-gm" style={{ color: "#09b37d" }}>
                      WorkFolio
                    </span>
                    {heading2}
                  </p>
                </div>
              </div>

              <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <CustomButtonArrow
                    title="Explore  Services"
                    rf="DigitalService"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <CustomButtonArrow title="Get In Touch" rf="ContactForm" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img className="img-fluid child" src={logo} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-3">
        <Tabs
          defaultActiveKey="logo"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="logo" title="Logo">
            <PortfolioGallery image={images} />
          </Tab>
          <Tab eventKey="Logo" title="Illustration">
            <PortfolioGallery image={images1} />
          </Tab>
          <Tab eventKey="Illustration" title="Branding">
            <PortfolioGallery image={images2} />
          </Tab>
        </Tabs>
      </div>

      <div id="ContactForm">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
