import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "../Global/CustomButton";
import GradientCustomButton from "../Global/GradientCustomButton";

const IllustrationClient = (props) => {
  const [caseStudyData, setCaseStudyData] = useState(props?.items);
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="Second-Slider py-5">
      <div className="row text-center">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1
            style={{ color: "black", fontSize: "30px" }}
            className="font-face-ex"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Case Studies
          </h1>
        </div>
        <div className="col-md-3"></div>
      </div>

      <section className="row py-3">
        <div className="illusSection container" style={{ overflowX: "hidden" }}>
          <div style={{ maxWidth: "1024px", margin: "0px auto" }} class="row">
            <div class="col-lg-12 col-md-12">
              <Slider {...settings}>
                {caseStudyData.map((x, index) => {
                  return (
                    <>
                      <div className="px-2 py-3">
                        <div class="d-md-flex illusCardDesign">
                          <div className="illu d-md-flex">
                            <div class="col-md-8">
                              <h2
                                style={{ color: "black" }}
                                className="font-face-im"
                              >
                                {x.heading}
                              </h2>
                              <p className="font-face-hm">
                                <strong>{x.description1Heading} </strong>
                                {x.description1}
                              </p>
                              <p className="font-face-hm">
                                <strong>{x.description2Heading} </strong>
                                {x.description2}
                              </p>
                              <p className="font-face-hm">
                                <strong>{x.description3Heading}</strong>
                                {x.description3}
                              </p>
                              <GradientCustomButton
                                title="Check Portfolio"
                                padding="8px 40px"
                                marginTop="2px"
                                marginBottom="12px"
                                rf="Portfolio"
                              />
                            </div>
                            <div class="col-md-4 text-sm-center ">
                              <img
                                className="img-fluid"
                                src={x.image}
                                alt="1"
                                style={{ borderRadius: "10px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2">
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
            title="Let's Talk"
            padding="10px 45px"
            fontSize="20px"
            rf="ContactForm"
          />
        </div>
      </div>
    </div>
  );
};

export default IllustrationClient;
