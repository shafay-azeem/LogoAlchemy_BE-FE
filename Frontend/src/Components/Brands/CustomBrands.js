import React from "react";
import cartoon1 from "../../assets/fairy-fox-alchemist-keep-potion-bottle-illustration-generative-ai.png";
import cartoon2 from "../../assets/cartoon-character-with-yellow-jacket-sunglasses.jpg";
import cartoon3 from "../../assets/b.png";
import cartoon4 from "../../assets/a.png";
import "../Brands/CustomBrands.css";
import buttonLogo from "../../assets/circle.png";
import AgencyButton from "../Global/AgencyButton";

const CustomBrands = () => {
  return (
    <>
      <div className="Brands conatiner-fluid my-5 py-5">
        <h3
          className="text-center font-face-im"
          style={{ color: "#d40e2f" }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          OUR AGENCY'S RECENT DIGITAL PROJECTS
        </h3>
        <h2
          className="text-center font-face-im"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          We've Worked With & Built Brands Across The Globe
        </h2>
        <p
          className="text-center mb-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          We take pride in displaying our customer-approved projects. <br></br>
          Browse through our portfolio below to have a creative design
          inspiration.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div style={{ height: "275px" }} className="xyz">
                <div style={{ marginLeft: "20px" }}></div>
              </div>
              <div className="d-lg-flex">
                <div className="col-lg-6 col-md-12 mb-1">
                  <img
                    className="shadow img-fluid pt-2"
                    style={{ borderRadius: "10px" }}
                    src={cartoon3}
                  />
                </div>
                <div className="col-lg-6 col-md-12 mb-1">
                  <img
                    className="shadow img-fluid pt-2"
                    style={{ borderRadius: "10px" }}
                    src={cartoon2}
                  />
                </div>
              </div>
            </div>

            <div className="Cartoon col-md-6">
              <div className="cart-Inner">
                <p className="font-face-im text-white">Iullustration & Arts </p>{" "}
                <hr
                  style={{
                    width: "30%",
                    color: "white",
                  }}
                />
                <h2 className="font-face-im text-white">For The Chemist</h2>
                <p>
                  The sly fox, with a mischievous grin, tinkers with vials and
                  beakers, brewing whimsical concoctions that dazzle the
                  woodland creatures with their enchanting effects.
                </p>
              </div>
              <AgencyButton title={"View More"} padding="8px 15px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomBrands;
