import React, { useEffect } from 'react'
import BrandingHeroImg from './Components/BrandingAgency/BrandingHeroImg'
import CustomMultiCards from './Components/Global/CustomMultiCards'
import BrandingAgenHelpUs from './Components/BrandingAgency/BrandingAgenHelpUs'
import ClientCare from './Components/Service/ClientCare'
import IllustrationClient from './Components/Illustration/IllustrationClient'
import Pricing from './Components/Pricing/Pricing'
import ContactForm from './Components/ContactForm/ContactForm'
import Footer from './Components/Miscellaneous/Footer'

const Branding = () => {

    let detail = [
        { id: 1, summary: "What services are included in your branding packages? ", content: "Our branding packages cover a wide range of services, including brand strategy, logo design, visual identity development, brand messaging, and more. We customize our packages to meet your specific needs and goals.", isOpen: false },
        { id: 2, summary: "How long does the branding process take? ", content: "The branding process varies depending on the project's scope and complexity. Typically, it takes between 4-12 weeks to complete a comprehensive branding project.", isOpen: false },
        { id: 3, summary: "Can you help rebrand my existing business? ", content: "Yes, we offer rebranding services to help businesses evolve and adapt to changing markets or target new audiences. We can work with you to refresh your existing branding or create an entirely new brand identity.", isOpen: false },
        { id: 4, summary: "How do you measure the success of your branding strategies? ", content: "We use various metrics to measure the success of our branding strategies, including brand awareness, customer engagement, and overall ROI. By tracking these metrics, we can optimize your branding strategy for long-term success.", isOpen: false },
    ]

    let detailHeading ="Frequently Asked Questions about Our Branding Services"
    let cardHeading = "Empower Your Brand with Our Expert Branding Services"
    let cardData = [
        {
            id: 1,
            heading: 'Strategy & ',
            heading2: 'Positioning',
            description: "Based on our research, we develop a strategic plan for your brand's positioning, messaging, and visual identity, ensuring consistency and coherence across all touchpoints.",
            image1: require('./assets/01.png'),
            image2: require('./assets/research.png'),
        },
        {
            id: 2,
            heading: 'Design & ',
            heading2: 'Development',
            description: "Our skilled designers create compelling visuals that embody your brand's essence, including logos, color palettes, typography, and more.",
            image1: require('./assets/02.png'),
            image2: require('./assets/strategy.png'),
        },
        {
            id: 3,
            heading: 'Implementation & ',
            heading2: 'Launch',
            description: 'We assist with implementing your new branding across all channels, ensuring a seamless transition and an impactful brand launch.            ',
            image1: require('./assets/03.png'),
            image2: require('./assets/creativity.png'),
        }
    ]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div id="BrandingHeroImg"><BrandingHeroImg /></div>
            <div id="CustomMultiCards"><CustomMultiCards cardData={cardData} cardHeading={cardHeading}/></div>
            <div id="BrandingAgenHelpUs"><BrandingAgenHelpUs /></div>
            <div id="ClientCare" > <ClientCare detail={detail} detailHeading={detailHeading}/></div>
            <div id="IllustrationClient">   <IllustrationClient /></div>
            <div><Pricing /></div>
            <div id="ContactForm"><ContactForm /></div>
            <div id="Footer" > <Footer /></div>

        </>
    )

}

export default Branding