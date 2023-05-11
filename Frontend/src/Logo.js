import React, { useEffect } from 'react'
import LogoDesignHeroImage from './Components/LogoDesign/LogoDesignHeroImage'
import CustomMultiCards from './Components/Global/CustomMultiCards'
import IllustrationHelpUs from './Components/Illustration/IllustrationHelpUs'
import ClientCare from './Components/Service/ClientCare'
import IllustrationClient from './Components/Illustration/IllustrationClient'
import Pricing from './Components/Pricing/Pricing'
import ContactForm from './Components/ContactForm/ContactForm'
import Footer from './Components/Miscellaneous/Footer'
import image from "../src/assets/Layer 1.png"



const Logo = () => {
    let detail = [
        { id: 1, summary: "How do you ensure a customized logo design?", content: "Our skilled designers collaborate closely with clients to understand their unique needs, vision, and brand personality, enabling us to deliver tailored logo designs that effectively represent their brand.", isOpen: false },
        { id: 2, summary: "How long does it take to create a logo?", content: "The time required varies depending on the project's complexity and client's feedback. However, we strive to deliver high-quality, custom logo designs in a timely manner.", isOpen: false },
        { id: 3, summary: "Do you provide multiple design concepts?", content: "Yes, we offer multiple design concepts to choose from, allowing clients to select the one that best resonates with their brand and target audience.", isOpen: false },
        { id: 4, summary: "What file formats do you deliver?", content: "We provide logo designs in various file formats such as JPG, PNG, EPS, PDF, and SVG, ensuring compatibility with different platforms and applications.", isOpen: false },
        { id: 5, summary: " What is your refund policy?", content: "We stand by the quality of our work and strive for customer satisfaction. If you're not satisfied with the initial concepts, we offer a refund policy. Specific terms and conditions may apply.", isOpen: false }
    ]

    let detailHeading ="Frequently Asked Questions About Our Logo Design Services"


   
    let cardHeading = "We’re More Than Just a Branding Agency"
    let cardData = [
        {
            id: 1,
            heading: 'Design',
            heading2: 'Process',
            description: 'Our skilled designers brainstorm and develop multiple logo concepts, ensuring a diverse range of ideas that capture your brand\'s essence.',
            image1: require('./assets/01.png'),
            image2: require('./assets/research.png'),
        },
        {
            id: 2,
            heading: 'Feedback and',
            heading2: 'Revisions',
            description: 'We create a final logo that embodies your desired brand identity and effectively communicates your message to your target audience.',
            image1: require('./assets/02.png'),
            image2: require('./assets/strategy.png'),
        },
        {
            id: 3,
            heading: 'Finalization and',
            heading2: 'Completion',
            description: 'Once the design is approved, we deliver the logo in various formats and sizes, suitable for all your branding needs and make it optimized for digital platforms',
            image1: require('./assets/03.png'),
            image2: require('./assets/creativity.png'),
        }
    ]

    let helpUsData = 
        {
            id: 1,
            heading: 'Crafting Unique and Memorable Logos: Why Logo Alchemy is Your Top Choice',
          
            description: 'A captivating logo is the cornerstone of any successful brand. At [Your Agency Name], we understand the importance of a compelling logo design that resonates with your target audience. With over a decade of experience, our team of creative professionals is dedicated to crafting unique, memorable, and high-quality logos that capture the essence of your brand.',
            description2:"Catering to businesses and individuals across the United States and other English-speaking countries, we offer customized logo design services that set you apart from the competition. Read on to discover the unique selling points that make our agency the top choice for your logo design needs.",
            description3:"In addition to our expertise in logo design, we prioritize seamless collaboration and exceptional customer service. We believe in fostering strong relationships with our clients, listening to their ideas, and providing expert guidance throughout the design process. ",
            description4:"With our personalized approach and commitment to delivering outstanding results, we are confident in our ability to exceed your expectations and create a captivating logo that elevates your brand.",
            image: require('../src/assets/Layer 1.png'),
          
        }
      
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div><LogoDesignHeroImage /></div>
            <div><CustomMultiCards cardData={cardData} cardHeading={cardHeading}/></div>
            <div><IllustrationHelpUs helpUsData={helpUsData} /></div>
            <div > <ClientCare detail={detail} detailHeading={detailHeading}/></div>
            <div> <IllustrationClient /></div>
            <div><Pricing /></div>
            <div id="ContactForm"><ContactForm /></div>
            <div > <Footer /></div>

        </>
    )
}

export default Logo