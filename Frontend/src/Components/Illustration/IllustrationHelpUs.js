import React, { useState } from "react";
import "../Illustration/Illustration.css";
import CustomButton from "../Global/CustomButton";

const IllustrationHelpUs = (props) => {
  const [helpData, setHelpData] = useState(props?.helpUsData);
  let conditionImg = props?.image;
  return (
    <div className="helpUsSection bg-white container py-5">
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid" src={helpData.image} alt="logo" />
        </div>

        <div className="col-lg-6">
          <h5
            className="font-face-sm"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ textAlign: "left" }}
          >
            TOP NOTCH BRANDING & MARKETING AGENCY
          </h5>
          <h2
            className="font-face-im"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ textAlign: "left" }}
          >
            {helpData.heading}
            <span
              className="font-face-im"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {" "}
              Let Us Help You
            </span>
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ textAlign: "left", fontSize: "16.5px" }}
          >
            {helpData.description}
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ textAlign: "left", fontSize: "16.5px" }}
          >
            {helpData.description2}
          </p>

          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2">
              <CustomButton
                title="Explore Services"
                padding="10px 45px"
                rf="Portfolio"
                rn="yes"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-start text-center mb-2">
              <CustomButton
                title="Lets Talk"
                padding="10px 45px"
                rf="ContactForm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationHelpUs;
