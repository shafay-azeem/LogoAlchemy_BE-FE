import React from 'react'
import CustomButton from '../Global/CustomButton';
import NoYesImg from "../../assets/no yes.png";



const BrandingAgenHelpUs = () => {
    return (
        <div className="BrandinghelpUsSection bg-white container py-5">
            <div className="row">
                <div className="col-lg-6">
                    <h5 className="font-face-sm">
                        TOP NOTCH BRANDING & MARKETING AGENCY
                    </h5>
                    <h2 className="font-face-im">
                        Creating a Strong Brand Identity: How Our Comprehensive Branding Process Helps Your Business Stand Out
                        <span className="font-face-im"> Let Us Help You</span>
                    </h2>
                    <p className="font-face-sm pt-3">
                        As a branding expert with a decade of experience, we understand that effective branding is essential for creating a strong brand identity and standing out in today's competitive market.
                    </p>
                    <p className="font-face-sm">
                        Serving both individuals and companies across the United States and other English-speaking countries, our comprehensive branding process helps businesses connect with their target audience and leave a lasting impression.
                    </p>
                    <p className="font-face-sm">
                        At The Logo Alchemy, we believe in a holistic approach to branding that encompasses strategy, design, and messaging. We dive deep into understanding your business, target market, and competition to develop a unique and impactful branding strategy. Our talented team of branding experts then brings that strategy to life through compelling visual design, engaging storytelling, and consistent messaging across all touchpoints.
                    </p>
                    <p className="font-face-sm">
                        From logo design and brand guidelines to website development and marketing collateral, we ensure that every element of your brand communicates a cohesive and memorable message. With our expertise and attention to detail, we empower businesses to build a strong brand presence that resonates with their audience and drives long-term success.
                    </p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2" >
                            <CustomButton
                                title="Explore Services"
                                padding="10px 45px"
                                rf="Portfolio"
                                rn="yes"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-lg-start text-center mb-2" >
                            <CustomButton
                                title="Lets Talk"
                                padding="10px 45px"
                                rf="ContactForm"
                            />
                        </div>

                    </div>
                </div>

                <div className="col-lg-6">
                    <img className="img-fluid" src={NoYesImg} alt="noyes" />
                </div>

            </div>
        </div>
    )
}

export default BrandingAgenHelpUs;