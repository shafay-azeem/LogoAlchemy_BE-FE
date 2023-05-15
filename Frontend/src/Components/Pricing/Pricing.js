import React, { useEffect, useState } from "react";
import "../Pricing/Pricing.css";
import img1 from "../../assets/basicanother.png";
import CustomButton from "../Global/CustomButton";
import buttonLogo from "../../assets/circle.png";

const Pricing = () => {
  const divStyle = {
    padding: "2px",
    borderRadius: "30px",
    background:
      "linear-gradient(to right, #B91532, #9E3040, #9B3342, #8E4049, #755A56, #5F7061, #48876D, #3C9373, #1F8C8A, #207E8C, #226E8E, #236190, #245891, #273C95, #273B95 )",
  };
  const inputStyle = {
    padding: "15px",
    backgroundColor: "#FFFFFF",
    borderRadius: "30px",
    border: "none",
    outline: "none",
    width: "100%",
    cursor: "pointer",
    fontSize: "20px",
    color: "#000000",
  };

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
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <h3
            className="text-center red font-face-im"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            OUR TOP NOTCH POCKET FRIENDLY SERVICE PLANS
          </h3>
          <h1
            className="text-center black font-face-im "
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            BEST SELLING POCKET-FRIENDLY PRICING PLAN
          </h1>
        </div>
      </div>

      {/* ---------- THIS IS NEW ONE----------- */}
      <div class="container py-5">
        <div class="row" style={{ padding: "50px 0" }}>
          <div class="glass col-md-8 col-sm-4 col-lg-4">
            <div class="twrap">
              <div class="title">BASIC</div>
            </div>
            <div class="div1 mb-3">
              <div class="div2">
                <div class="div3">
                  <h3 className="text-center">
                    <del className="font-face-ex text-center red">$239.99</del>
                  </h3>
                  <h1
                    style={{ color: "#343b3e" }}
                    className="font-face-ex text-center "
                  >
                    $119.99
                  </h1>
                  <div className="Package-Description">
                    <p
                      style={{ color: "#5c5d5f" }}
                      className="Package-Description-inner text-center"
                    >
                      2 Orignal logo concept 1 Dedicated logo designer 2
                      Revisions only Format : JPEG only 24-48 Hours turnaround
                      time 100% Ownership rights 2 Orignal logo concept 1
                      Dedicated logo designer 2 Revisions only Format : JPEG
                      only 24-48 Hours turnaround time 100% Ownership rights
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bwrap">
              <div class="purchase">Purchase Now!</div>
            </div>
          </div>

          <div class="glass col-md-8 col-sm-4 col-lg-4">
            <div class="twrap">
              <div class="title">STANDARD</div>
            </div>
            <div class="div1 mb-3">
              <div class="div2">
                <div class="div3">
                  <h3 className="text-center">
                    <del className="font-face-ex text-center red">$239.99</del>
                  </h3>
                  <h1
                    style={{ color: "#343b3e" }}
                    className="font-face-ex text-center "
                  >
                    $119.99
                  </h1>
                  <div className="Package-Description">
                    <p
                      style={{ color: "#5c5d5f" }}
                      className="Package-Description-inner text-center"
                    >
                      2 Orignal logo concept 1 Dedicated logo designer 2
                      Revisions only Format : JPEG only 24-48 Hours turnaround
                      time 100% Ownership rights 2 Orignal logo concept 1
                      Dedicated logo designer 2 Revisions only Format : JPEG
                      only 24-48 Hours turnaround time 100% Ownership rights
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bwrap">
              <div class="purchase">Purchase Now!</div>
            </div>
          </div>

          <div class="glass col-md-8 col-sm-4 col-lg-4">
            <div class="twrap">
              <div class="title">PREMIUM</div>
            </div>
            <div class="div1 mb-3">
              <div class="div2">
                <div class="div3">
                  <h3 className="text-center">
                    <del className="font-face-ex text-center red">$239.99</del>
                  </h3>
                  <h1
                    style={{ color: "#343b3e" }}
                    className="font-face-ex text-center "
                  >
                    $119.99
                  </h1>
                  <div className="Package-Description">
                    <p
                      style={{ color: "#5c5d5f" }}
                      className="Package-Description-inner text-center"
                    >
                      2 Orignal logo concept 1 Dedicated logo designer 2
                      Revisions only Format : JPEG only 24-48 Hours turnaround
                      time 100% Ownership rights 2 Orignal logo concept 1
                      Dedicated logo designer 2 Revisions only Format : JPEG
                      only 24-48 Hours turnaround time 100% Ownership rights
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bwrap">
              <div class="purchase">Purchase Now!</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="View-More-Packages row py-2">
        <div className="col-lg-12 col-md-6 col-sm-6 text-center">
          <CustomButton
            title="View More Packages"
            padding="10px 45px"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Pricing;
