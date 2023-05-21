import React, { useEffect, useState } from "react";
import "../Service/DigitalService.css";
import Image1 from "../../assets/logoService.jpg";
import Image2 from "../../assets/illustrationService.jpg";
import Image3 from "../../assets/brandingService.jpg";
import buttonLogo from "../../assets/circle.png";
import CustomButton from "../Global/CustomButton";
import CustomButtonArrow from "../Global/CustomButtonArror";

const DigitalService = () => {
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
    <>
      <div className="digital-service  py-5">
        <h4
          className="red text-center font-face-im"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          OUR AGENCY'S DIGITAL SERVICES
        </h4>
        <h1
          className="white text-center font-face-im"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Our Most Popular Service
        </h1>
        {/* <p className='white text-center font-face-hm py-2'
                >we are one of the US-based top-notch companies doing our best to enable quality solutions.</p> */}
        <p
          className="white text-center font-face-hm py-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          We are providing a seamless and cohesive brand image that drives
          results and fosters brand growth.
        </p>
        <div class="how-section1">
          <div className="container">
            <div class="row" data-aos="fade-up" data-aos-duration="1200">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <img
                  id="Main-Image"
                  src={Image1}
                  className="img-fluid"
                  alt="2"
                />
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h4 className="font-face-im">Logo Designing</h4>

                <p class="white py-2">
                  A strong brand identity hinges on your logo, which shapes
                  people's opinions in a mere 50 milliseconds. Our skilled
                  designers specialize in crafting distinctive and tailored
                  logos that encapsulate your brand's essence, effectively
                  differentiating you from competitors.
                </p>
                <p class="white">
                  With our expertise, we deliver unique and custom logos that
                  make a lasting impact. Trust us to create a logo that not only
                  captures your brand's essence but also showcases your
                  individuality and uniqueness. Elevate your brand's recognition
                  with our expertly designed logos that set you apart from the
                  competition.
                </p>
                <CustomButtonArrow
                  title="Learn More"
                  rf="LogoDesign"
                  rn="yes"
                />
              </div>
            </div>

            <div class="row" data-aos="fade-up" data-aos-duration="1200">
              <div class="Shafay col-lg-6 col-md-12 col-sm-12">
                <h4 className="font-face-im">Illustration Design</h4>

                <p class="white py-2">
                  Compelling illustrations breathe life into your brand's
                  narrative, amplifying your marketing materials, social media
                  presence, and website content. Our skilled illustrators
                  specialize in curating bespoke artwork that aligns seamlessly
                  with your brand's distinctive style and messaging, leaving a
                  lasting visual impression
                </p>
                <p class="white">
                  With our tailored illustrations, you can effectively elevate
                  your brand's storytelling and captivate your audience. Trust
                  our team's expertise in crafting engaging visuals that not
                  only resonate with your target market but also establish a
                  strong visual impact. Enhance your brand's allure with our
                  customized illustrations that set you apart from the
                  competition.
                </p>
                <CustomButtonArrow
                  title="Learn More"
                  rf="Illustration"
                  rn="yes"
                />
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <img
                  id="Main-Image"
                  src={Image2}
                  className="img-fluid"
                  alt="2"
                />
              </div>
            </div>

            <div class="row" data-aos="fade-up" data-aos-duration="1200">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <img
                  id="Main-Image"
                  src={Image3}
                  className="img-fluid"
                  alt="3"
                />
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h4 className="font-face-im">Branding</h4>

                <p class="white py-2">
                  Creating a cohesive and recognizable brand image requires
                  comprehensive branding services. Our agency specializes in
                  delivering essential solutions such as brand strategy, visual
                  identity design, market research, and brand guideline
                  creation. With our strategic approach, we guarantee a
                  consistent brand presence across all touchpoints, cultivating
                  customer loyalty and driving sustainable success.
                </p>
                <p class="white">
                  Our customized services cater to your brand's unique
                  requirements, enabling you to establish a strong and impactful
                  brand identity. Elevate your brand's visibility and leave a
                  lasting impression with our comprehensive branding services,
                  tailored to fuel your long-term growth.
                </p>
                <div className="mt-4">
                  <CustomButtonArrow
                    title="Learn More"
                    rf="BrandingAgency"
                    rn="yes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalService;
