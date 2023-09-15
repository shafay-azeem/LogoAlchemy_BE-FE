import React, { useState, useEffect } from "react";
import "../Blogs/Blogs.css";
import img1 from "../../assets/Layer 2.png";
import img2 from "../../assets/Layer 3.png";
import icon1 from "../../assets/user.png";
import icon2 from "../../assets/calendar.png";
import CustomButton from "../Global/CustomButton";
import buttonLogo from "../../assets/circle.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButtonArrow from "../Global/CustomButtonArror";
import GradientCustomButton from "../Global/GradientCustomButton";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
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

  const items = [
    {
      id: 1,
      imageUrl: require("../../assets/bloddetailbackground.jpg"),
      title: "The logo Alchemy",
      date: "April 12, 2023",
      route: "BlogDetails",
      heading: "THE FUTURE OF ARTIFICIAL INTELLIGENCE",
      description:
        "As we enter a new era of technological innovation, ai is becoming more and more prevalent in our everyday lives. from virtual assistants like siri and alexa to self-driving cars and personalized recommendations on social media",
      buttonText: "Read More",
      calendarIcon: require("../../assets/user.png"),
      userIcon: require("../../assets/calendar.png"),
    },
    {
      id: 2,
      imageUrl: require("../../assets/image open ai.jpg"),
      title: "The logo Alchemy",
      route: "ArtificalBlogDetails",
      date: "April 21, 2023",
      heading: "OPEN AI",
      description:
        "Artificial intelligence (ai) is one of the most transformative technologies of our time, with the potential to revolutionize almost every aspect of our lives. openai, a non-profit ai research organization, is at the forefront of developing cutting-edge",
      buttonText: "Read More",
      calendarIcon: require("../../assets/user.png"),
      userIcon: require("../../assets/calendar.png"),
    },
    {
      id: 3,
      imageUrl: require("../../assets/Untitled-1.jpg"),
      title: "The logo Alchemy",
      date: "April 29, 2023",
      route: "BrandsIdentity",
      heading: "BUILD A STRONG BRAND IDENTITY IN 2023: TIPS AND TRENDS",
      description:
        "In 2023, creating a strong brand identity is more important than ever. with the increasing competition in the market, businesses need to differentiate themselves and connect with their target audience",
      buttonText: "Read More",
      calendarIcon: require("../../assets/user.png"),
      userIcon: require("../../assets/calendar.png"),
    },
    {
      id: 4,
      imageUrl: require("../../assets/real-engine.jpg"),
      title: "The logo Alchemy",
      date: "May 1, 2023",
      route: "GameBlogDetails",
      heading: "A PARADIGM SHIFT IN GAME DEVELOPMENT",
      description:
        "The gaming industry is constantly evolving, pushing boundaries and seeking new ways to captivate players with immersive and visually stunning experiences. in this quest for innovation, one name stands out: unreal engine.",
      buttonText: "Read More",
      calendarIcon: require("../../assets/user.png"),
      userIcon: require("../../assets/calendar.png"),
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

  const blog = () => {
    navigate({
      pathname: "/Articles",
    });
  };

  return (
    <div className="Blog py-5 container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          {/* <h3
            className="red font-face-im text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            WE TALK ABOUT RECENT ADVANCEMENTS IN TECHNOLOGY{" "}
          </h3> */}
          <h2
            className="font-face-im text-center text-white py-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            OUR RECENT BLOGS & NEWS
          </h2>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="noScroll">
        <div class="row" style={{ maxWidth: "1024px", margin: "0 auto" }}>
          <div class="col-lg-8 col-md-12">
            <Slider {...settings}>
              {items.map((x, index) => {
                return (
                  <div className="col-lg-8">
                    <div className="px-3">
                      <img
                        className="Blog-img img-fluid"
                        src={x.imageUrl}
                        alt="1"
                      />
                      <div className="row">
                        <div className="Icon-Box py-3">
                          <div className="Icon-Box-inner">
                            <img
                              style={{ width: "18px" }}
                              src={icon1}
                              alt="icon1"
                              className="img-fluid"
                            />
                            <p className="my-title text-white ms-2 m-0">
                              {x.title}
                            </p>
                          </div>
                          <div className="Icon-Box-inner ms-3">
                            <img
                              style={{ width: "18px" }}
                              src={icon2}
                              alt="icon1"
                              className="img-fluid"
                            />
                            <p className="date text-white ms-2 m-0">{x.date}</p>
                          </div>
                        </div>
                        <h5 className="font-face-im Content-heading">
                          {x.heading}
                        </h5>
                        <p className="Content text-white">{x.description}</p>
                        <div className="buttonView d-flex justify-content-start align-items-center">
                          <CustomButtonArrow
                            width={
                              rw <= 350
                                ? "10px"
                                : rw > 350 && rw <= 640
                                ? "13px"
                                : rw >= 641 && rw <= 1007
                                ? "16px"
                                : "20px"
                            }
                            title={x.buttonText}
                            rf={x.route}
                            rn="yes"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <button className="testiBtn" onClick={blog}>
              <span className="font-face-im" style={{ padding: "10px 45px" }}>
                See More Blogs
              </span>
            </button>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-12 text-lg-start  text-center mb-2"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <a href="#ContactForm">
              <button className="testiBtn">
                <span className="font-face-im" style={{ padding: "10px 45px" }}>
                  Let's Talk
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
