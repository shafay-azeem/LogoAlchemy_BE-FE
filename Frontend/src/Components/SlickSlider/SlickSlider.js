import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick-theme.css";
import "../SlickSlider/SlickSlider.css";
import CustomBrands from "../Brands/CustomBrands";
import GradientCustomButton from "../Global/GradientCustomButton";
import CustomButton from "../Global/CustomButton";

const SlickSlider = () => {
  const items = [
    {
      id: 1,
      // heading: 'Some Go Extra Mile',
      heading1: "Client Focus",
      description1:
        "We place our clients at the center of our design process. By taking the time to truly understand your unique needs, objectives, and vision, we can develop design solutions that not only align with your business goals but also resonate with your target audience.",
      description2:
        "Our commitment to client satisfaction drives us to exceed expectations and deliver outstanding results tailored to your brand.",
    },
    {
      id: 2,
      heading1: "Creativity & Innovation",
      // heading: 'Some Go Extra Mile',
      description1:
        "Our team of experienced designers is passionate about staying up-to-date with the latest design trends and techniques. We continuously seek opportunities to push the boundaries of creativity, ensuring that your brand stands out in today's competitive landscape.",
      description2:
        "By embracing innovation and nurturing an environment of continuous learning, our agency delivers cutting-edge design solutions that set your brand apart.",
    },
    {
      id: 3,
      // heading: 'Some Go Extra Mile',
      heading1: "Quality & Attention to Detail",
      description1:
        "We take pride in providing high-quality design services that showcase your brand's professionalism and commitment to excellence. Our meticulous attention to detail ensures that every aspect of your brand's visual identity is polished and consistent,",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae, doloribus est similique hic minus!",
    },
    {
      id: 4,
      heading1: "Collaboration & Communication",
      description1:
        "We believe that open communication and effective collaboration are essential components of a successful design project. By maintaining transparent communication throughout the design process, we ensure that our clients are always informed and involved in key decisions.",
      description2:
        "This collaborative approach fosters strong working relationships and helps to achieve a seamless project execution that meets your brand's objectives.",
    },
  ];

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
    <>
      <div className="Main container-fluid py-5 slider-container">
        <h2
          className="text-center font-face-im red"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Our Core Values That You Can Trust
        </h2>
        {/* <h3 className='text-center pb-5 font-face-im black' data-aos-duration="1000">We Would Love To Stand With You And Go Miles Away Together</h3> */}
        <h3
          className="text-center pb-5 font-face-im black"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Let's unite and conquer every milestone together.
        </h3>

        <div class="row">
          <div style={{ maxWidth: "750px", margin: "0px auto" }} class="row">
            <div class="col-lg-12 col-md-12">
              <Slider {...settings} className="core-values">
                {items.map((x, index) => {
                  return (
                    <>
                      <div className="px-2 py-3">
                        <div className="My-Card  col-lg-12 text-center py-4 px-4">
                          <div className="My-Card-Inner py-5">
                            <h4 className="red font-face-im">{x.heading1}</h4>
                            <p
                              style={{ color: "#000000" }}
                              className="font-face-hm"
                            >
                              {x.description1}
                            </p>
                            <p
                              style={{ color: "#000000" }}
                              className="font-face-hm"
                            >
                              {x.description2}
                            </p>
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

        <CustomBrands />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2">
            <CustomButton
              title="Explore Services"
              padding="10px 45px"
              rf="Portfolio"
              rn="yes"
              z="1"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-lg-start  text-center mb-2">
            <CustomButton
              title="Lets Talk"
              padding="10px 45px"
              fontSize="20px"
              rf="ContactForm"
              z="1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlickSlider;
