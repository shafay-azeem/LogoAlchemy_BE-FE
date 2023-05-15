import React from "react";
import "../PrivacyPolicy/PrivacyPolicyPage.css";
import NavigationBar from "../Top banner/NavigationBar";
import Footer from "../Miscellaneous/Footer";
import ContactForm from "../ContactForm/ContactForm";

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className="page-header container-fluid">
        <NavigationBar />
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
              We at The Logo Alchemy secure and regard the privacy of our
              clients. We are completely compliant with the privacy policies to
              safeguard your interests. We gather individual data about our
              clients to serve them with our services. Please, go through our
              policy concerning the use, collection, and disclosure of Personal
              Data of clients when you utilize our services. We don’t utilize or
              impart your data to anybody besides as portrayed in this Privacy
              Policy.
            </p>

            <h2 className="text-start py-2">
              Personal Data That We Collect And User Rights
            </h2>
            <p>
              We possibly gather identifiable data when you sign in to our site
              or give data in our order form. You may be asked to give your
              complete name, contact number, email address, and mailing
              information. Moreover, other than the Personal details we also
              gather Non-Personal Information of our Users. The Personal
              Information is gathered during registration on our Website i.e.,
              name, email, and contact subtleties. Clients’ financial, banking,
              or payments details are additionally being asked for billing
              purposes, in any case, the User utilizes third-party payment
              gateways to make and get installments. While, the Non-Personal
              data is gathered automatically by the system when any User visits
              our Website, which incorporates access time, language, IP address,
              and browser. This information is gathered to better your
              experience. We never share or sell Users Personal Data without
              assent.
            </p>

            <h2 className="text-start py-2">
              Personal Data That We Collect And User Rights
            </h2>
            <p>
              We possibly gather identifiable data when you sign in to our site
              or give data in our order form. You may be asked to give your
              complete name, contact number, email address, and mailing
              information. Moreover, other than the Personal details we also
              gather Non-Personal Information of our Users. The Personal
              Information is gathered during registration on our Website i.e.,
              name, email, and contact subtleties. Clients’ financial, banking,
              or payments details are additionally being asked for billing
              purposes, in any case, the User utilizes third-party payment
              gateways to make and get installments. While, the Non-Personal
              data is gathered automatically by the system when any User visits
              our Website, which incorporates access time, language, IP address,
              and browser. This information is gathered to better your
              experience. We never share or sell Users Personal Data without
              assent.
            </p>
            <h2 className="text-start py-2">Security Of Personal Data</h2>
            <p>
              The Logo Alchemy utilizes high standard measures to protect our
              client’s information to limit the danger of
              misfortune/unauthorized access of information. We regard your
              trust in The Logo Alchemy, accordingly, we utilize profoundly
              encrypted frameworks to secure our data. We keep up with strict
              privacy policies and procedures to manage any data breach. We will
              aware you and the suitable experts if there is any sort of data
              breach.
            </p>
            <h2 className="text-start py-2">Do We Use Cookies?</h2>
            <p>
              Indeed. Cookies are files that a site transfers to the hard drive
              of the visitors through your internet browser (If granted
              permission) that permit the websites to recognize your program and
              record specific data. We use cookies to assist us with gathering
              your interest for the future and set up the site traffic and site
              connection so we can improve your website experience. Such data is
              recorded in an unknown form that does not consist of any of your
              details. We don’t gather any personally identifiable information
              except if it’s submitted straightforwardly using the ordering form
            </p>

            <h2 className="text-start py-2">
              Do We Disclose This Information To Outside Parties?
            </h2>
            <p>
              We don’t sell, distribute, transfer or disclose your details to
              third parties. That does exclude the entities of third parties
              that help us in dealing with our site, working our business, or
              serving you, so as long as these collections agree to keep the
              details private. We may disclose the information to agree with the
              law, implement our site policies or defend the rights, property,
              and security. The non-personal data anyway can be imparted to
              various gatherings for promotion and different purposes
            </p>
            <h2 className="text-start py-2">
              Notification Of The Changes In Privacy Policy
            </h2>
            <p>
              Assuming we choose to change our privacy policy, we will post
              those updates on this privacy statement, the home page, and
              different sections we consider suitable so you know about what
              data we gather, how we use it, and under what conditions, assuming
              any, we disclose it. We reserve all authority to amend or modify
              the privacy policy. In case that we roll out material improvements
              to this policy, we will tell you here, by email, or through a
              notification on our home page before the change is implemented.
            </p>
            <h2 className="text-start py-2">Third-Party Links</h2>
            <p>
              In some cases, we may include or permit third-party services for
              our site. Such locales have different privacy policies. We won’t
              be considered accountable for the activities and content of these
              third-party sites
            </p>

            <h2 className="text-start py-2">Contact Us</h2>
            <p>
              For further information and queries, you may reach out to us
              through customer support or email
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
