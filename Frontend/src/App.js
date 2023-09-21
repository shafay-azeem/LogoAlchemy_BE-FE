import "./App.css";

import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Illustration from "./Illustration.js";
import Branding from "./Branding.js";
import Logo from "./Logo.js";
import PrivacyPolicyPage from "./Components/PrivacyPolicy/PrivacyPolicyPage";
import TermAndConditionPage from "./Components/TermAndConditions/TermAndConditionPage";
import Articles from "./Components/Blogs/Articles";
import BlogDetailPage from "./Components/Blogs/BlogDetailPage";
import ArtificalBlogDetails from "./Components/Blogs/ArtificalBlogDetails";
import BrandsIdentity from "./Components/Blogs/BrandsIdentity";
import Portfolio from "./Portfolio.js";
import Usp from "./Components/Usp/Usp";
import PortfolioGallery from "./PortfolioGallery";
import GameBlogDetails from "./Components/Blogs/GameBlogDetails";
import Zendesk, { ZendeskAPI } from "../src/ZendexConfig";

function App() {
  const ZENDESK_KEY = "65cca4ad-17f7-438e-ae7b-6f1ab07214cf";

  return (
    <div>
      <Zendesk defer zendeskKey={ZENDESK_KEY} isMobile={true} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Illustration" element={<Illustration />} />
        <Route path="/BrandingAgency" element={<Branding />} />
        <Route path="/LogoDesign" element={<Logo />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/TermAndCondition" element={<TermAndConditionPage />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/BlogDetails" element={<BlogDetailPage />} />
        <Route
          path="/ArtificalBlogDetails"
          element={<ArtificalBlogDetails />}
        />
        <Route path="/GameBlogDetails" element={<GameBlogDetails />} />
        <Route path="/BrandsIdentity" element={<BrandsIdentity />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/PortfolioGallery" element={<PortfolioGallery />} />
        <Route path="/Usp" element={<Usp />} />
      </Routes>
    </div>
  );
}

export default App;
