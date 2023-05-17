import React, { useEffect } from "react";
import LogoDesignHeroImage from "./Components/LogoDesign/LogoDesignHeroImage";
import CustomMultiCards from "./Components/Global/CustomMultiCards";
import IllustrationHelpUs from "./Components/Illustration/IllustrationHelpUs";
import ClientCare from "./Components/Service/ClientCare";
import IllustrationClient from "./Components/Illustration/IllustrationClient";
import Pricing from "./Components/Pricing/Pricing";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Miscellaneous/Footer";

const Logo = () => {
  let detail = [
    {
      id: 1,
      summary: "How do you ensure a customized logo design?",
      content:
        "Our skilled designers collaborate closely with clients to understand their unique needs, vision, and brand personality, enabling us to deliver tailored logo designs that effectively represent their brand.",
      isOpen: false,
    },
    {
      id: 2,
      summary: "How long does it take to create a logo?",
      content:
        "The time required varies depending on the project's complexity and client's feedback. However, we strive to deliver high-quality, custom logo designs in a timely manner.",
      isOpen: false,
    },
    {
      id: 3,
      summary: "Do you provide multiple design concepts?",
      content:
        "Yes, we offer multiple design concepts to choose from, allowing clients to select the one that best resonates with their brand and target audience.",
      isOpen: false,
    },
    {
      id: 4,
      summary: "What file formats do you deliver?",
      content:
        "We provide logo designs in various file formats such as JPG, PNG, EPS, PDF, and SVG, ensuring compatibility with different platforms and applications.",
      isOpen: false,
    },
    {
      id: 5,
      summary: " What is your refund policy?",
      content:
        "We stand by the quality of our work and strive for customer satisfaction. If you're not satisfied with the initial concepts, we offer a refund policy. Specific terms and conditions may apply.",
      isOpen: false,
    },
  ];

  let detailHeading =
    "Frequently Asked Questions About Our Logo Design Services";

  let cardHeading = "We’re More Than Just a Branding Agency";
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
    heading:
      "Crafting Unique and Memorable Logos: Why Logo Alchemy is Your Top Choice",

    description:
      "A captivating logo is the cornerstone of any successful brand. At The Logo Alchemy, we understand the importance of a compelling logo design that resonates with your target audience. With over a decade of experience, our team of creative professionals is dedicated to crafting unique, memorable, and high-quality logos that capture the essence of your brand.",
    description2:
      "Catering to businesses and individuals across the United States and other English-speaking countries, we offer customized logo design services that set you apart from the competition. Read on to discover the unique selling points that make our agency the top choice for your logo design needs.",
    description3:
      "In addition to our expertise in logo design, we prioritize seamless collaboration and exceptional customer service. We believe in fostering strong relationships with our clients, listening to their ideas, and providing expert guidance throughout the design process. ",
    description4:
      "With our personalized approach and commitment to delivering outstanding results, we are confident in our ability to exceed your expectations and create a captivating logo that elevates your brand.",
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

  let price = [{
    packageName: "BASIC",
    orignalPrice: 160.00,
    discountedPrice: 80.00,
    description: "Initial consultation",
    features1: "2 initial logo concepts",
    features2: "2 rounds of revisions on the chosen concept",
    features3: "24-48 Hours Turn Around Time",
    features4: "Formats JPEG & AI",
    features5: "100% Owner Ship Rights"
  }, {
    packageName: "STANDARD",
    orignalPrice: 300.00,
    discountedPrice: 150.00,
    description: "Initial consultation",
    features1: "3 initial logo concepts",
    features2: "3 rounds of revisions on the chosen concept",
    features3: "Design of one social media post incorporating the finalized logo",
    features4: "24-48 Hours Turn Around Time",
    features5: "Formats JPEG, PNG, EPS, PDF, AI",
    features6: "100% Owner Ship Rights"
  }, {
    packageName: "PREMIUM",
    orignalPrice: 600.00,
    discountedPrice: 300.00,
    description: "Comprehensive consultation",
    features1: "5 initial logo concepts",
    features2: "Unlimited rounds of revisions on the chosen concept",
    features3: "Custom landing page design with the finalized logo",
    features4: "Stationery design(business card, letterhead) using the finalized logo",
    features5: "24-48 Hours Turn Around Time",
    features6: "Formats JPEG, PNG, EPS, PDF, AI",
    features7: "High-resolution logo files suitable for both print and digital use",
    features8: "100% Owner Ship Rights"
  }]


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <LogoDesignHeroImage />
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