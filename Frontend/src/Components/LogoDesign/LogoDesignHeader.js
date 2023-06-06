import React from "react";
import AgencyButton from "../Global/AgencyButton";
import CustomButtonArrow from "../Global/CustomButtonArror";
import logoDesignCharacter from "../../assets/logoDesignCharacter.png";
import "../../Components/LogoDesign/LogoDesign.css";

const LogoDesignHeader = () => {
  return (
    <div className="logoDesignContainer container">
      <div className="row">
        <div className="col-lg-7 ">
          {/* <AgencyButton
            title={"Logo Design"}
            borderRadius="20px"
            padding="3px 15px 3px 15px"
            buttonClass="font-face-gm"
            data-aos="fade-up"
            data-aos-duration="1000"
          /> */}

          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="logoDesignTitle font-face-im">
                Ignite your brand's visual story with <br></br>
                <span className="font-face-gm" style={{ color: "#ba1432" }}>
                  Exceptional Logos
                </span>
              </p>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-lg-6 col-md-12  p-0">
              <CustomButtonArrow
                title="Explore Services"
                rf="Portfolio"
                rn="yes"
              />
            </div>
            <div className="col-lg-6 col-md-12  p-0">
              <CustomButtonArrow title="Get In Touch" rf="ContactForm" />
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <img className="img-fluid" src={logoDesignCharacter} />
        </div>
      </div>
    </div>
  );
};

export default LogoDesignHeader;
