import React, { useEffect } from "react";
import "../Blogs/BlogDetailPage.css";
import NavigationBar from "../../Components/Top banner/NavigationBar";
import Footer from "../Miscellaneous/Footer";
import fbLogo from "../../assets/001-facebook.png";
import linkdinLogo from "../../assets/003-linkedin.png";
import twitterLogo from "../../assets/002-twitter.png";
import ContactForm from "../../Components/ContactForm/ContactForm";
import CustomButton from "../Global/CustomButton";
import userIcon from "../../assets/user.png";
import calendarIcon from "../../assets/calendar.png";
import layer3 from "../../assets/Layer 3.png";
import CustomButtonArror from "../Global/CustomButtonArror";
import whatsappimg from "../../assets/whatsapp.png";
import phoneimg from "../../assets/phone.png";

const BlogDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButton = () => {
    var url = "https://wa.me/+19015464595";
    window.open(url);
  };
  const navigateContact = () => {
    var url = "tel:+19015464595";
    window.location.href = url;
  };

  return (
    <>
      <div className="blog-detail-header">
        <div className="container-fluid">
          <NavigationBar />
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "280px",
            right: "-1px",
            zIndex: "9999",
            height: "50px",
            width: "50px",
          }}
        >
          <img
            src={phoneimg}
            style={{
              height: "50px",
              width: "50px",

              cursor: "pointer",
            }}
            onClick={navigateContact}
          />
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "20px",
            zIndex: "9999",
            height: "50px",
            width: "50px",
          }}
        >
          <img
            src={whatsappimg}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              cursor: "pointer",
            }}
            onClick={handleButton}
          />
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 text-center">
              <p className="font-face-ex text-white">April 14, 2023</p>
              <h1 className="font-face-ex text-white">The Future of AI</h1>
              <p className="font-face-im text-white">The Logo Alchemy</p>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </div>

      <div className="blod-detail-banner">
        <div className="container py-5">
          <div className="row">
            <div
              style={{ borderRadius: "20px" }}
              className="bg-white shadow col-lg-12"
            >
              <div className="blog-detail-inner p-5">
                <p>
                  As we enter a new era of technological innovation, AI is
                  becoming more and more prevalent in our everyday lives. From
                  virtual assistants like Siri and Alexa to self-driving cars
                  and personalized recommendations on social media, AI is
                  rapidly changing the way we interact with technology. In this
                  blog post, we'll explore the top AI trends to watch in 2023,
                  from machine learning and natural language processing to
                  cybersecurity and edge computing.
                </p>
                <h4 className="font-face-im">Machine Learning</h4>
                <p>
                  Machine learning is a subset of AI that uses statistical
                  techniques to enable computer systems to improve performance
                  on a specific task without being explicitly programmed. In
                  2023, we'll see continued growth in machine learning
                  applications, particularly in areas like predictive analytics,
                  fraud detection, and personalized marketing.
                </p>
                <h4 className="font-face-im">Natural Language Processing</h4>
                <p>
                  Natural language processing (NLP) is the branch of AI that
                  focuses on the interaction between computers and human
                  language. With the rise of virtual assistants and chatbots,
                  NLP is becoming increasingly important in the development of
                  conversational AI. In 2023, we can expect to see significant
                  advancements in NLP, particularly in areas like sentiment
                  analysis and language translation.
                </p>
                <h4 className="font-face-im">Computer Vision</h4>
                <p>
                  Computer vision is the ability of computers to interpret and
                  understand visual information from the world around us. In
                  2023, we'll see continued growth in computer vision
                  applications, particularly in areas like autonomous vehicles,
                  facial recognition, and object detection.
                </p>
                <h4 className="font-face-im">Automation</h4>
                <p>
                  Automation is the use of technology to perform tasks without
                  human intervention. In 2023, we can expect to see more
                  industries and businesses adopting automation technologies,
                  particularly in areas like manufacturing, logistics, and
                  healthcare.
                </p>
                <h4 className="font-face-im">
                  Deep Learning and Neural Networks
                </h4>
                <p>
                  Deep learning is a subset of machine learning that uses
                  artificial neural networks to simulate the way the human brain
                  works. In 2023, we'll see continued growth in deep learning
                  applications, particularly in areas like image and speech
                  recognition.
                </p>
                <h4 className="font-face-im">Big Data</h4>
                <p>
                  Big data refers to the massive amounts of structured and
                  unstructured data generated by businesses and individuals
                  every day. In 2023, we can expect to see more businesses
                  investing in big data technologies and analytics to gain
                  valuable insights into customer behavior and market trends.
                </p>
                <h4 className="font-face-im">Edge Computing</h4>
                <p>
                  Edge computing is the processing of data at the edge of the
                  network, closer to the source of the data. In 2023, we'll see
                  continued growth in edge computing applications, particularly
                  in areas like autonomous vehicles and IoT devices.
                </p>
                <h4 className="font-face-im">Cybersecurity</h4>
                <p>
                  With the increasing use of AI in business and everyday life,
                  cybersecurity will become more important than ever. In 2023,
                  we can expect to see more businesses and governments investing
                  in cybersecurity technologies to protect their networks and
                  data from cyber attacks.
                </p>
              </div>
            </div>
          </div>

          <div className="row py-5 pb-0">
            <div className="col-12 text-end d-flex align-items-center justify-content-end">
              <p className="font-face-im align-items-center justify-content-center m-0">
                Share :{" "}
              </p>
              <img className="img-fluid ms-2" src={fbLogo} alt="fb" />
              <img className="img-fluid ms-2" src={linkdinLogo} alt="fb" />
              <img className="img-fluid ms-2" src={twitterLogo} alt="fb" />
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="ContactForm">
        <ContactForm />
      </div>

      {/* <div className="blog-detail-cards py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h4 style={{ color: '#df0003' }} className='font-face-sm text-center'>WE HAVE MORE BLOGS FOR YOU</h4>
                            <h3 className='font-face-im text-center'>RECENT ARTICLES</h3>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row py-3">
                        <div className="col-lg-4 col-md-12 mb-2">
                            <div className="article-blogs">
                                <div className='article-blogs-inner'>
                                    <img style={{ borderRadius: '10px' }} className='img-fluid' src={layer3} alt="3" />
                                    <div className='d-flex py-3'>
                                        <div className='d-flex justify-content-start align-items-start'>
                                            <img className='img-fluid' src={userIcon} alt="user" />
                                            <p className='ms-2'>The Logo Alchemy</p>
                                        </div>
                                        <div className='d-flex justify-content-start align-items-start ms-3'>
                                            <img className='img-fluid' src={calendarIcon} alt="calendar" />
                                            <p className='ms-2'>April 14, 2023</p>
                                        </div>
                                    </div>

                                    <h5>ACCELERATING UX MATURITY WITH A BREAKTHROUGH</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae nobis autem id minima libero voluptatem, dolores obcaecati quia odio fuga ea et molestiae consequuntur animi dolorem fugiat recusandae? Dicta?</p>
                                    <CustomButtonArror title='Continue Reading' />
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-4 col-md-12 mb-2">
                            <div className="article-blogs">
                                <div className='article-blogs-inner'>
                                    <img style={{ borderRadius: '10px' }} className='img-fluid' src={layer3} alt="3" />
                                    <div className='d-flex py-3'>
                                        <div className='d-flex justify-content-start align-items-start'>
                                            <img className='img-fluid' src={userIcon} alt="user" />
                                            <p className='ms-2'>The Logo Alchemy</p>
                                        </div>
                                        <div className='d-flex justify-content-start align-items-start ms-3'>
                                            <img className='img-fluid' src={calendarIcon} alt="calendar" />
                                            <p className='ms-2'>April 14, 2023</p>
                                        </div>
                                    </div>

                                    <h5>ACCELERATING UX MATURITY WITH A BREAKTHROUGH</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae nobis autem id minima libero voluptatem, dolores obcaecati quia odio fuga ea et molestiae consequuntur animi dolorem fugiat recusandae? Dicta?</p>
                                    <CustomButtonArror title='Continue Reading' />
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-4 col-md-12 mb-2">
                            <div className="article-blogs">
                                <div className='article-blogs-inner'>
                                    <img style={{ borderRadius: '10px' }} className='img-fluid' src={layer3} alt="3" />
                                    <div className='d-flex py-3'>
                                        <div className='d-flex justify-content-start align-items-start'>
                                            <img className='img-fluid' src={userIcon} alt="user" />
                                            <p className='ms-2'>The Logo Alchemy</p>
                                        </div>
                                        <div className='d-flex justify-content-start align-items-start ms-3'>
                                            <img className='img-fluid' src={calendarIcon} alt="calendar" />
                                            <p className='ms-2'>April 14, 2023</p>
                                        </div>
                                    </div>

                                    <h5>ACCELERATING UX MATURITY WITH A BREAKTHROUGH</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae nobis autem id minima libero voluptatem, dolores obcaecati quia odio fuga ea et molestiae consequuntur animi dolorem fugiat recusandae? Dicta?</p>
                                    <CustomButtonArror title='Continue Reading' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <Footer />
    </>
  );
};

export default BlogDetailPage;
