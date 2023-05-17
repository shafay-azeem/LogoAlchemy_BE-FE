import React from 'react';
import InstaLogo from "../../assets/instagram.png";
import fbLogo from "../../assets/fb.png";
import "../../Components/Miscellaneous/Footer.css";

const Footer = () => {
    return (

        <div className="Footer">
            <footer>
                <div class="container py-3">
                    <div class="row py-5">
                        <div class="col-lg-6 col-md-12 mb-4">
                            <h5 class="mb-3" style={{ letterSpacing: '2px', color: "white" }}>Drop Us An Email</h5>
                            <p className="font-face-im mb-3" style={{ letterSpacing: '2px', color: "#d40e2f" }}>info@thelogoalchemy.com</p>
                            <div class="row">
                                <div class="col-lg-6">
                                    <p className='text-white'>
                                        Los Angeles, United States
                                    </p>
                                    <p className='font-face-im text-white'>
                                        811 Wilshire Blvd, 17th Floor <br /> Los Angeles, CA, 90017, <br /> United States.
                                    </p>
                                </div>
                                <div class="col-lg-6">
                                    <p className='text-white'>
                                        Artrim ,United Kingdom
                                    </p>
                                    <p className='font-face-im text-white'>
                                        Unit 19 The Hatchery Ni, Antrim Enterprise Park, Antrim, United Kingdom, BT41 1JZ.
                                    </p>
                                </div>

                            </div>

                        </div>



                        <div class="col-lg-6 col-md-12 mb-4">
                            <div className='row'>
                                <div className='col-lg-4'>

                                    <h5 className="font-face-im mb-3" style={{ letterSpacing: '2px', color: "white" }}>Quick Links</h5>
                                    <ul className="list-styled mb-0">
                                        <li className="font-face-sm mb-1">
                                            <a href="/TermAndCondition" style={{ color: "white" }}>Terms & Conditions</a>
                                        </li>
                                        <li className="font-face-sm mb-1">
                                            <a href="/PrivacyPolicy" style={{ color: "white" }}>Privacy Policy</a>
                                        </li>
                                        <li className="font-face-sm mb-1">
                                            <a href="#ContactForm" style={{ color: "white" }}>Contact Us</a>
                                        </li>
                                        <li className="font-face-sm mb-1">
                                            <a href="/Articles" style={{ color: "white" }}>Blogs</a>
                                        </li>
                                    </ul>

                                </div>

                                <div className='col-lg-4'>
                                    <h5 className="font-face-im mb-3" style={{ letterSpacing: '2px', color: "white" }}>Services</h5>
                                    <ul class="list-styled  mb-0">
                                        <li className="font-face-sm mb-1">
                                            <a href="LogoDesign" style={{ color: "white" }}>logo Design</a>
                                        </li>
                                        <li className="font-face-sm mb-1">
                                            <a href="Illustration" style={{ color: "white" }}>Illustration Design</a>
                                        </li>
                                        <li className="font-face-sm mb-1">
                                            <a href="BrandingAgency" style={{ color: "white" }}>Branding Agency </a>
                                        </li>
                                    </ul>
                                </div>


                                <div className='col-lg-4 mb-4'>
                                    <h5 className="font-face-im mb-3" style={{ letterSpacing: '2px', color: "white" }}>Follow Us On</h5>
                                    <div className="d-md-flex">
                                        <a href="https://www.facebook.com/thelogoalchemy" target="_blank" rel="noopener noreferrer">
                                            <img className='img-fluid' src={fbLogo} alt='fb' />
                                        </a>
                                        <a href="https://www.instagram.com/thelogoalchemy/" target="_blank" rel="noopener noreferrer">
                                            <img className='img-fluid ms-2' src={InstaLogo} alt='instagram' />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <p className='font-face-sm text-white'>
                                Contact Us
                            </p>
                            <p className='font-face-im text-white'>
                                +1 (323) 551 9240
                            </p>
                        </div>

                        <div className='col-lg-6' style={{
                            marginTop: '35px'
                        }}>
                            <p style={{ color: "white", fontSize: '20px' }}>
                                All Rights Reserved <span className='font-face-im' style={{ color: "#d40e2f" }}>THE LOGO ALCHEMY </span>
                                2023
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer;