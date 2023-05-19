import React from "react";
import character from "../../assets/illustrationCharacter.png";
import AgencyButton from "../Global/AgencyButton";
import "../Illustration/Illustration.css";
import CustomButtonArrow from "../Global/CustomButtonArror";

const IllustrationHeader = () => {
  return (
    <div className="illustrationContainer container">
      <div className="row">
        <div className="col-lg-7 " data-aos="fade-up" data-aos-duration="1000">
          {/* <AgencyButton
            title={"Illustration"}
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
              <p className="illustrationTitle font-face-im">
                Creativity isn't <br></br>limited to those who can&nbsp;
                <span className="font-face-gm" style={{ color: "#ba1432" }}>
                  Draw or Paint
                </span>
              </p>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-lg-6 col-md-12  p-0">
              <CustomButtonArrow
                title="Explore  Services"
                rf="Portfolio"
                rn="yes"
              />
            </div>
            <div className="col-lg-6 col-md-12  p-0">
              <CustomButtonArrow title="Get In Touch" rf="ContactForm" />
            </div>
          </div>
        </div>

        <div className="illustrationImg col-lg-5">
          <img className="illustrationChild img-fluid" src={character} />
        </div>
      </div>
    </div>
  );
};

export default IllustrationHeader;
