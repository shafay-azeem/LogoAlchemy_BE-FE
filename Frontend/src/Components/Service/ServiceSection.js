import React, { useState, useEffect } from "react";
import "../Service/ServiceSection.css";
import img1 from "../../assets/Vector Smart Object-1.png";
import img2 from "../../assets/Vector Smart Object-2.png";
import img3 from "../../assets/Vector Smart Object-3.png";
import tick from "../../assets/tick.png";
import Star from "../../assets/star.png";
import CustomButton from "../Global/CustomButton";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceSection = () => {
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
  console.log(rh);
  console.log(rw);
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container noScroll">
          <div className="row" data-aos="zoom-in" data-aos-duration="1000">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h3 className="title-red font-face-im text-center">
                We create exceptional visual identities for brands
              </h3>
              <h4 className="black font-face-im text-center">
                Our team crafts customized designs that captivate audiences and
                elevate brands
              </h4>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row py-4">
            <div
              className="Main-Section col-lg-4 col-md-8 col-sm-12 mb-2"
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-duration="800"
            >
              <div className="Section">
                <div className="s-inner">
                  <img className="font-face-im py-3" src={img1} alt="1" />
                  {/* <h4 className="Heading font-face-im py-3">
                    Made Possible To Create <br />
                    <span className="red font-face-im">

                    </span>
                  </h4> */}
                  <h4 className="red font-face-im py-3">
                    Customized Solutions
                  </h4>
                  <h5 className="grey font-face-hm py-2">
                    We offer bespoke design services tailored to your brand's
                    specific needs and goals, ensuring that your visual identity
                    truly reflects your brand's personality and values.
                  </h5>
                </div>
              </div>
            </div>

            <div
              className="Main-Section col-lg-4 col-md-8 col-sm-12 col-md-4 mb-2"
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-duration="800"
            >
              <div className="Section">
                <div className="s-inner">
                  <img className="py-3" src={img2} alt="2" />
                  {/* <h4 className="font-face-im py-3">
                    Audience Perceives <br />{" "}
                    <span className="red font-face-im">Our Branding</span>
                  </h4> */}

                  <h4 className="red font-face-im py-3">Competitive Pricing</h4>
                  <h5 className="grey font-face-hm py-2">
                    Our affordable rates make our high-quality design services
                    accessible to clients of all sizes, helping you allocate
                    resources effectively and maximize your return on
                    investment.
                  </h5>
                </div>
              </div>
            </div>

            <div
              className="Main-Section col-lg-4 col-md-8 col-sm-12 mb-2"
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-duration="800"
            >
              <div className="Section">
                <div className="s-inner">
                  <img className="font-face-im py-3" src={img1} alt="1" />
                  {/* <h4 className="Heading font-face-im py-3">
                    Made Possible To Create <br />
                    <span className="red font-face-im">
                      Your Ideas Into Reality
                    </span>
                  </h4> */}
                  <h4 className="red font-face-im py-3">
                    Expertise & Experience
                  </h4>
                  <h5 className="grey font-face-hm py-2">
                    Our decade of experience in the design industry has honed
                    our skills in logo design, illustration, and branding,
                    making us a reliable partner for your brand's visual
                    identity needs.
                  </h5>
                </div>
              </div>
            </div>

            <h3
              style={{ color: "black", fontSize: "22.5px" }}
              className="text-center font-face-im py-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Think We’re Done & Dusted?
              <span
                style={{ color: "#d40e2f", fontSize: "22.5px" }}
                className=" text-center font-face-im py-4"
              >
                &nbsp; We Build Long-Lasting Relationships That Don’t Stop at Project
                Delivery.
              </span>
            </h3>

            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end text-center mb-2">
                <CustomButton
                  title="Explore Services"
                  padding="10px 45px"
                  marginRight="20px"
                  fontSize="20px"
                  rf="Portfolio"
                  rn="yes"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 text-lg-start  text-center mb-2">
                <CustomButton
                  title="Lets Talk"
                  padding="10px 45px"
                  fontSize="20px"
                  rf="ContactForm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
