import React, { useEffect, useState } from "react";
import HeroImage from "./Components/Top banner/HeroImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import Footer from "./Components/Miscellaneous/Footer";
import NavigationBar from "./Components/Top banner/NavigationBar";
import Header from "./Components/Top banner/Header";
import CustomButtonArrow from "./Components/Global/CustomButtonArror";
import AgencyButton from "./Components/Global/AgencyButton";
import logo from "./assets/portfolioIcon.png";
import Aos from "aos";
import ContactForm from "./Components/ContactForm/ContactForm";

const Portfolio = ({ heading2, buttonText }) => {
  const navigate = useNavigate();
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
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

      imageUrl: require("./assets/Logo/1.jpg"),
    },
    {
      id: 2,

      imageUrl: require("./assets/Logo/2.jpg"),
    },
    {
      id: 3,

      imageUrl: require("./assets/Logo/3.jpg"),
    },
    {
      id: 4,

      imageUrl: require("./assets/Logo/4.jpg"),
    },
    {
      id: 5,

      imageUrl: require("./assets/Logo/5.jpg"),
    },
    {
      id: 6,

      imageUrl: require("./assets/Logo/6.jpg"),
    },
    {
      id: 7,

      imageUrl: require("./assets/Logo/7.jpg"),
    },
    {
      id: 8,

      imageUrl: require("./assets/Logo/8.jpg"),
    },
  ];
  const illustration = [
    {
      id: 1,

      imageUrl: require("./assets/BrandingLogos/1.jpg"),
    },
    {
      id: 2,

      imageUrl: require("./assets/BrandingLogos/2.jpg"),
    },
    {
      id: 3,

      imageUrl: require("./assets/BrandingLogos/3.jpg"),
    },
    {
      id: 4,

      imageUrl: require("./assets/BrandingLogos/4.jpg"),
    },
    {
      id: 5,

      imageUrl: require("./assets/BrandingLogos/5.jpg"),
    },
    {
      id: 6,

      imageUrl: require("./assets/BrandingLogos/6.jpg"),
    },
    {
      id: 7,

      imageUrl: require("./assets/BrandingLogos/Untitled-1.jpg"),
    },
  ];

  const branding = [
    {
      id: 1,

      imageUrl: require("./assets/PortFolio1.jpg"),
    },
    {
      id: 2,

      imageUrl: require("./assets/PortFolio2.jpg"),
    },
    {
      id: 3,

      imageUrl: require("./assets/PortFolio3.jpg"),
    },
    {
      id: 4,

      imageUrl: require("./assets/PortFolio4.jpg"),
    },
    {
      id: 5,

      imageUrl: require("./assets/PortFolio5.jpg"),
    },
    {
      id: 6,

      imageUrl: require("./assets/PortFolio6.jpg"),
    },
    {
      id: 7,

      imageUrl: require("./assets/PortFolio7.jpg"),
    },
    {
      id: 8,

      imageUrl: require("./assets/PortFolio8.jpg"),
    },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    dots: false,
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
    <>
      <div className="Portfolio-Page">
        <NavigationBar />
        {/* <Header /> */}

        <div className="Main-Banner container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  {/* <AgencyButton
                                        title={buttonText}
                                        borderRadius="20px"
                                        padding="3px 15px 3px 15px"
                                        buttonClass="my-custom-class font-face-gm"
                                    /> */}
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-12"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p className="bannerTitle font-face-im">
                    Our Recent
                    <br />
                    <span className="font-face-gm" style={{ color: "#09b37d" }}>
                      WorkFolio
                    </span>
                    {heading2}
                  </p>
                </div>
              </div>

              <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <CustomButtonArrow
                    title="Explore  Services"
                    rf="DigitalService"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <CustomButtonArrow title="Get In Touch" rf="ContactForm" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img className="img-fluid child" src={logo} />
            </div>
          </div>
        </div>
      </div>

      <div className="Portfolio-first py-5 container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {/* <h3 className='red font-face-im text-center'>WE TALK ABOUT RECENT ADVANCEMENTS IN TECHNOLOGY </h3> */}
            <h2
              className="font-face-im text-center text-black py-2"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              LOGO DESIGNS
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
                            {/* <div className='Icon-Box-inner'>
                                                                <img src={icon1} alt='icon1' className='img-fluid' />
                                                                <p className='my-title font-face-im text-black ms-2 m-0'>{x.title}</p>
                                                            </div> */}
                            {/* <div className='Icon-Box-inner ms-3'>
                                                                <img src={icon2} alt='icon1' className='img-fluid' />
                                                                <p className='date font-face-im text-blackms-2 mt-2'>{x.date}</p>
                                                            </div> */}
                          </div>
                          {/* <h5 className='font-face-im text-black'>{x.heading}</h5>
                                                        <p className='Content text-black'>{x.description}</p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          {/* <div className="row mt-5">
                            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2" >

                                <button
                                    className="testiBtn"
                                    onClick={blog}
                                >
                                    <span className="font-face-im" style={{ padding: "10px 45px" }} >See More Blogs</span>
                                </button >
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-start  text-center mb-2" >
                                <a href='#ContactForm'>
                                    <button
                                        className="testiBtn"
                                    >
                                        <span className="font-face-im" style={{ padding: "10px 45px" }} >Lets Talk</span>
                                    </button >
                                </a>
                            </div>


                        </div> */}
        </div>
      </div>

      {/* ----------BRANDING----------- */}
      <div className="PortfolioSecond py-5 container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h2
              className="red font-face-im text-center py-2"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              ILLUSTRATIONS
            </h2>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="noScroll">
          <div class="row" style={{ maxWidth: "1024px", margin: "0 auto" }}>
            <div class="col-lg-8 col-md-12">
              <Slider {...settings}>
                {illustration.map((x, index) => {
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
                            {/* <div className='Icon-Box-inner'>
                                                                <img src={icon1} alt='icon1' className='img-fluid' />
                                                                <p className='my-title font-face-im text-black ms-2 m-0'>{x.title}</p>
                                                            </div> */}
                            {/* <div className='Icon-Box-inner ms-3'>
                                                                <img src={icon2} alt='icon1' className='img-fluid' />
                                                                <p className='date font-face-im text-blackms-2 mt-2'>{x.date}</p>
                                                            </div> */}
                          </div>
                          {/* <h5 className='font-face-im text-black'>{x.heading}</h5>
                                                        <p className='Content text-black'>{x.description}</p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="Portfolio-first py-5 container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {/* <h3 className='red font-face-im text-center'>WE TALK ABOUT RECENT ADVANCEMENTS IN TECHNOLOGY </h3> */}
            <h2
              className="font-face-im text-center text-black py-2"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              BRANDING
            </h2>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="noScroll">
          <div class="row" style={{ maxWidth: "1024px", margin: "0 auto" }}>
            <div class="col-lg-8 col-md-12">
              <Slider {...settings}>
                {branding.map((x, index) => {
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
                            {/* <div className='Icon-Box-inner'>
                                                                <img src={icon1} alt='icon1' className='img-fluid' />
                                                                <p className='my-title font-face-im text-black ms-2 m-0'>{x.title}</p>
                                                            </div> */}
                            {/* <div className='Icon-Box-inner ms-3'>
                                                                <img src={icon2} alt='icon1' className='img-fluid' />
                                                                <p className='date font-face-im text-blackms-2 mt-2'>{x.date}</p>
                                                            </div> */}
                          </div>
                          {/* <h5 className='font-face-im text-black'>{x.heading}</h5>
                                                        <p className='Content text-black'>{x.description}</p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          {/* <div className="row mt-5">
                            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2" >

                                <button
                                    className="testiBtn"
                                    onClick={blog}
                                >
                                    <span className="font-face-im" style={{ padding: "10px 45px" }} >See More Blogs</span>
                                </button >
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-start  text-center mb-2" >
                                <a href='#ContactForm'>
                                    <button
                                        className="testiBtn"
                                    >
                                        <span className="font-face-im" style={{ padding: "10px 45px" }} >Lets Talk</span>
                                    </button >
                                </a>
                            </div>


                        </div> */}
        </div>
      </div>

      <div id="ContactForm">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};

export default Portfolio;
