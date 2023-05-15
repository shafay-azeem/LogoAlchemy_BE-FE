import React, { useEffect } from "react";
import BrandingHeroImg from "./Components/BrandingAgency/BrandingHeroImg";
import CustomMultiCards from "./Components/Global/CustomMultiCards";
import BrandingAgenHelpUs from "./Components/BrandingAgency/BrandingAgenHelpUs";
import ClientCare from "./Components/Service/ClientCare";
import IllustrationClient from "./Components/Illustration/IllustrationClient";
import Pricing from "./Components/Pricing/Pricing";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Miscellaneous/Footer";

const Branding = () => {
  let detail = [
    {
      id: 1,
      summary: "What services are included in your branding packages? ",
      content:
        "Our branding packages cover a wide range of services, including brand strategy, logo design, visual identity development, brand messaging, and more. We customize our packages to meet your specific needs and goals.",
      isOpen: false,
    },
    {
      id: 2,
      summary: "How long does the branding process take? ",
      content:
        "The branding process varies depending on the project's scope and complexity. Typically, it takes between 4-12 weeks to complete a comprehensive branding project.",
      isOpen: false,
    },
    {
      id: 3,
      summary: "Can you help rebrand my existing business? ",
      content:
        "Yes, we offer rebranding services to help businesses evolve and adapt to changing markets or target new audiences. We can work with you to refresh your existing branding or create an entirely new brand identity.",
      isOpen: false,
    },
    {
      id: 4,
      summary: "How do you measure the success of your branding strategies? ",
      content:
        "We use various metrics to measure the success of our branding strategies, including brand awareness, customer engagement, and overall ROI. By tracking these metrics, we can optimize your branding strategy for long-term success.",
      isOpen: false,
    },
  ];

  let detailHeading = "Frequently Asked Questions about Our Branding Services";
  let cardHeading = "Empower Your Brand with Our Expert Branding Services";
  let cardData = [
    {
      id: 1,
      heading: "Strategy & ",
      heading2: "Positioning",
      description:
        "Based on our research, we develop a strategic plan for your brand's positioning and coherence across all touchpoints.",
      image1: require("./assets/01.png"),
      image2: require("./assets/BrandingLogos/Strategy.png"),
    },
    {
      id: 2,
      heading: "Design & ",
      heading2: "Development",
      description:
        "Our skilled designers create compelling visuals that embody your brand's essence, including logos, color palettes, typography, and more.",
      image1: require("./assets/02.png"),
      image2: require("./assets/BrandingLogos/design-&-dev.png"),
    },
    {
      id: 3,
      heading: "Implementation & ",
      heading2: "Launch",
      description:
        "We assist with implementing your new branding across all channels, ensuring a seamless transition and an impactful brand launch.            ",
      image1: require("./assets/03.png"),
      image2: require("./assets/BrandingLogos/Launch.png"),
    },
  ];

  const items = [
    {
      id: 1,
      image: require("../src/assets/BrandingCS1.jpg"),
      heading: "Muller Insurance Agency",
      description1Heading: "Objective:",
      description1:
        "Our brand embodies reliability, expertise, and personalized service in the insurance industry.",

      description2Heading: "Approach:",
      description2:
        "We crafted a clean and modern logo with a symbol representing protection and security. The color palette evoked trust, while the typography showcased professionalism. The branding collateral, such as business cards and brochures, reflected the same visual language.",

      description3Heading: "Result:",
      description3:
        "Muller Insurance Agency's refreshed branding increased credibility, attracting new and loyal clients.",
      buttonText: "Check Portfolio",
    },
    {
      id: 2,
      image: require("../src/assets/BrandingCS2.jpg"),
      heading: "Ashanta Organic Coffee Co",
      description1Heading: "Objective:",
      description1:
        "Develop a brand identity that reflects the company's commitment to sustainable and organic coffee.",

      description2Heading: "Approach:",
      description2:
        "We crafted a brand identity with earthy tones, a nature-inspired logo, and eco-friendly packaging design. The use of organic imagery and a clean typography conveyed the brand's values and high-quality offerings.",

      description3Heading: "Result:",
      description3:
        "The cohesive branding elevated Ashanta Organic Coffee Co.'s market presence, attracting environmentally conscious coffee enthusiasts and establishing a loyal customer base.",
      buttonText: "Check Portfolio",
    },
    {
      id: 3,
      image: require("../src/assets/BrandingCS3.jpg"),
      heading: "Tech Group",
      description1Heading: "Objective:",
      description1:
        "Create a modern and innovative brand identity that positions Tech Group as a leading technology solutions provider.",

      description2Heading: "Approach:",
      description2:
        "We designed a logo that combined sleek typography with a distinctive symbol representing connectivity and advancement. The color palette and graphics conveyed a sense of cutting-edge technology. The branding was applied consistently across various touchpoints.",

      description3Heading: "Result:",
      description3:
        "The reimagined branding of Tech Group positioned the company as a tech industry leader, attracting new clients and driving business growth.",
      buttonText: "Check Portfolio",
    },
    {
      id: 4,
      image: require("../src/assets/BrandingCS4.jpg"),
      heading: "Bold Gym and Fitness",
      description1Heading: "Objective:",
      description1:
        "Create a dynamic and empowering brand identity that resonates with fitness enthusiasts and positions the gym as a premium fitness.",

      description2Heading: "Approach:",
      description2:
        "We designed a bold logo with strong typography and an energetic color scheme. The branding collateral, including merchandise and signage, maintained a consistent and powerful visual language that conveyed strength and determination.",

      description3Heading: "Result:",
      description3:
        "The branding of Bold Gym and Fitness captured attention, leading to increased membership and brand recognition within the community.",
      buttonText: "Check Portfolio",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="BrandingHeroImg">
        <BrandingHeroImg />
      </div>
      <div id="CustomMultiCards">
        <CustomMultiCards cardData={cardData} cardHeading={cardHeading} />
      </div>
      <div id="BrandingAgenHelpUs">
        <BrandingAgenHelpUs />
      </div>
      <div id="ClientCare">
        {" "}
        <ClientCare detail={detail} detailHeading={detailHeading} />
      </div>
      <div id="IllustrationClient">
        {" "}
        <IllustrationClient items={items} />
      </div>
      <div>
        <Pricing />
      </div>
      <div id="ContactForm">
        <ContactForm />
      </div>
      <div id="Footer">
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default Branding;
