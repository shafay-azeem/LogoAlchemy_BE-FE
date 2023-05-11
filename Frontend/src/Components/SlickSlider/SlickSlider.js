import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick-theme.css";
import "../SlickSlider/SlickSlider.css";
import CustomBrands from "../Brands/CustomBrands";
import GradientCustomButton from '../Global/GradientCustomButton';
import CustomButton from '../Global/CustomButton';


// export default class CenterMode extends Component {
//     render() {
//         const settings = {
//             centerMode: true,
//             centerPadding: '0px',
//             infinite: true,
//             slidesToShow: 1,
//             speed: 500,
//             focusOnSelect: true,
//             dots: true,
//             responsive: [
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         arrows: false,
//                         centerMode: true,
//                         slidesToShow: 1
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         arrows: false,
//                         centerMode: true,
//                         slidesToShow: 1
//                     }
//                 }
//             ]
//         };
//         return (
//             <div className='Main container-fluid py-5 slider-container'>
//                 <h2 className='text-center font-face-hm red' data-aos-duration="1000">Our Core Values That You Can Trust</h2>
//                 <h3 className='text-center pb-5 font-face-im black' data-aos-duration="1000">We Would Love To Stand With You And Go Miles Away Together</h3>


//                 <div class="row">
//                     <Slider {...settings}>
//                         <>
//                             <div className="px-2 py-3">
//                                 {/* <div class="d-md-flex" > */}
//                                 <div style={{ borderRadius: '20px', border: '2px solid red', backgroundColor: 'white' }} class="col-md-6 col-lg-5 text-center py-4 px-4">
//                                     <p style={{ color: 'black' }} className='font-face-im text-center' >Some Go To The Extra Mile</p>
//                                     <p style={{ color: 'black' }} className='font-face-im' >We Will Run a Marathon</p>
//                                     <p className='font-face-hm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti saepe accusamus quidem quos! Exercitationem porro, aut ut error consequuntur reiciendis.</p>
//                                     <p className='font-face-hm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae, doloribus est similique hic minus!</p>

//                                 </div>
//                                 {/* </div> */}
//                             </div>


//                             <div className="px-2 py-3">
//                                 {/* <div class="d-md-flex" > */}
//                                 <div style={{ borderRadius: '20px', border: '2px solid red', backgroundColor: 'white' }} class="col-md-6 text-center py-4 px-4">
//                                     <p style={{ color: 'black' }} className='font-face-im text-center' >Some Go To The Extra Mile</p>
//                                     <p style={{ color: 'black' }} className='font-face-im' >We Will Run a Marathon</p>
//                                     <p className='font-face-hm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti saepe accusamus quidem quos! Exercitationem porro, aut ut error consequuntur reiciendis.</p>
//                                     <p className='font-face-hm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae, doloribus est similique hic minus!</p>

//                                 </div>
//                                 {/* </div> */}
//                             </div>



//                         </>

//                         {/* <div className="row d-flex justify-content-center align-items-center text-center">
//                         <div className="col-sm-md-6" data-aos="zoom-in"
//                             data-aos-duration="1000">
//                             <div className="bg-white My-Card custom-border-radius">
//                                 <h5 className='font-face-im black-title'>Some Go The Extra Mile</h5>
//                                 <h6 className='font-face-im red-title pb-3'>We Will Run A Marathon</h6>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="row d-flex justify-content-center align-items-center text-center">
//                         <div className="col-sm-md-6" data-aos="zoom-in"
//                             data-aos-duration="1000">
//                             <div className="bg-white My-Card custom-border-radius">
//                                 <h5 className='font-face-im black-title'>Some Go The Extra Mile</h5>
//                                 <h6 className='font-face-im red-title pb-3'>We Will Run A Marathon</h6>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
//                             </div>
//                         </div>
//                     </div>



//                     <div className="row d-flex justify-content-center align-items-center text-center">
//                         <div className="col-sm-md-6" data-aos="zoom-in"
//                             data-aos-duration="1000">
//                             <div className="bg-white My-Card custom-border-radius">
//                                 <h5 className='font-face-im black-title'>Some Go The Extra Mile</h5>
//                                 <h6 className='font-face-im red-title pb-3'>We Will Run A Marathon</h6>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="row d-flex justify-content-center align-items-center text-center">
//                         <div className="col-sm-md-6" data-aos="zoom-in"
//                             data-aos-duration="1000">
//                             <div className="bg-white My-Card custom-border-radius">
//                                 <h5 className='font-face-im black-title'>Some Go The Extra Mile</h5>
//                                 <h6 className='font-face-im red-title pb-3'>We Will Run A Marathon</h6>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row d-flex justify-content-center align-items-center text-center">
//                         <div className="col-sm-md-6" data-aos="zoom-in"
//                             data-aos-duration="1000">
//                             <div className="bg-white My-Card custom-border-radius">
//                                 <h5 className='font-face-im black-title'>Some Go The Extra Mile</h5>
//                                 <h6 className='font-face-im red-title pb-3'>We Will Run A Marathon</h6>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
//                             </div>
//                         </div>
//                     </div> */}


