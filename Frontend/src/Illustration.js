import React, { useEffect } from 'react'
import IllustrationHeroImg from './Components/Illustration/IllustrationHeroImg'
import CustomMultiCards from './Components/Global/CustomMultiCards'
import IllustrationHelpUs from './Components/Illustration/IllustrationHelpUs'
import ClientCare from './Components/Service/ClientCare'
import IllustrationClient from './Components/Illustration/IllustrationClient'
import Pricing from './Components/Pricing/Pricing'
import ContactForm from './Components/ContactForm/ContactForm'
import Footer from './Components/Miscellaneous/Footer'
import image from "../src/assets/3d render.png"

const Illustration = () => {
    let detail = [
        { id: 1, summary: "What types of illustration services do you provide? ", content: "We offer a wide range of illustration services, including but not limited to, children's book illustrations, editorial illustrations, product illustrations, and marketing material illustrations. Our versatile team of artists is skilled in various styles, ensuring we can create the perfect visuals to meet your needs.", isOpen: false },
        { id: 2, summary: "How long does the illustration process take? ", content: "The timeline for the illustration process depends on the project's complexity and the number of illustrations required. Generally, it takes between 2-4 weeks for a complete project. However, we can provide a more accurate timeline once we understand the specific requirements of your project.", isOpen: false },
        { id: 3, summary: "How much do your illustration services cost? ", content: "Our agency excels in logo design, illustration, and branding solutions for clients in the US and other English-speaking countries, catering to individuals and companies alike.", isOpen: false },
        { id: 4, summary: "Can I request revisions during the illustration process? ", content: "The cost of our illustration services varies depending on the project's scope, complexity, and desired style. To provide an accurate quote, we encourage you to contact us with your project details, and our team will be happy to discuss pricing options with you. ", isOpen: false },
        { id: 5, summary: "Do you retain the copyrights to the illustrations you create? ", content: "Yes, we believe in working collaboratively with our clients to ensure their satisfaction. We encourage feedback during the sketching and concept presentation stages, allowing us to make the necessary adjustments to meet your vision.", isOpen: false },
    ]

    let detailHeading ="Frequently Asked Questions about Our Illustration Services"
    let cardHeading = "Expert Illustration Services to Elevate Your Brand"
    let cardData = [
        {
            id: 1,
            heading: 'Research and',
            heading2: 'Brainstorming',
            description: 'Gathering inspiration and developing creative concepts.',
            image1: require('./assets/01.png'),
            image2: require('./assets/research.png'),
        },
        {
            id: 2,
            heading: 'Sketching and ',
            heading2: 'Concept',
            description: 'Presenting initial ideas for client review and feedback.',
            image1: require('./assets/02.png'),
            image2: require('./assets/strategy.png'),
        },
        {
            id: 3,
            heading: 'Refinement and ',
            heading2: 'Finalization',
            description: 'Incorporating feedback and refining the illustration to perfection.',
            image1: require('./assets/03.png'),
            image2: require('./assets/creativity.png'),
        }
    ]


    let helpUsData = 
        {
            id: 1,
            heading: "Elevate Your Brand's Visuals with Our Illustration Services: Drive Results and Boost ROI",
          
            description: "As a leading expert in illustration services for over a decade, we understand the power of compelling visuals in elevating your brand's message and connecting with your target audience.",
            description2:"Serving both individuals and companies across the United States and other English-speaking countries, our illustration process is designed to create engaging and memorable visuals that drive results and enhance your brand's ROI.",
            description3:"Our team of skilled illustrators combines artistic talent with a deep understanding of marketing and storytelling. We take the time to immerse ourselves in your brand, allowing us to create illustrations that authentically represent your vision and resonate with your audience. From concept development to final execution, we work closely with you to ensure every detail aligns with your brand identity and objectives.",
            description4:"Whether you need illustrations for marketing materials, book covers, websites, or social media, our expertise in creating captivating visuals will help you stand out from the competition and make a lasting impact on your target audience. Trust us to bring your ideas to life through our exceptional illustration services.",
            image: require('../src/assets/Layer 1.png'),
          
        }

     
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div id="Illustration"><IllustrationHeroImg /></div>
            <div><CustomMultiCards cardData={cardData} cardHeading={cardHeading}/></div>
            <div><IllustrationHelpUs helpUsData={helpUsData}/></div>
            <div > <ClientCare detail={detail} detailHeading={detailHeading}/></div>
            <div>   <IllustrationClient /></div>
            <div><Pricing /></div>
            <div id="ContactForm"><ContactForm /></div>
            <div > <Footer /></div>

        </>
    )
}

export default Illustration