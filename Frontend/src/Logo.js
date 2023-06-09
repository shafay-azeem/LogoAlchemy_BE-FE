import React, { useEffect } from "react";
import LogoDesignHeroImage from "./Components/LogoDesign/LogoDesignHeroImage";
import CustomMultiCards from "./Components/Global/CustomMultiCards";
import IllustrationHelpUs from "./Components/Illustration/IllustrationHelpUs";
import ClientCare from "./Components/Service/ClientCare";
import IllustrationClient from "./Components/Illustration/IllustrationClient";
import Pricing from "./Components/Pricing/Pricing";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Miscellaneous/Footer";
import whatsappimg from "./assets/whatsapp.png";
import phoneimg from "./assets/phone.png";

const Logo = () => {
  const handleButton = () => {
    var url = "https://wa.me/+19015464595";
    window.open(url);
  };
  const navigateContact = () => {
    var url = "tel:+19015464595";
    window.location.href = url;
  };
  let detail = [
    {
      id: 1,
      summary: "How long does it take to create a logo?",
      content:
        "The time required for a project can vary depending on its complexity and the feedback provided by the client. However, our standard practice is to deliver initial concepts within a timeframe of 24-48 hours.",
      isOpen: false,
    },
    {
      id: 2,
      summary: "Do you provide multiple design concepts?",
      content:
        "Yes, we offer multiple design concepts to choose from, allowing clients to select the one that best resonates with their brand and target audience.",
      isOpen: false,
    },
    {
      id: 3,
      summary: "What file formats do you deliver?",
      content:
        "We provide logo designs in various file formats such as JPG, PNG, EPS, PDF, and SVG, ensuring compatibility with different platforms and applications.",
      isOpen: false,
    },
    {
      id: 4,
      summary: " What is your refund policy?",
      content:
        "We will provide you with initial concepts, and if you approve them, we will proceed with revisions. However, please note that in the event you do not like the designs after approval and revision, we will not be able to offer a refund.",
      isOpen: false,
    },
    {
      id: 5,
      summary: "How many revisions would you provide?",
      content:
        "The number of revisions depends on the package you have purchased.",
      isOpen: false,
    },
  ];

  let detailHeading = "FAQs About Our Logo Design Services";

  let cardHeading =
    "We ignite brand inspiration and artfully shape their distinctive identities.";
  let cardData = [
    {
      id: 1,
      heading: "Design",
      heading2: "Process",
      description:
        "Our skilled designers brainstorm and develop multiple logo concepts, ensuring a diverse range of ideas that capture your brand's essence.",
      image1: require("./assets/01.png"),
      image2: require("./assets/Logo/design.png"),
    },
    {
      id: 2,
      heading: "Feedback and",
      heading2: "Revisions",
      description:
        "We create a final logo that embodies your desired brand identity and effectively communicates your message to your target audience.",
      image1: require("./assets/02.png"),
      image2: require("./assets/Logo/feedback.png"),
    },
    {
      id: 3,
      heading: "Finalization and",
      heading2: "Completion",
      description:
        "Once the design is approved, we deliver the logo in various formats and sizes, suitable for all your branding needs and make it optimized for digital platforms",
      image1: require("./assets/03.png"),
      image2: require("./assets/Logo/finalize.png"),
    },
  ];

  let helpUsData = {
    id: 1,
    heading: "Crafting Unique and Memorable Logos:",

    description:
      "At The Logo Alchemy, we specialize in creating captivating logos that serve as the foundation for successful brands. With over a decade of experience, our team of creative professionals is dedicated to crafting unique, memorable, and high-quality designs that resonate with your target audience. Our customized logo design services cater to businesses and individuals across the United States and other English-speaking countries, ensuring that your brand stands out from the competition. ",
    description2:
      "We pride ourselves on seamless collaboration and exceptional customer service, building strong relationships with our clients, and providing expert guidance throughout the design process. With our personalized approach and commitment to delivering outstanding results, we are confident in our ability to exceed your expectations and create a captivating logo that truly elevates your brand.",

    image: require("../src/assets/LogoHelpUs.png"),
  };

  const items = [
    {
      id: 1,
      image: require("../src/assets/logoCase1.jpg"),
      heading: "JR LANCERS FOOTBALL",
      description1Heading: "Objective:",
      description1:
        "Create a dynamic and memorable logo for a professional football team",

      description2Heading: "Approach:",
      description2:
        "We researched the team's history, values, and fan base to develop a logo that embodied strength, unity, and athleticism. The final design combines a bold, stylized football with sleek typography, representing the team's identity and creating a strong visual impact.",

      description3Heading: "Result:",
      description3:
        "The new logo received overwhelmingly positive feedback from fans, players, and stakeholders, boosting team spirit and brand recognition.",
      buttonText: "Check Portfolio",
    },
    {
      id: 2,
      image: require("../src/assets/logoCase2.jpg"),
      heading: "Combat Fit KickBoxing",
      description1Heading: "Objective:",
      description1:
        "Develop a logo that captures the essence of discipline, skill, and tradition for a martial arts academy.",

      description2Heading: "Approach:",
      description2:
        "We explored various martial arts symbols and elements, seeking inspiration from ancient traditions. The chosen design showcases a graceful yet powerful martial artist in action, symbolizing the academy's commitment to excellence. The bold typography creating a impactful logo",

      description3Heading: "Result:",
      description3:
        "The logo resonated with both students and instructors, establishing a strong brand identity and attracting new members to the academy",
      buttonText: "Check Portfolio",
    },
    {
      id: 3,
      image: require("../src/assets/logoCase3.jpg"),
      heading: "Baller Elite",
      description1Heading: "Objective:",
      description1:
        "Create an eye-catching logo that represents the spirit of urban basketball and appeals to a youthful audience.",

      description2Heading: "Approach:",
      description2:
        "We conducted extensive market research and designed a logo that reflects the vibrant energy and street style of urban basketball. The logo features a graffiti-inspired basketball with bold typography, evoking a sense of excitement and urban culture",

      description3Heading: "Result:",
      description3:
        "The logo generated a buzz among basketball enthusiasts, attracting a significant increase in participation and engagement within the league",
      buttonText: "Check Portfolio",
    },
    {
      id: 4,
      image: require("../src/assets/logoCase4.jpg"),
      heading: "Brothaz N Armz Trucking LLC",
      description1Heading: "Objective:",
      description1:
        "Develop a professional and trustworthy logo for a trucking company that conveys reliability and efficiency.",

      description2Heading: "Approach:",
      description2:
        "We focused on creating a clean and modern logo design that emphasized the company's commitment to timely deliveries and exceptional service. The final logo incorporates a stylized truck icon and sleek typography, symbolizing the company's dedication.",

      description3Heading: "Result:",
      description3:
        "The logo elevated the company's brand image, instilling confidence in clients and increasing business inquiries and partnerships.",
      buttonText: "Check Portfolio",
    },
  ];

  let price = [
    {
      packageName: "BASIC",
      orignalPrice: 160.0,
      //discountedPrice: 80.0,
      description: "Initial consultation",
      features1: "2 initial logo concepts",
      features2: "2 rounds of revisions on the chosen concept",
      features3: "24-48 Hours Turn Around Time",
      features4: "Formats JPEG & AI",
      features5: "100% Owner Ship Rights",
      route: "LogoDesign",
    },
    {
      packageName: "STANDARD",
      orignalPrice: 300.0,
      //discountedPrice: 150.0,
      description: "Initial consultation",
      features1: "3 initial logo concepts",
      features2: "3 rounds of revisions on the chosen concept",
      features3: "Design of one social media post",
      features4: "24-48 Hours Turn Around Time",
      features5: "Formats JPEG, PNG, EPS, PDF, AI",
      features6: "100% Owner Ship Rights",
      route: "LogoDesign",
    },
    {
      packageName: "PREMIUM",
      orignalPrice: 600.0,
      //discountedPrice: 300.0,
      description: "Comprehensive consultation",
      features1: "4 initial logo concepts",
      features2: "Unlimited rounds of revisions on the chosen concept",
      features3: "Custom landing page design",
      features4: "Stationery design(business card, letterhead ",
      features5: "24-48 Hours Turn Around Time",
      features6: "Formats JPEG, PNG, EPS, PDF, AI",
      route: "LogoDesign",
      // features7:
      //   "High-resolution logo files suitable for both print and digital use",
      // features8: "100% Owner Ship Rights",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <LogoDesignHeroImage />
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
      <div>
        <CustomMultiCards cardData={cardData} cardHeading={cardHeading} />
      </div>
      <div>
        <IllustrationHelpUs helpUsData={helpUsData} />
      </div>
      <div>
        <ClientCare detail={detail} detailHeading={detailHeading} />
      </div>
      <div>
        <IllustrationClient items={items} />
      </div>
      <div>
        <Pricing price={price} />
      </div>
      <div id="ContactForm">
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Logo;
