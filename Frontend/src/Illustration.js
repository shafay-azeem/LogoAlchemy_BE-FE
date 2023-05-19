import React, { useEffect } from "react";
import IllustrationHeroImg from "./Components/Illustration/IllustrationHeroImg";
import CustomMultiCards from "./Components/Global/CustomMultiCards";
import IllustrationHelpUs from "./Components/Illustration/IllustrationHelpUs";
import ClientCare from "./Components/Service/ClientCare";
import IllustrationClient from "./Components/Illustration/IllustrationClient";
import Pricing from "./Components/Pricing/Pricing";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Miscellaneous/Footer";

const Illustration = () => {
  let detail = [
    {
      id: 1,
      summary: "What types of illustration services do you provide? ",
      content:
        "We offer a wide range of illustration services, including but not limited to, children's book illustrations, editorial illustrations, product illustrations, and marketing material illustrations. Our versatile team of artists is skilled in various styles, ensuring we can create the perfect visuals to meet your needs.",
      isOpen: false,
    },
    {
      id: 2,
      summary: "How long does the illustration process take? ",
      content:
        "The timeline for the illustration process depends on the project's complexity and the number of illustrations required. Generally, it takes between 2-4 weeks for a complete project. However, we can provide a more accurate timeline once we understand the specific requirements of your project.",
      isOpen: false,
    },
    {
      id: 3,
      summary: "How much do your illustration services cost? ",
      content:
        "Our agency excels in logo design, illustration, and branding solutions for clients in the US and other English-speaking countries, catering to individuals and companies alike.",
      isOpen: false,
    },
    {
      id: 4,
      summary: "Can I request revisions during the illustration process? ",
      content:
        "The cost of our illustration services varies depending on the project's scope, complexity, and desired style. To provide an accurate quote, we encourage you to contact us with your project details, and our team will be happy to discuss pricing options with you. ",
      isOpen: false,
    },
    {
      id: 5,
      summary: "Do you retain the copyrights to the illustrations you create? ",
      content:
        "Yes, we believe in working collaboratively with our clients to ensure their satisfaction. We encourage feedback during the sketching and concept presentation stages, allowing us to make the necessary adjustments to meet your vision.",
      isOpen: false,
    },
  ];

  let detailHeading =
    "Frequently Asked Questions about Our Illustration Services";
  let cardHeading = "Expert Illustration Services to Elevate Your Brand";
  let cardData = [
    {
      id: 1,
      heading: "Research and",
      heading2: "Brainstorming",
      description: "Gathering inspiration and developing creative concepts.",
      image1: require("./assets/01.png"),
      image2: require("./assets/Research.png"),
    },
    {
      id: 2,
      heading: "Sketching and ",
      heading2: "Concept",
      description: "Presenting initial ideas for client review and feedback.",
      image1: require("./assets/02.png"),
      image2: require("./assets/Sketching.png"),
    },
    {
      id: 3,
      heading: "Refinement and ",
      heading2: "Finalization",
      description:
        "Incorporating feedback and refining the illustration to perfection.",
      image1: require("./assets/03.png"),
      image2: require("./assets/Finalizing.png"),
    },
  ];

  let helpUsData = {
    id: 1,
    heading:
      "Elevate Your Brand's Visuals with Our Illustration Services: Drive Results and Boost ROI,",

    description:
      "As a leading expert in illustration services for over a decade, we understand the power of compelling visuals in elevating your brand's message and connecting with your target audience.",
    description2:
      "Serving both individuals and companies across the United States and other English-speaking countries, our illustration process is designed to create engaging and memorable visuals that drive results and enhance your brand's ROI.",
    description3:
      "Our team of skilled illustrators combines artistic talent with a deep understanding of marketing and storytelling. We take the time to immerse ourselves in your brand, allowing us to create illustrations that authentically represent your vision and resonate with your audience. From concept development to final execution, we work closely with you to ensure every detail aligns with your brand identity and objectives.",
    description4:
      "Whether you need illustrations for marketing materials, book covers, websites, or social media, our expertise in creating captivating visuals will help you stand out from the competition and make a lasting impact on your target audience. Trust us to bring your ideas to life through our exceptional illustration services.",
    image: require("../src/assets/IllustrationHelpUs.png"),
  };

  const items = [
    {
      id: 1,
      image: require("../src/assets/I1.jpg"),
      heading: "Red Hulk as a Superhero",
      description1Heading: "Objective:",
      description1:
        "Create a captivating illustration of Red Hulk that showcases his superhuman strength and presence as a formidable superhero.",

      description2Heading: "Approach:",
      description2:
        "We studied Red Hulk's character traits and iconic appearances to craft an illustration that emphasized his muscular physique, intense expression, and fiery energy. The use of dynamic poses, bold colors, and dramatic lighting brought the illustration to life.",

      description3Heading: "Result:",
      description3:
        "The illustration received praise from Marvel fans and readers, enhancing the magazine's visual appeal and engaging a wider audience because of characters look and ambiance.",
      buttonText: "Check Portfolio",
    },
    {
      id: 2,
      image: require("../src/assets/i2.jpg"),
      heading: "DRESUN - The Superhero",
      description1Heading: "Objective:",
      description1:
        "Design a visually striking illustration of DRESUN, a new superhero character.",

      description2Heading: "Approach:",
      description2:
        "Through collaboration with the client, we developed DRESUN's appearance, powers, and backstory. The illustration depicted DRESUN in a dynamic action pose, highlighting their unique costume design and signature abilities.",

      description3Heading: "Result:",
      description3:
        "The illustration successfully introduced DRESUN to the comic book world, creating anticipation and curiosity among readers and generating a positive response to the character's debut.",
      buttonText: "Check Portfolio",
    },
    {
      id: 3,
      image: require("../src/assets/i3.jpg"),
      heading: "Fairy Story Children's Book ",
      description1Heading: "Objective:",
      description1:
        "Create enchanting and imaginative illustrations for a collection of fairy stories aimed at young children.",

      description2Heading: "Approach:",
      description2:
        "Working closely with the author and publisher, we brought the magical world of fairies to life through vibrant and whimsical illustrations. Each illustration portrayed key scenes and characters with a blend of soft colors, intricate details, and a touch of wonder to engage young readers.",

      description3Heading: "Result:",
      description3:
        "The illustrations captivated children and parents alike, enhancing the storytelling experience and contributing to the book's popularity, leading to increased sales and positive reviews.",
      buttonText: "Check Portfolio",
    },
    {
      id: 4,
      image: require("../src/assets/i4.jpg"),
      heading: "Human Lion Gaming Character ",
      description1Heading: "Objective:",
      description1:
        "Design a fierce and visually compelling human-lion hybrid character for a fighting game that appeals to gamers and stands out in a competitive market.",

      description2Heading: "Approach:",
      description2:
        "We merged human and lion characteristics to create a striking and formidable character. The illustration showcased the character's muscular build, sharp fangs, and powerful presence.",

      description3Heading: "Result:",
      description3:
        "The character illustration received accolades from gamers and industry experts, contributing to the game's overall visual appeal and generating excitement among the target audience.",
      buttonText: "Check Portfolio",
    },
  ];

  let price = [
    {
      packageName: "BASIC",
      orignalPrice: 600.0,
      discountedPrice: 300.0,
      description: "1 custom simple illustration based on the provided brief",
      features1: "1 round of revisions on the chosen concept",
      features2: "24-48 Hours Turn Around Time",
      features3: "Formats JPEG & PNG",
      features4: "100% Owner Ship Rights",
    },
    {
      packageName: "STANDARD",
      orignalPrice: 1000.0,
      discountedPrice: 500.0,
      description: "1 custom simple illustration based on the provided brief",
      features1: "2 rounds of revisions on the chosen concept",
      features2:
        "Final delivery of the illustration in high-resolution digital format",
      features3: "24-48 Hours Turn Around Time",
      features4: "Formats JPEG, PNG, AI",
      features5: "Commercial usage rights for the illustration (non-exclusive)",
    },
    {
      packageName: "PREMIUM",
      orignalPrice: 1600.0,
      discountedPrice: 800.0,
      description:
        "Creation of one complex and highly detailed illustration based on the provided brief",
      features1: "Unlimited rounds of revisions on the chosen concept",
      features2:
        "Final delivery of the illustration in high-resolution digital format",
      features3: "24-48 Hours Turn Around Time",
      features4: "Formats JPEG, PNG, EPS, PDF, AI",
      features5: "Commercial usage rights for the illustration (non-exclusive)",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="Illustration">
        <IllustrationHeroImg />
      </div>
      <div>
        <CustomMultiCards cardData={cardData} cardHeading={cardHeading} />
      </div>
      <div>
        <IllustrationHelpUs helpUsData={helpUsData} />
      </div>
      <div>
        {" "}
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
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default Illustration;
