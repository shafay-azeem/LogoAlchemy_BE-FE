import React from "react";
import CustomButton from "../Global/CustomButton";

import brandinghelpus from "../../assets/brandingHelpUs.png";

const BrandingAgenHelpUs = () => {
  return (
    <div className="BrandinghelpUsSection bg-white container py-5">
      <div className="row">
        <div className="col-lg-6">
          {/* <h5
            className="font-face-sm"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            TOP NOTCH BRANDING & MARKETING AGENCY
          </h5> */}
          <h2
            className="font-face-im"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ textAlign: "left" }}
          >
            How Our Comprehensive Branding Process Helps Your Business Stand
            Out,
            <span className="font-face-im"> Let Us Help You</span>
          </h2>
          <p
            className="pt-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ fontSize: "16.5px" }}
          >
            With a decade of branding expertise, we know that effective branding
            is crucial for establishing a strong brand identity and standing out
            in today's competitive market. Our comprehensive process serves
            individuals and companies in the US and other English-speaking
            countries, enabling businesses to connect with their target audience
            and make a lasting impression. At The Logo Alchemy, we adopt a
            holistic approach that integrates strategy, design, and messaging.
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ fontSize: "16.5px" }}
          >
            By deeply understanding your business, target market, and
            competition, we develop a unique and impactful branding strategy.
            Our skilled team of branding experts brings this strategy to life
            through captivating visual design, engaging storytelling, and
            consistent messaging across all touchpoints. From logos and
            guidelines to websites and marketing collateral, we ensure every
            brand element communicates a cohesive and memorable message.
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
                title="Let's Talk"
                padding="10px 45px"
                rf="ContactForm"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <img className="img-fluid" src={brandinghelpus} alt="noyes" />
        </div>
      </div>
    </div>
  );
};

export default BrandingAgenHelpUs;
