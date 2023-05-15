import React, { useEffect } from "react";
import tick from "../../assets/tick.png";
import Star from "../../assets/star.png";
import "../Testimonials/Testimonial.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="Testimonial container-fluid ">
      <div className="container py-5">
        <h4
          className="text-center font-face-im"
          style={{ color: "#d40e2f" }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          WE'RE A TOP RATED BRANDING AGENCY
        </h4>
        <h2
          className="text-center font-face-im py-3"
          style={{ color: "white" }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          What Our Clients Say
        </h2>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12 my-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              style={{
                backgroundColor: "#313131",
                borderRadius: "12px",
                padding: "25px",
              }}
            >
              <p className="text-white">
                There team is absolutely amazing! From their customer service
                all the way to your final product. Their work is guranteed to
                make your graphics pop!
              </p>
              <p className="text-white">Founder, 2k Upin Flames</p>
              <p className="text-white">Pauly Johnson</p>
              <div className="d-flex justify-content-start">
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                  src={tick}
                  alt="banner"
                />

                <p
                  style={{
                    color: "#177e5b",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className=" ms-2"
                >
                  Verified Review
                </p>
              </div>

              <div className="d-flex justify-content-start">
                <p className="ratingParagraph ms-2">5.0</p>
                <img className="ratingStars ms-3" src={Star} alt="banner" />
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 my-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              style={{
                backgroundColor: "#313131",
                borderRadius: "12px",
                padding: "25px",
              }}
            >
              <p style={{ marginBottom: "64px" }} className="text-white">
                Super fast and totally worth the money. Great team!
              </p>
              <p className="text-white">Founder, Spotless Surface Cleaning</p>
              <p className="text-white">Gabe Sanchez</p>

              <div className="d-flex justify-content-start">
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                  src={tick}
                  alt="banner"
                />

                <p
                  style={{
                    color: "#177e5b",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className=" ms-2"
                >
                  Verified Review
                </p>
              </div>

              <div className="d-flex justify-content-start">
                <p className="ratingParagraph ms-2">5.0</p>
                <img className="ratingStars ms-3" src={Star} alt="banner" />
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 my-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              style={{
                backgroundColor: "#313131",
                borderRadius: "12px",
                padding: "25px",
              }}
            >
              <p className="text-white">
                Excellent design service, very attentive to your needs, I
                ordered 5 graphic designs and the result was very satisfactory!
                I recommend 100%
              </p>
              <p className="text-white">Founder, Andy's W Designs</p>
              <p className="text-white">Pakito Rojas</p>

              <div className="d-flex justify-content-start">
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                  src={tick}
                  alt="banner"
                />

                <p
                  style={{
                    color: "#177e5b",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className=" ms-2"
                >
                  Verified Review
                </p>
              </div>

              <div className="d-flex justify-content-start">
                <p className="ratingParagraph ms-2">5.0</p>
                <img className="ratingStars ms-3" src={Star} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
