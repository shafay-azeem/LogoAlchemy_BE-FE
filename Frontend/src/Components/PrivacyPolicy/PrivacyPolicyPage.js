import React from "react";
import "../PrivacyPolicy/PrivacyPolicyPage.css";
import NavigationBar from "../Top banner/NavigationBar";
import Footer from "../Miscellaneous/Footer";
import ContactForm from "../ContactForm/ContactForm";

import whatsappimg from "../../assets/whatsapp.png";
import phoneimg from "../../assets/phone.png";

const PrivacyPolicyPage = () => {
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
      <section className="page-header container-fluid">
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
            <h2 className="page-heading text-white text-center">
              Privacy Policy
            </h2>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row py-5">
          <div className="col-lg-12">
            <h2 className="text-start py-2">Privacy Policy</h2>
            <p>
              At The Logo Alchemy, we understand the importance of privacy and
              are committed to protecting the personal information you provide
              to us. This Privacy Policy outlines how we collect, use, disclose,
              and safeguard your information when you visit our website or use
              our services. By accessing our website or engaging with our
              services, you consent to the practices described in this policy.
              <br></br> <br></br>
              Information We Collect <br></br> <br></br>We may collect personal
              information from you when you interact with our website or use our
              services. The types of personal information we may collect
              include:
            </p>

            <h2 className="text-start py-2">Contact Information</h2>
            <p>
              This includes your name, email address, phone number, and any
              other information you provide when contacting us or submitting
              inquiries through our website.
            </p>

            <h2 className="text-start py-2">Client Information</h2>
            <p>
              If you engage our services, we may collect additional information
              necessary for providing our design services, such as your company
              name, business address, and payment information.
            </p>
            <h2 className="text-start py-2">Usage Information </h2>
            <p>
              We may automatically collect information about your usage of our
              website, including your IP address, browser type, operating
              system, referring URLs, and other browsing details. This
              information helps us improve our website and provide a better user
              experience.
            </p>
            <h2 className="text-start py-2">Cookies</h2>
            <p>
              Like many websites, we use cookies and similar tracking
              technologies to enhance your browsing experience and collect
              information about how you use our website. You can adjust your
              browser settings to refuse cookies, but this may limit your access
              to certain features of our website.
            </p>

            <h4 className="text-start py-2">Use of Information</h4>
            <p>
              We may use the information we collect from you for various
              purposes, including but not limited to.
            </p>

            <h2 className="text-start py-2">
              Providing and improving our services
            </h2>
            <p>
              We use your information to deliver the services you request and to
              enhance and personalize your experience with us.
            </p>

            <h2 className="text-start py-2">Communicating with you</h2>
            <p>
              We may use your contact information to respond to your inquiries,
              provide customer support, and send you important updates or
              promotional materials related to our services. You can opt out of
              receiving promotional communications at any time
            </p>

            <h2 className="text-start py-2">Internal business purposes</h2>
            <p>
              We may use your information for internal purposes such as data
              analysis, research, and improving our website and services.
            </p>

            <h2 className="text-start py-2">Legal compliance</h2>
            <p>
              We may use or disclose your information to comply with applicable
              laws, regulations, legal processes, or enforceable governmental
              requests.
            </p>

            <h4 className="text-start py-2">Data Security</h4>
            <p>
              We implement appropriate security measures to protect the
              confidentiality, integrity, and availability of your personal
              information. However, please note that no method of transmission
              over the internet or electronic storage is completely secure.
              While we strive to protect your personal information, we cannot
              guarantee its absolute security.
            </p>

            <h4 className="text-start py-2">Third-Party Disclosure</h4>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this Privacy Policy. We may share your information
              with trusted third-party service providers who assist us in
              operating our website and providing our services, but they are
              obligated to keep your information confidential and only use it
              for the purposes we specify.
            </p>

            <h4 className="text-start py-2">Links to Third-Party Websites</h4>
            <p>
              Our website may contain links to third-party websites or services.
              We do not have control over the privacy practices or content of
              these websites, and we are not responsible for their practices. We
              encourage you to review the privacy policies of these third-party
              websites before providing any personal information to them.
            </p>

            <h4 className="text-start py-2">Changes to this Privacy Policy</h4>
            <p>
              We reserve the right to modify or update this Privacy Policy at
              any time. When we make changes to this policy, we will revise the
              "Effective Date" at the top of this page. We encourage you to
              review this Privacy Policy periodically to stay informed about how
              we collect, use, and protect your information.
            </p>

            <h2 className="text-start py-2">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our privacy practices, please contact us at :&nbsp;
              <a
                href="mailto:info@thelogoalchemy.com"
                style={{ textDecoration: "none", color: "#d40e2f" }}
              >
                info@thelogoalchemy.com
              </a>
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

export default PrivacyPolicyPage;
