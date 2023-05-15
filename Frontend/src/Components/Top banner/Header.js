import React, { useState, useEffect } from "react";
import "../Top banner/HeroImage.css";
import logo from "../../assets/kiddo.png";
import buttonLogo from "../../assets/circle.png";
import arrow from "../../assets/arrow 2.png";
import arrow1 from "../../assets/arrow 1.png";
import CustomButton from "../Global/CustomButton";
import AgencyButton from "../Global/AgencyButton";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomButtonArrow from "../Global/CustomButtonArror";

const Header = ({ buttonText, heading1, heading2, heading3 }) => {
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);

  const handleButtonHover = (buttonNum) => {
    if (buttonNum === 1) {
      setIsButton1Hovered(true);
    } else if (buttonNum === 2) {
      setIsButton2Hovered(true);
    }
  };

  const handleButtonLeave = (buttonNum) => {
    if (buttonNum === 1) {
      setIsButton1Hovered(false);
    } else if (buttonNum === 2) {
      setIsButton2Hovered(false);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
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

  return (
    <div className="Main-Banner container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
              <AgencyButton
                title={buttonText}
                borderRadius="20px"
                padding="3px 15px 3px 15px"
                buttonClass="my-custom-class font-face-gm"
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p
                className="bannerTitle font-face-im"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {heading1}&nbsp;
                <span className="font-face-gm" style={{ color: "#ba1432" }}>
                  {heading2}&nbsp;
                </span>
                {heading3}
              </p>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <CustomButtonArrow
                title="Explore  Services"
                rf="Portfolio"
                rn="yes"
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
  );
};

export default Header;
