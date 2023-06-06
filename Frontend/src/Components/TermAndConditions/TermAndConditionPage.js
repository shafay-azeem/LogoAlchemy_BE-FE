import React from "react";
import "../TermAndConditions/TermAndConditionPage.css";
import NavigationBar from "../Top banner/NavigationBar";
import Footer from "../Miscellaneous/Footer";
import ContactForm from "../ContactForm/ContactForm";
import whatsappimg from "../../assets/whatsapp.png";
import phoneimg from "../../assets/phone.png";

const TermAndConditionPage = () => {
  const handleButton = () => {
    var url = "https://wa.me/+19015464595";
    window.open(url);
  };
  const navigateContact = () => {
    var url = "tel:+19015464595";
    window.location.href = url;
  };
  return (
    <>
      <section className="ConditionBanner container-fluid">
        <NavigationBar />
        <div
          style={{
            position: "fixed",
            bottom: "280px",
            right: "-1px",
            zIndex: "9999",
            height: "50px",
            width: "50px",
          }}
        >
          <img
            src={phoneimg}
            style={{
              height: "50px",
              width: "50px",

              cursor: "pointer",
            }}
            onClick={navigateContact}
          />
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "20px",
            zIndex: "9999",
            height: "50px",
            width: "50px",
          }}
        >
          <img
            src={whatsappimg}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              cursor: "pointer",
            }}
            onClick={handleButton}
          />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="termsHeading text-white text-center">
              Terms And Conditions
            </h2>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <p>
              The Logo Alchemy (referred to as "Company," "we," "our," or "us"),
              governing the use of our design services, including logo design,
              illustration, and branding. By engaging our services, you
              acknowledge that you have read, understood, and agreed to comply
              with these terms.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Services</h2>

            <p>
              1.1 Scope of Services: We offer logo design, illustration, and
              branding services to clients based on their specific requirements.
              The details of the services, including deliverables, timelines,
              and pricing, will be discussed and agreed upon in writing or via
              email. <br></br> <br></br>1.2 Client Responsibilities: As the
              Client, you agree to provide clear and timely instructions,
              materials, and feedback necessary for the completion of the
              project. Failure to do so may result in delays and additional
              charges.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Intellectual Property Rights</h2>

            <p>
              2.1 Ownership: Upon receipt of full payment, the final
              deliverables will be considered the intellectual property of the
              Client. Until full payment is received, the Company retains
              ownership of all drafts, concepts, and preliminary designs.
              <br></br> <br></br>2.2 Usage Rights: The Company grants the Client
              a non-exclusive, non-transferable license to use the final
              deliverables for their intended purpose. The Client may not
              modify, reproduce, or distribute the final deliverables without
              the Company's prior written consent.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Payments</h2>

            <p>
              3.1 Fees and Payment Schedule: The Client agrees to pay the
              Company the agreed-upon fees for the services rendered. A detailed
              payment schedule will be provided, outlining the due dates and
              payment methods.
              <br></br> <br></br>3.2 Additional Charges: Any additional
              services, revisions, or modifications requested by the Client that
              go beyond the original scope of work will be subject to additional
              charges. <br></br> <br></br>3.3 Late Payments: In the event of
              late payments, the Company reserves the right to suspend work,
              withhold deliverables, or charge late fees as outlined in the
              payment schedule.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Revisions and Modifications </h2>

            <p>
              4.1 Initial Concepts: The Company will present the Client with
              initial design concepts based on the agreed-upon specifications.
              The Client may request revisions and modifications during this
              stage.
              <br></br> <br></br>4.2 Revisions and Modifications: The Client is
              entitled to a specific number of revisions, as agreed upon in the
              project proposal or contract. Additional revisions or
              modifications requested beyond this limit may incur additional
              charges. <br></br> <br></br>4.3 Acceptance of Final Design: Upon
              approval of the final design, the Client accepts responsibility
              for any further modifications or changes.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Confidentiality</h2>

            <p>
              5.1 Non-Disclosure: The Company agrees to keep confidential any
              proprietary or sensitive information provided by the Client for
              the purpose of the project.
              <br></br> <br></br>5.2 Publicity: The Company reserves the right
              to showcase the completed project in its portfolio and marketing
              materials unless otherwise agreed upon in writing.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Termination </h2>

            <p>
              6.1 Termination by Client: The Client may terminate the agreement
              at any time by providing written notice to the Company. However,
              the Client will be responsible for compensating the Company for
              any work completed up to the termination date.
              <br></br> <br></br>6.2 Termination by Company: The Company
              reserves the right to terminate the agreement if the Client
              breaches any terms outlined in this Agreement. In such cases, the
              Client will be responsible for compensating the Company for the
              work completed up to the termination date.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Limitation of Liability </h2>

            <p>
              7.1 Indirect Damages: The Company shall not be liable for any
              indirect, consequential, or incidental damages arising out of or
              related to the services provided
              <br></br> <br></br>7.2 Maximum Liability: In no event shall the
              Company's liability exceed the total fees paid by the Client for
              the specific project.<br></br> <br></br>7.3 Client Responsibility:
              The Client is solely responsible for the selection and use of the
              final deliverables, and the Company shall not be liable for any
              claims, damages, or losses resulting from their use.
            </p>
          </div>
        </div>
      </div>
      <div id="ContactForm">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default TermAndConditionPage;
