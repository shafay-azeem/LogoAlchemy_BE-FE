import React from "react";
import AgencyButton from "../Global/AgencyButton";
import CustomButtonArrow from "../Global/CustomButtonArror";
import BrandingCharacter from "../../assets/BrandingCharacter.png";

const BrandingHeader = () => {
  return (
    <div className="brandingContainer container">
      <div className="row">
        <div className="col-lg-7 " data-aos="fade-up" data-aos-duration="1000">
          {/* <AgencyButton
            title={"Branding Agency"}
            borderRadius="20px"
            padding="3px 15px 3px 15px"
            buttonClass="font-face-gm"
          /> */}

          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="brandingTitle font-face-im">
                If You've Got The Time We've <br></br>Got The&nbsp;
                <span className="font-face-gm" style={{ color: "#ba1432" }}>
                  Brand
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

        <div className="brandingImg col-lg-5">
          <img className="brandingChild img-fluid" src={BrandingCharacter} />
        </div>
      </div>
    </div>
  );
};

export default BrandingHeader;
