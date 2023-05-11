import React from "react";
import "../Top banner/HeroImage.css";
import logo from "../../assets/logo (3).png";
import CustomButton from "../Global/CustomButton";

const Navbar = () => {
  function openNav() {
    document.getElementById("sidenav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("sidenav").style.width = "0%";
  }

  return (
    <div className="container-fluid">
      <nav>
        <div className="row">
          <div className="col-md-lg-2">
            <div className="logo">
              <img className="nav-Logo" src={logo} />
            </div>
          </div>
        </div>

        <span className="menubtn" onClick={openNav}>
          &#9776;
        </span>
        <div className="col-md-lg-6">
          <div className="navLinks">
            <ul style={{ marginLeft: '120px' }}>
              <li>
                <a href="#" className="font-face-hm">HOME</a>
              </li>
              <li>
                <a href="#" className="font-face-hm">SERVICES</a>
              </li>
              <li>
                <a href="#" className="font-face-hm">PORTFOLIO</a>
              </li>
              <li>
                <a href="#" className="font-face-hm w-1">CONTACT</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="navLinks col-md-lg-4">
          <CustomButton title={'Get a Quick Qoute!'}
            borderRadius='40px'
            padding='10px 20px'
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;