//                     </Slider>
//                 </div>


//                 <CustomBrands />
//             </div>
//         );
//     }
// }


const SlickSlider = () => {
    const items = [
        {
            id: 1,
            // heading: 'Some Go Extra Mile',
            heading1: 'Client Focus',
            description1: 'We place our clients at the center of our design process. By taking the time to truly understand your unique needs, objectives, and vision, we can develop design solutions that not only align with your business goals but also resonate with your target audience.',
            description2: 'Our commitment to client satisfaction drives us to exceed expectations and deliver outstanding results tailored to your brand.',
        },
        {
            id: 2,
            heading1: 'Creativity & Innovation',
            // heading: 'Some Go Extra Mile',
            description1: 'Our team of experienced designers is passionate about staying up-to-date with the latest design trends and techniques. We continuously seek opportunities to push the boundaries of creativity, ensuring that your brand stands out in today\'s competitive landscape.',
            description2: 'By embracing innovation and nurturing an environment of continuous learning, our agency delivers cutting-edge design solutions that set your brand apart.',
        },
        {
            id: 3,
            // heading: 'Some Go Extra Mile',
            heading1: 'Quality & Attention to Detail',
            description1: 'We take pride in providing high-quality design services that showcase your brand\'s professionalism and commitment to excellence. Our meticulous attention to detail ensures that every aspect of your brand\'s visual identity is polished and consistent,',
            description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae, doloribus est similique hic minus!'
        },
        {
            id: 4,
            heading1: 'Collaboration & Communication',
            description1: 'We believe that open communication and effective collaboration are essential components of a successful design project. By maintaining transparent communication throughout the design process, we ensure that our clients are always informed and involved in key decisions.',
            description2: 'This collaborative approach fosters strong working relationships and helps to achieve a seamless project execution that meets your brand\'s objectives.',
        },
    ];

    const settings = {
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        focusOnSelect: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='Main container-fluid py-5 slider-container'>
                <h2 className='text-center font-face-im red' data-aos-duration="1000">Our Core Values That You Can Trust</h2>
                {/* <h3 className='text-center pb-5 font-face-im black' data-aos-duration="1000">We Would Love To Stand With You And Go Miles Away Together</h3> */}
                <h3 className='text-center pb-5 font-face-im black' data-aos-duration="1000">Let's journey together and go the distance.</h3>

                <div class="row">
                    <div style={{ maxWidth: '750px', margin: '0px auto' }} class="row">
                        <div class="col-lg-12 col-md-12">
                            <Slider {...settings} className='core-values' >
                                {items.map((x, index) => {
                                    return (
                                        <>
                                            <div className="px-2 py-3">
                                                <div className="My-Card  col-lg-12 text-center py-4 px-4">
                                                    <div className='My-Card-Inner py-5'>
                                                        {/* <h4 style={{ color: 'black' }} className=' font-face-im text-center' >{x.heading}</h4> */}
                                                        {/* <h5 className='red font-face-im' >{x.heading1}</h5> */}
                                                        <h4 className='red font-face-im' >{x.heading1}</h4>
                                                        <p style={{ color: '#000000' }} className='font-face-hm'>{x.description1}</p>
                                                        <p style={{ color: '#000000' }} className='font-face-hm'>{x.description2}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </Slider>
                        </div>

                    </div>
                </div>




                {/* <section className="row py-3">
                    <div className="illusSection container ">
                        <div style={{ maxWidth: '1024px', margin: '0px auto' }} class="row">

                            <div class="col-lg-12 col-md-12">
                                <Slider {...settings}>
                                    {items.map((x, index) => {
                                        return (
                                            <>
                                                <div className="px-2 py-3">
                                                    <div class="d-md-flex illusCardDesign" >
                                                        <div class="col-md-8">
                                                            <h2 style={{ color: 'black' }} className='font-face-im' >{x.heading}</h2>
                                                            <p className='font-face-hm'>{x.description1}</p>
                                                            <p className='font-face-hm'>{x.description2}</p>
                                                            <GradientCustomButton
                                                                title='Check Portfolio'
                                                                padding='8px 40px'
                                                                marginTop='2px'
                                                                marginBottom='12px'
                                                            />
                                                        </div>
                                                        <div class="col-md-4 text-sm-center ">
                                                            <img className='img-fluid' src={x.image} alt="1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>


                </section> */}
                <CustomBrands />
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end  text-center mb-2" >
                        <CustomButton
                            title="Explore Services"
                            padding="10px 45px"


                            rf="Portfolio"
                            rn="yes"
                            z="1"
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-lg-start  text-center mb-2" >
                        <CustomButton
                            title="Lets Talk"
                            padding="10px 45px"
                            fontSize="20px"
                            rf="ContactForm"
                            z="1"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}


export default SlickSlider;