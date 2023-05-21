import React from "react";
import CustomBrands from "./Components/Brands/CustomBrands";
import ClientCare from "./Components/Service/ClientCare";
import DigitalService from "./Components/Service/DigitalService";
import ServiceSection from "./Components/Service/ServiceSection";
import SlickSlider from "./Components/SlickSlider/SlickSlider";
import Testimonial from "./Components/Testimonials/Testimonial";
import HeroImage from "./Components/Top banner/HeroImage";
import Footer from "./Components/Miscellaneous/Footer";
import ContactForm from "./Components/ContactForm/ContactForm";
import Blogs from "./Components/Blogs/Blogs";
import Letstalk from "./Components/ContactForm/Letstalk";

import Usp from "./Components/Usp/Usp";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

const Main = () => {
  let detail = [
    {
      id: 1,
      summary: "Why choose your agency for design projects?",
      content:
        "With 10 years of experience, we provide personalized, high-quality designs, competitive pricing, and a client-focused approach, ensuring your brand stands out in the market.",
      isOpen: false,
    },
    {
      id: 2,
      summary: "Can you cater to my specific industry?",
      content:
        "Our skilled designers work with diverse industries, tailoring design solutions to suit your unique needs and resonate with your target audience.",
      isOpen: false,
    },
    {
      id: 3,
      summary: "What services does your expert design agency offer?",
      content:
        "Our agency excels in logo design, illustration, and branding solutions for clients in the US and other English-speaking countries, catering to individuals and companies alike.",
      isOpen: false,
    },
    {
      id: 4,
      summary: "What's your refund policy?",
      content:
        "We aim for complete client satisfaction. If you're unhappy with our work, we'll make every effort to address your concerns. In the unlikely event that a solution isn't reached, we'll discuss refund options on a case-by-case basis.",
      isOpen: false,
    },
  ];

  let detailHeading = "Frequently Asked Questions";

  return (
    <>
      <div id="home">
        <HeroImage />
      </div>

      {/* <FloatingWhatsApp
        phoneNumber="+1 901 546-4595"
        accountName=""
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage="Demo message"
      /> */}

      <div id="ServiceSection">
        <ServiceSection />
      </div>
      <div id="DigitalService">
        <DigitalService />
      </div>
      <div id="SlickSlider">
        <SlickSlider />
      </div>
      <div id="Testimonial">
        <Testimonial />
      </div>
      <div id="Ups">
        <Usp />
      </div>
      <div id="ClientCare">
        <ClientCare detail={detail} detailHeading={detailHeading} />
      </div>
      <div id="ContactForm">
        <ContactForm />
      </div>
      <div id="Blogs">
        <Blogs />
      </div>
      <div id="Letstalk">
        <Letstalk />
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </>
  );
};
export default Main;
