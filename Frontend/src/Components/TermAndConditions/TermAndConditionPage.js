import React from "react";
import "../TermAndConditions/TermAndConditionPage.css";
import NavigationBar from "../Top banner/NavigationBar";
import Footer from "../Miscellaneous/Footer";
import ContactForm from "../ContactForm/ContactForm";
import FloatingBtn from "../Global/FloatingBtn";
const TermAndConditionPage = () => {
  return (
    <>
      <section className="ConditionBanner container-fluid">
        <NavigationBar />
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "-10px",
            zIndex: "9999",
          }}
        >
          <FloatingBtn />
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
              For the entirety of this document “we”, “our”, “us” and “The Logo
              Alchemy” refer to The Logo Alchemy that are the owners of this
              site, and their associates that deliver services to you are
              subject to given terms and conditions. When you visit our website
              or buy our product/service, you agree to these terms and
              conditions. Kindly refer to the below carefully:
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Acceptance Of Terms </h2>
            <p>
              When you visit The Logo Alchemy (The website) you agree to abide
              by the terms and conditions and you consent to our privacy policy.
              If you don’t agree to any of the terms and conditions mentioned in
              this document, you should not go ahead with any service/products
              from us and leave this website immediately. You agree that you
              will not be making use of this website for unlawful purposes and
              would bear in mind all the laws and regulations. You agree to not
              use this website in a way that may impact its performance, corrupt
              the content, or in any way hinder the functionality of this
              website. You also agree to not compromise the safety of this
              website or try to enter restricted areas of this website. You
              consent to be entirely responsible for any claim, liability,
              expense, costs, and losses.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Modification</h2>
            <p>
              We reserve the right to change any part of this document without
              any prior notice and your usage of our website would amount to
              your consent to these terms and conditions. We encourage our
              visitors to constantly check this document. The Logo Alchemy
              reserves the full right to alter or erase any part of this site
              without warning or liability that sparks from that action.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Limitation Of Liability</h2>
            <p>
              The Logo Alchemy would not be held responsible under any
              conditions for indirect, unique, or consequential damages that
              include any business, profit, revenue, or data loss linked with
              the use of our website or any service/product provided by us. If
              you are not comfortable or satisfied with any of our material or
              our terms and conditions, you should leave right now and stop
              using our services. We strive to ensure that our website is
              virus-free, we however don’t guarantee the absence of all malware
              and viruses and we also don’t give any guarantees regarding e-mail
              attachments that you might have received from third parties. The
              recipients are encouraged to check email, attachments, and other
              files before accessing them.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Loss </h2>
            <p>
              We are not responsible for any lost file; you are advised to
              always keep an original copy of your work.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Payment</h2>
            <p>
              Payment is to be made in full in advance. We might be able to set
              up monthly/weekly/quarterly payment plans for our loyal users.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Warranty</h2>
            <p>
              Both the parties warrant their power to enter this agreement and
              gain the approval to do so.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Variations To This Service </h2>
            <p>
              We are authorized to fluctuate the prices resulting from any of
              the below-mentioned factors:
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">
              Any alterations in your instructions.
            </h2>
            <p>
              If you forgot to mention the complete instructions. Interruptions,
              delays, or overtime for reasons beyond the control of The Logo
              Alchemy. Once you have the logo you like and you want to place a
              revision, the complete price of that package will be applied.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Cancellation</h2>
            <p>
              You have the right to cancel your work any time before we have
              started working on it. If you wish to stop the work once we have
              started working on it, you would be charged for the work that has
              been completed till then. The half-completed work will also be
              delivered to you upon cancellation.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Contract Termination</h2>
            <p>
              We reserve the right to terminate any assignment for any reason
              without any prior notice.
            </p>
          </div>

          <div className="col-lg-12">
            <h2 className="text-start py-2">Copyright</h2>
            <p>
              Your usage of the website means that you agree to respect the
              individual property of The Logo Alchemy for example parents,
              design trademarks, names, and other property owned by the website.
              You
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
