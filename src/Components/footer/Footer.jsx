import React from "react";
import "./footer.css";
import logo from "../../assests/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container bd-container">
        {/* Footer Heading and Sub Heading */}
        {/* <h2>Bean There</h2> */}
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <p>Experience the Perfect Blend of Flavor and Ambiance</p>

        {/* Social Icons */}
        <div className="footer__social">
          <a href="#" className="footer__link">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="footer__link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="footer__link">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <p className="footer__copy">
          &#169; 2024 Bean There. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <footer  className="footer">
  <div  className="footer__container bd-container">
    <h2  className="footer__title">Clay Doe</h2>
    <p  className="footer__description">
      I am Clay Doe and this is my personal website, consult me here.
    </p>

    <div  className="footer__social">
      <a href="#"  className="footer__link">
        <i  className="bx bxl-linkedin"></i>
      </a>
      <a href="#"  className="footer__link">
        <i  className="bx bxl-github"></i>
      </a>
      <a href="#"  className="footer__link">
        <i  className="bx bxl-codepen"></i>
      </a>
    </div>
    <p  className="footer__copy">&#169; 2024 Clay Doe. All right reserved</p>
  </div>
</footer>; */
}
