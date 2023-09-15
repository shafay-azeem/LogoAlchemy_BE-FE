import React from "react";
import "../Usp/Usp.css";
import UspLogo from "../../assets/Selling Point.png";
import CustomButton from "../Global/CustomButton";

const Usp = () => {
  return (
    <div className="Usp">
      <div className="container py-5">
        <div className="row py-2">
          <div className="col-lg-6">
            {/* <h3
              className="font-face-im"
              data-aos="zoom-in"
              data-aos-duration="1000"
              style={{ color: "#d40e2f" }}
            >
              OUR USP'S
            </h3> */}
            <h2
              className="font-face-im"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Why Choose Us ?
            </h2>
            <p className="pt-4" data-aos="zoom-in" data-aos-duration="1000">
              1. Customized Branding Solutions: We tailor our branding
              stratergies to suit your unique business needs, ensuring a
              personalized approach that sets your brand apart.
            </p>
            <p data-aos="zoom-in" data-aos-duration="1000">
              2. Holistic Approach: Our Services encompass all aspects of
              branding from logo design and visual identity to brand messaging
              and stratergy, providing a cohesive and unified brand presence.
            </p>
            <p data-aos="zoom-in" data-aos-duration="1000">
              3. Results-driven Process: We focus on measurable outcomes,
              helping you track your brand's growth and ROI while ensuring a
              better return on your invesment.
            </p>
            <div
              className="usp-btn py-3"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <CustomButton
                title="View Past Projects"
                padding="10px 45px"
                z="1"
                rf="Portfolio"
                rn="yes"
                fontSize="20px"
              />
              <small className="ms-4">
                <CustomButton
                  title="Let's Talk"
                  padding="10px 45px"
                  fontSize="20px"
                  rf="ContactForm"
                  z="1"
                />
              </small>
            </div>
          </div>

          <div className="col-lg-6">
            <img className="img-fluid" src={UspLogo} alt="usp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usp;
