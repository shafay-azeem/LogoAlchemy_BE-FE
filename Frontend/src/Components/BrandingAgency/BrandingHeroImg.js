import React from "react";
import BrandingHeader from "./BrandingHeader";
import NavigationBar from "../Top banner/NavigationBar";
import "../BrandingAgency/Branding.css";
const BrandingHeroImg = () => {
  return (
    <div className="brandingBanner">
      <NavigationBar />
      <BrandingHeader />
    </div>
  );
};

export default BrandingHeroImg;
