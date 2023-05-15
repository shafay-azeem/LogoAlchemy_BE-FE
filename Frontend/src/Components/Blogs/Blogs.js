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
  console.log(rh);
  console.log(rw);
  const items = [
    {
      id: 1,
      // imageUrl: require('../../assets/Layer 2.png'),
      imageUrl: require("../../assets/bloddetailbackground.jpg"),
      title: "The logo Alcehemy",
      date: "April 14, 2023",
      route: "BlogDetails",
      heading: "THE FUTURE OF ARTIFICIAL INTELLIGENCE",
      description:
        "AS WE ENTER A NEW ERA OF TECHNOLOGICAL INNOVATION, AI IS BECOMING MORE AND MORE PREVALENT IN OUR EVERYDAY LIVES. FROM VIRTUAL ASSISTANTS LIKE SIRI AND ALEXA TO SELF-DRIVING CARS AND PERSONALIZED RECOMMENDATIONS ON SOCIAL MEDIA",
      buttonText: "Continue Reading",
      calendarIcon: require("../../assets/user.png"),
      userIcon: require("../../assets/calendar.png"),
    },
    {
      id: 2,
      // imageUrl: require('../../assets/Layer 2.png'),
      imageUrl: require("../../assets/image open ai.jpg"),
      title: "The logo Alcehemy",
      route: "ArtificalBlogDetails",
      date: "April 14, 2023",
      heading: "OPEN AI",
      description:
        "ARTIFICIAL INTELLIGENCE (AI) IS ONE OF THE MOST TRANSFORMATIVE TECHNOLOGIES OF OUR TIME, WITH THE POTENTIAL TO REVOLUTIONIZE ALMOST EVERY ASPECT OF OUR LIVES. OPENAI, A NON-PROFIT AI RESEARCH ORGANIZATION, IS AT THE FOREFRONT OF DEVELOPING CUTTING-EDGE",
      buttonText: "Continue Reading",
      calendarIcon: require("../../assets/user.png"),
      userIcon: require("../../assets/calendar.png"),
    },
    {
      id: 3,
      // imageUrl: require('../../assets/Layer 2.png'),
      imageUrl: require("../../assets/Untitled-1.jpg"),
      title: "The logo Alcehemy",
      date: "April 14, 2023",
      route: "BrandsIdentity",
      heading: "BUILD A STRONG BRAND IDENTITY IN 2023: TIPS AND TRENDS",
      description:
        "IN 2023, CREATING A STRONG BRAND IDENTITY IS MORE IMPORTANT THAN EVER. WITH THE INCREASING COMPETITION IN THE MARKET, BUSINESSES NEED TO DIFFERENTIATE THEMSELVES AND CONNECT WITH THEIR TARGET AUDIENCE",
      buttonText: "Continue Reading",
      calendarIcon: require("../../assets/user.png"),
      userIcon: require("../../assets/calendar.png"),
    },
    // {
    //     id: 4,
    //     imageUrl: require('../../assets/Layer 2.png'),
    //     title: 'The logo Alcehemy',
    //     date: 'April 14, 2023',
    //     heading: 'ACCELERATING UX MATURITY WITH A BREAKTHROUGH',
    //     description: 'RESEARCH BY AMERICAN MARKETING ASSOCIATION STATES THAT 60% OF MARKETERS INCLUDE WEBINARS IN THEIR MARKETING STATERGY. A SEUVER BY CURATA ALSO BACKS THE IMPORTANCE OF WEBINARS WHERE 79% OF BUYERS ARE READY TO SHARE THEIR CONTACT DETAILS IN EXCHANGE',
    //     buttonText: 'Continue Reading',
    //     calendarIcon: require('../../assets/user.png'),
    //     userIcon: require('../../assets/calendar.png'),
    // },
    // {
    //     id: 5,
    //     imageUrl: require('../../assets/Layer 2.png'),
    //     title: 'The logo Alcehemy',
    //     date: 'April 14, 2023',
    //     heading: 'ACCELERATING UX MATURITY WITH A BREAKTHROUGH',
    //     description: 'RESEARCH BY AMERICAN MARKETING ASSOCIATION STATES THAT 60% OF MARKETERS INCLUDE WEBINARS IN THEIR MARKETING STATERGY. A SEUVER BY CURATA ALSO BACKS THE IMPORTANCE OF WEBINARS WHERE 79% OF BUYERS ARE READY TO SHARE THEIR CONTACT DETAILS IN EXCHANGE',
    //     buttonText: 'Continue Reading',
    //     calendarIcon: require('../../assets/user.png'),
    //     userIcon: require('../../assets/calendar.png'),
    // },
    // {
    //     id: 6,
    //     imageUrl: require('../../assets/Layer 2.png'),
    //     title: 'The logo Alcehemy',
    //     date: 'April 14, 2023',
    //     heading: 'ACCELERATING UX MATURITY WITH A BREAKTHROUGH',
    //     description: 'RESEARCH BY AMERICAN MARKETING ASSOCIATION STATES THAT 60% OF MARKETERS INCLUDE WEBINARS IN THEIR MARKETING STATERGY. A SEUVER BY CURATA ALSO BACKS THE IMPORTANCE OF WEBINARS WHERE 79% OF BUYERS ARE READY TO SHARE THEIR CONTACT DETAILS IN EXCHANGE',
    //     buttonText: 'Continue Reading',
    //     calendarIcon: require('../../assets/user.png'),
    //     userIcon: require('../../assets/calendar.png'),
    // },
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
          <h3
            className="red font-face-im text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            WE TALK ABOUT RECENT ADVANCEMENTS IN TECHNOLOGY{" "}
          </h3>
          <h2
            className="font-face-im text-center text-white py-2"
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
                              src={icon1}
                              alt="icon1"
                              className="img-fluid"
                            />
                            <p className="my-title font-face-im text-white ms-2 mt-2">
                              {x.title}
                            </p>
                          </div>
                          <div className="Icon-Box-inner ms-3">
                            <img
                              src={icon2}
                              alt="icon1"
                              className="img-fluid"
                            />
                            <p className="date font-face-im text-white ms-2 mt-2">
                              {x.date}
                            </p>
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
                  Lets Talk
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
