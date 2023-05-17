import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "../ContactForm/ContactForm.css";
import CustomButton from "../Global/CustomButton";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [notes, setNotes] = useState("");
  const [help, setHelp] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  const handleSubmit = async (event) => {

    console.log(name, email, phoneNumber, notes, help)
    event.preventDefault();
    const response = await fetch(
      "http://thelogoalchemy.com/api/email/V1/contactInfoMail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: name,
          userEmail: email,
          userPhoneNumber: phoneNumber,
          userNotes: notes,
          userHelp: help,
        }),
      }

    );
    const responseData = await response.json();
    console.log(responseData)
    alert(responseData.msg);
    document.getElementById("myForm").reset();
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
  console.log(rh);
  console.log(rw);
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
            <h4 className="red font-face-im">CONTACT OUR TEAM</h4>
            <h2 className="black font-face-im">WHAT ARE YOU WAITING FOR?</h2>
            <h2 className="red font-face-im">LET'S MAKE SOME MAGIC</h2>
            <h2 className="black font-face-im">TOGETHER.</h2>
            <p className="font-face-sm">
              Fill in our short contact form for a no-obligation consultation
              with a member of our team.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit} id="myForm">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-face-sm">Your Name</Form.Label>

                  <div className="fieldwrap inputfield">
                    <input
                      type="text"
                      placeholder="Your Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-face-sm">Email</Form.Label>

                  <div className="fieldwrap inputfield">
                    <input
                      type="email"
                      placeholder="Your Email"
                      style={inputStyle}
                      onChange={(e) => setEmail(e.target.value)}
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
                      placeholder="How Can We Help"
                      style={inputStyle}
                      onChange={(e) => setHelp(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-face-sm">
                    Your Phone No
                  </Form.Label>

                  <div className="fieldwrap inputfield">
                    <input
                      type="keypad"
                      placeholder="Your Phone No"
                      style={inputStyle}
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                      placeholder="Do You Have Any Notes"
                      style={inputStyle1}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  </div>
                </Form.Group>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <CustomButton
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
