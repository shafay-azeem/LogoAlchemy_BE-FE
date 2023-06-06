import React, { useEffect, useState } from "react";
import "../../Components/ContactForm/LetsTalk.css";

const Letstalk = () => {
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

  const divStyle = {
    padding: "3px",
    borderRadius: "35px",
    height: "70px",
    width: "90%",
    background:
      "linear-gradient(to right, #B91532, #9E3040, #9B3342, #8E4049, #755A56, #5F7061, #48876D, #3C9373, #1F8C8A, #207E8C, #226E8E, #236190, #245891, #273C95, #273B95 )",
  };
  const inputStyle = {
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "35px",
    border: "none",
    outline: "none",
    width: "60%",
    color: "#000000",
  };
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2"></div>
        {/* <div className="col-md-8 col-sm-4"> */}
        <div className="col-lg-8 col-md-12 col-sm-12">
          {/* <h4
            className="font-face-im text-center red text-uppercase"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            We provide service like never before experienced by you.
          </h4> */}
          <p
            className="inner-Heading font-face-im text-center black"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            SUBSCRIBE US TO GET NEW UPDATES AND OFFERS
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-7">
          <div className="MainInput">
            <div style={divStyle}>
              <input type="text" placeholder="EMAIL ID" style={inputStyle} />

              <span
                style={{
                  cursor: "pointer",
                  fontSize:
                    rw <= 350
                      ? "12px"
                      : rw > 350 && rw <= 640
                      ? "15px"
                      : rw >= 641 && rw <= 1007
                      ? "17px"
                      : "21px",
                }}
                className="Span font-face-sm ms-3 text-white"
              >
                Subscribe Us
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Letstalk;
