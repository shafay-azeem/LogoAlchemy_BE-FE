import React from "react";
import "../Top banner/HeroImage.css";

const SideNav = () => {
  function closeNav() {
    document.getElementById("sidenav").style.width = "0%";
  }
  return (
    <div className="sideNav" id="sidenav">
      <a href="#" className="closeBtn" onClick={closeNav}>
        &#10006;
      </a>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <a href="#">
        <button type="button">Login</button>{" "}
      </a>
    </div>
  );
};

export default SideNav;
