import React from "react";
import "../Illustration/Illustration.css";
import IllustrationHeader from "./IllustrationHeader";
import NavigationBar from "../Top banner/NavigationBar";

const IllustrationHeroImg = () => {
    return (
        <div className="illustrationBanner">
            <NavigationBar />
            <IllustrationHeader />
        </div>
    );
};

export default IllustrationHeroImg;