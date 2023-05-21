import React, { useEffect, useState } from "react";
import NavigationBar from "../Top banner/NavigationBar";
import "../Blogs/Articles.css";
import bannerLogo from "../../assets/real-engine.jpg";
import userIcon from "../../assets/user.png";
import calendarIcon from "../../assets/calendar.png";
import layer3 from "../../assets/Layer 3.png";
import CustomButtonArror from "../Global/CustomButtonArror";
import FloatingBtn from "../Global/FloatingBtn";

import Footer from "../Miscellaneous/Footer";
import { useNavigate } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [articleData, setArticleData] = useState([
    {
      id: 1,
      imageUrl: require("../../assets/bloddetailbackground.jpg"),
      title: "The logo Alchemy",
      date: "April 14, 2023",
      route: "BlogDetails",
      heading: "THE FUTURE OF ARTIFICIAL INTELLIGENCE",
      description:
        "As we enter a new era of technological innovation, ai is becoming more and more prevalent in our everyday lives. From virtual assistants like siri and alexa to self-driving cars and personalized recommendations on social media.",
      buttonText: "Continue Reading",
      userIcon: require("../../assets/user.png"),
      calendarIcon: require("../../assets/calendar.png"),
    },
    {
      id: 2,
      imageUrl: require("../../assets/image open ai.jpg"),
      title: "The logo Alchemy",
      route: "ArtificalBlogDetails",
      date: "April 14, 2023",
      heading: "OPEN AI",
      description:
        "Artificial intelligence (ai) is one of the most transformative technologies of our time, with the potential to revolutionize almost every aspect of our lives. Openai, a non-profit ai research organization, is at the forefront of developing cutting-edge.",
      buttonText: "Continue Reading",
      userIcon: require("../../assets/user.png"),
      calendarIcon: require("../../assets/calendar.png"),
    },
    {
      id: 3,
      imageUrl: require("../../assets/Untitled-1.jpg"),
      title: "The logo Alchemy",
      date: "April 14, 2023",
      route: "BrandsIdentity",
      heading: "BUILD A STRONG BRAND IDENTITY IN 2023: TIPS AND TRENDS",
      description:
        "In 2023, creating a strong brand identity is more important than ever. With the increasing competition in the market, businesses need to differentiate themselves and connect with their target audience.",
      buttonText: "Continue Reading",
      userIcon: require("../../assets/user.png"),
      calendarIcon: require("../../assets/calendar.png"),
    },
  ]);

  return (
    <>
      <div className="bgNav">
        <NavigationBar />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "-10px",
          zIndex: "9999",
        }}
      >
        <FloatingBtn />
      </div>
      <div className="blog-background">
        <div className="Atricles container-fluid"></div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h4
                style={{ color: "#df0003" }}
                className="font-face-sm text-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                BLOGS
              </h4>
              <h3
                className="font-face-im text-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                RECENT ARTICLES
              </h3>
              <p
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                We work hard to create valuable content for you & your business.
                Explore it
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        <div className="container py-3">
          <div className="Article-Banner row">
            <div className="Article-Inner-1 d-md-flex bg-white">
              <div className="Article-Inner col-lg-6">
                <div className="inner-items p-5">
                  <div className="inner-user-calendar">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        style={{ width: "18px", height: "auto" }}
                        src={userIcon}
                        alt="user"
                      />
                      <p className="ms-2 m-0">The Logo Alchemy</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ms-4">
                      <img
                        style={{ width: "18px", height: "auto" }}
                        src={calendarIcon}
                        alt="calendar"
                      />
                      <p className="ms-2 m-0">April 14, 2023</p>
                    </div>
                  </div>
                  <h3 style={{ textTransform: "uppercase" }} className="pt-3">
                    A Paradigm Shift in Game Development
                  </h3>
                  <p className="Article-Para">
                    The gaming industry is constantly evolving, pushing
                    boundaries and seeking new ways to captivate players with
                    immersive and visually stunning experiences. In this quest
                    for innovation, one name stands out: Unreal Engine.
                  </p>
                  <CustomButtonArror
                    rf="GameBlogDetails"
                    rn="yes"
                    title="Continue Reading"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="inner-image p-3">
                  <img
                    style={{ borderRadius: "15px" }}
                    className="img-fluid"
                    src={bannerLogo}
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-3">
          <div className="row">
            {articleData.map((x, index) => {
              return (
                <div
                  className="col-lg-4 col-md-12 mb-2"
                  data-aos="zoom-in"
                  data-aos-duration="1300"
                >
                  <div className="article-blogs">
                    <div className="article-blogs-inner">
                      <img
                        style={{ borderRadius: "10px" }}
                        className="img-fluid"
                        src={x.imageUrl}
                        alt="3"
                      />
                      <div className="d-flex py-3">
                        <div className="d-flex justify-content-start align-items-start">
                          <img
                            style={{ width: "18px", height: "auto" }}
                            className="img-fluid"
                            src={userIcon}
                            alt="user"
                          />
                          <p className="ms-2">{x.title}</p>
                        </div>
                        <div className="d-flex justify-content-start align-items-start ms-3">
                          <img
                            style={{ width: "18px", height: "auto" }}
                            className="img-fluid"
                            src={x.calendarIcon}
                            alt="calendar"
                          />
                          <p className="ms-2">{x.date}</p>
                        </div>
                      </div>

                      <h5>{x.heading}</h5>
                      <p>{x.description}</p>
                      <CustomButtonArror
                        rf={x.route}
                        rn="yes"
                        title="Continue Reading"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="ContactForm">
            <ContactForm />
          </div>
          {/* <div className="text-center py-5">
                        <CustomButton title='Load More Blogs'
                            padding='8px 30px'
                        />
                    </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
