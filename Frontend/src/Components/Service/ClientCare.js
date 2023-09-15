import React, { useEffect, useState } from "react";
import "../Service/ClientCare.css";
import BoyLogo from "../../assets/Boy.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ClientCare = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [details, setDetails] = useState(props?.detail);
  const toggleAccordion = (id) => {
    setDetails((prevDetails) =>
      prevDetails.map((detail) => ({
        ...detail,
        isOpen: detail.id === id,
      }))
    );
  };

  return (
    <div className="section">
      <div className="container py-5">
        {/* <h3
          className="red text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          WE CARE ABOUT OUR CLIENTS
        </h3> */}
        <h1
          className="text-center text-white font-face-im "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {props?.detailHeading}
        </h1>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            {details.map((detail) => (
              <details
                key={detail.id}
                open={detail.isOpen}
                onClick={() => toggleAccordion(detail.id)}
              >
                <summary>{detail.summary}</summary>
                <p>{detail.content}</p>
              </details>
            ))}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={BoyLogo} className="img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCare;
