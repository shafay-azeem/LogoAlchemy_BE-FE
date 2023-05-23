import React, { useEffect } from "react";
import Footer from "../Miscellaneous/Footer";
import NavigationBar from "../../Components/Top banner/NavigationBar";
import fbLogo from "../../assets/001-facebook.png";
import linkdinLogo from "../../assets/003-linkedin.png";
import twitterLogo from "../../assets/002-twitter.png";
import ContactForm from "../../Components/ContactForm/ContactForm";
import userIcon from "../../assets/user.png";
import calendarIcon from "../../assets/calendar.png";
import layer3 from "../../assets/Layer 3.png";
import CustomButtonArror from "../Global/CustomButtonArror";
import "../Blogs/BrandsIdentity.css";
import whatsappimg from "../../assets/whatsapp.png";
import phoneimg from "../../assets/phone.png";

const BrandsIdentity = () => {
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
      <div className="blog-identity-header">
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
              <h1 className="font-face-ex text-white">
                BUILD A STRONG BRAND IDENTITY IN 2023: TIPS AND TRENDS
              </h1>
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
                  In 2023, creating a strong brand identity is more important
                  than ever. With the increasing competition in the market,
                  businesses need to differentiate themselves and connect with
                  their target audience. A successful brand identity not only
                  communicates the business's values and purpose but also helps
                  customers recognize and remember the brand. In this blog, we
                  will discuss the key elements of brand identity, the latest
                  trends, and how to build a strong brand identity that stands
                  out in 2023.
                </p>
                <h2 className="font-face-im py-2">
                  Key Elements of Brand Identity
                </h2>
                <h4 className="font-face-im">Logo</h4>
                <p>
                  A logo is the face of the brand and plays a crucial role in
                  creating a lasting impression on customers. It should be
                  simple, memorable, and reflect the brand's values and
                  personality.
                </p>
                <h4 className="font-face-im">Color Scheme</h4>
                <p>
                  Color psychology plays a significant role in branding. A
                  well-chosen color scheme can evoke emotions and create a
                  unique identity for the brand. In 2023, bold and bright colors
                  are expected to be popular, as they grab attention and create
                  a sense of energy.
                </p>
                <h4 className="font-face-im">Typography</h4>
                <p>
                  The font and typography used in branding should be consistent
                  and reflect the brand's personality. In 2023, bold and unique
                  fonts are expected to be in trend, as they help create a
                  distinct identity.
                </p>
                <h4 className="font-face-im">Voice and Tone</h4>
                <p>
                  The language and tone used in branding should reflect the
                  brand's personality and values. It should be consistent across
                  all channels and communication platforms.
                </p>
                <h2 className="font-face-im py-2">
                  2023 Brand Identity Trends
                </h2>
                <h4 className="font-face-im">Sustainability</h4>
                <p>
                  With the growing concern for the environment, sustainability
                  has become a significant factor in branding. Businesses that
                  prioritize eco-friendly practices and promote sustainability
                  are more likely to connect with customers in 2023.
                </p>
                <h4 className="font-face-im">Personalization</h4>
                <p>
                  Personalization has been a trend for a while and will continue
                  to be popular in 2023. Businesses that personalize their
                  products, services, and communication will create a more
                  engaging and memorable experience for customers.
                </p>
                <h4 className="font-face-im">Minimalism</h4>
                <p>
                  Minimalistic branding with simple and clean designs is
                  expected to be a trend in 2023. It creates a sense of
                  sophistication and elegance, while also being memorable and
                  easy to recognize.
                </p>
                <h2 className="font-face-im py-2">
                  Building a Strong Brand Identity
                </h2>
                <h3 className="font-face-im">
                  To build a strong brand identity, businesses should focus on
                  the following:
                </h3>
                <h4 className="font-face-im">Consistency</h4>
                <p>
                  Consistency is key in branding. The logo, color scheme,
                  typography, voice, and tone should be consistent across all
                  channels, including the website, social media, and marketing
                  materials.
                </p>
                <h4 className="font-face-im">Storytelling</h4>
                <p>
                  Telling a compelling story about the brand's values, purpose,
                  and history can help create an emotional connection with
                  customers.
                </p>
                <h4 className="font-face-im">Research</h4>
                <p>
                  Understanding the target audience, competitors, and market
                  trends is essential in creating a successful brand identity.
                </p>
                <h4 className="font-face-im">Flexibility</h4>
                <p>
                  While consistency is important, being flexible and adapting to
                  changing trends and customer preferences is also necessary to
                  stay relevant.
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

export default BrandsIdentity;
