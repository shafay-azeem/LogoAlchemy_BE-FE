import React, { useState } from "react";
import "../Illustration/Illustration.css";
import CustomButton from "../Global/CustomButton";


const IllustrationHelpUs = (props) => {
  const [helpData, setHelpData] = useState(props?.helpUsData)
  let conditionImg = props?.image
  return (
    <div className="helpUsSection bg-white container py-5">
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid" src={helpData.image} alt="logo" />
        </div>

        <div className="col-lg-6">
          <h5 className="font-face-sm">
            TOP NOTCH BRANDING & MARKETING AGENCY
          </h5>
          <h2 className="font-face-im">
            {helpData.heading}
            <span className="font-face-im"> Let Us Help You</span>
          </h2>
          <p className="font-face-sm pt-3">
            {helpData.description}
          </p>
          <p className="font-face-sm">
            {helpData.description2}
          </p>
          <p className="font-face-sm">
            {helpData.description3}
          </p>
          <p className="font-face-sm">
            {helpData.description4}
          </p>
          {/* <div className="buttonParent d-lg-flex ">
            <CustomButton
              title="Explore Services"
              padding="10px 15px"
              width="50%"
              marginRight="20px"
            fontSize="20px"
            />
            <CustomButton
              title="Lets Talk"
              padding="10px 15px"
            width="50%"
            fontSize="20px"
            />
          </div> */}


          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2" >
              <CustomButton
                title="Explore Services"
                padding="10px 45px"
                rf="Portfolio"
                rn="yes"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-start text-center mb-2" >
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