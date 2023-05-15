import React, { useState } from "react";

import OneImg from "../../assets/01.png";
import TwoImg from "../../assets/02.png";
import ThreeImg from "../../assets/03.png";
import "../Global/CustomMultiCards.css";

const CustomMultiCards = (props) => {
  const [data, setData] = useState(props?.cardData);
  console.log(data);
  return (
    <>
      <div className="CustomMultiCards  container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h3
                className="title-red font-face-im text-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                WE’REAFULL-SERVICE BRANDING & MARKETING AGENCY
              </h3>
              <h4
                className="black font-face-im text-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                {props?.cardHeading}
              </h4>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row py-4">
            {data.map((x, index) => {
              return (
                <div
                  className="Main-Section col-lg-4 col-md-8 col-sm-12 mb-2"
                  data-aos="flip-right"
                  data-aos-anchor-placement="top-center"
                  data-aos-duration="800"
                >
                  <div className="MultiSection ">
                    <div className="Multi-inner p-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <img
                          className="font-face-im py-3"
                          src={x?.image1}
                          alt="1"
                        />
                        <img
                          className="font-face-im py-3"
                          src={x.image2}
                          alt="1"
                        />
                      </div>
                      <h4 className="Heading font-face-im py-3">
                        {x.heading}
                        <span className="red font-face-im ms-2">
                          {x.heading2}
                        </span>
                      </h4>
                      <h5 className="grey font-face-hm py-2">
                        {x.description}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div
                            className="Main-Section col-lg-4 col-md-8 col-sm-12 col-md-4 mb-2"
                        >
                            <div className="MultiSection ">
                                <div className="Multi-inner p-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img className="font-face-im py-3" src={TwoImg} alt="1" />
                                        <img className="font-face-im py-3" src={StratergyImg} alt="1" />
                                    </div>
                                    <h4 className="Heading font-face-im py-3">
                                        Conducting
                                        <span className="red font-face-im ms-2">
                                            Research
                                        </span>
                                    </h4>
                                    <h5 className="grey font-face-hm py-2">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s
                                    </h5>
                                </div>
                            </div>
                        </div>




                        <div
                            className="Main-Section col-lg-4 col-md-8 col-sm-12 mb-2"

                        >
                            <div className="MultiSection ">
                                <div className="Multi-inner p-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img className="font-face-im py-3" src={ThreeImg} alt="1" />
                                        <img className="font-face-im py-3" src={CreativityImg} alt="1" />
                                    </div>
                                    <h4 className="Heading font-face-im py-3">
                                        Conducting
                                        <span className="red font-face-im ms-2">
                                            Research
                                        </span>
                                    </h4>
                                    <h5 className="grey font-face-hm py-2">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s
                                    </h5>
                                </div>

                            </div>
                        </div> */}

            {/* <h3
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
                                We Build Long-Lasting Relationships That Don’t Stop at Project
                                Delivery.
                            </span>
                        </h3> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomMultiCards;
