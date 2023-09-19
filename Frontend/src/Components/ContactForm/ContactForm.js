import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import "../ContactForm/ContactForm.css";
import CustomButton from "../Global/CustomButton";
import Aos from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const currentProtocol = window.location.protocol;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [notes, setNotes] = useState("");
  const [help, setHelp] = useState("");

  const [verified, setVerified] = useState(false);

  const recaptchaRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch(
  //     "https://thelogoalchemy.com/api/email/V1/contactInfoMail",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         userName: name,
  //         userEmail: email,
  //         userPhoneNumber: phoneNumber,
  //         userNotes: notes,
  //         userHelp: help,
  //       }),
  //     }
  //   );
  //   const responseData = await response.json();

  //   alert(responseData.msg);
  //   document.getElementById("myForm").reset();
  //   recaptchaRef.current.reset();
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (emailInput.value === "" || messageInput.value === "") {
      alert("Please enter all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_7d7dhka",
        "template_3vmaz24",
        form.current,
        "L1KUtlBDlo8zgEZgB"
      )
      .then(
        (result) => {
          form.current.reset();
          window.alert("Email sent successfully!");
          recaptchaRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const divStyle = {};
  const inputStyle = {
    padding: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    width: "100%",
  };

  const divStyle1 = {
    padding: "1px",
    borderRadius: "10px",
    background:
      "linear-gradient(to right, #B91532, #9E3040, #9B3342, #8E4049, #755A56, #5F7061, #48876D, #3C9373, #1F8C8A, #207E8C, #226E8E, #236190, #245891, #273C95, #273B95 )",
    marginBottom: "20px",
  };

  const inputStyle1 = {
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    width: "100%",
    height: "100%",
  };

  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let rh = screenDimensions.height;
  let rw = screenDimensions.width;

  return (
    <div
      style={{ marginTop: "80px" }}
      className="container py-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div style={{ paddingBottom: "80px" }} className="inner-Contact">
            {/* <h4 className="red font-face-im">CONTACT OUR TEAM</h4> */}
            <h2 className="black font-face-im">LET'S COLLABORATE AND</h2>
            <h2 className="red font-face-im">CONJURE UP SOME</h2>
            <h2 className="black font-face-im">EXTRAORDINARY MAGIC!</h2>
            <p className="font-face-sm">
              Fill out form to schedule a consultation with our team today.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <form
            // onSubmit={handleSubmit}
            // id="myForm"

            ref={form}
            onSubmit={sendEmail}
          >
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-face-sm">
                    Your Name<span className="required">*</span>
                  </Form.Label>

                  <div className="fieldwrap inputfield">
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      placeholder="Your Name"
                      // onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-face-sm">
                    Email<span className="required">*</span>
                  </Form.Label>

                  <div className="fieldwrap inputfield">
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      placeholder="Your Email"
                      style={inputStyle}
                      // onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-face-sm">
                    How Can We Help
                  </Form.Label>

                  <div className="fieldwrap inputfield">
                    <input
                      type="text"
                      id="text"
                      name="user_text"
                      placeholder="How Can We Help"
                      style={inputStyle}
                      // onChange={(e) => setHelp(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-face-sm">
                    Your Phone No.
                  </Form.Label>

                  <div className="fieldwrap inputfield">
                    <input
                      type="keypad"
                      placeholder="Your Phone No"
                      id="phone"
                      name="user_phone"
                      style={inputStyle}
                      // onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="font-face-sm">
                    Do You Have Any Notes
                  </Form.Label>

                  <div className="fieldwrap textarea">
                    <textarea
                      type="text"
                      as="textarea"
                      id="message"
                      name="user_message"
                      placeholder="Do You Have Any Notes"
                      style={inputStyle1}
                      // onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  </div>
                </Form.Group>
              </div>
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lc8w08mAAAAALIVMBY9Fug7zfc6Se4MIq0seudB"
              onChange={onChange}
              className="mb-4"
            />

            <div className="d-flex align-items-center justify-content-center">
              <CustomButton
                disabled={!verified}
                type={"submit"}
                title={"Make Magic Happen"}
                borderRadius="40px"
                padding="10px 15px"
                fontSize={
                  rw <= 350
                    ? "10px"
                    : rw > 350 && rw <= 640
                    ? "13px"
                    : rw >= 641 && rw <= 1007
                    ? "16px"
                    : "20px"
                }
                alignSelf="center"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
