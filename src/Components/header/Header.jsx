import React from "react";
import { useState } from "react";
import Logo from "../../assests/logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isBeveragesOpen, setIsBeveragesOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <a href="#food-menu">Menu</a>
            </li>
            <li className="nav-item">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="dropdown-toggle"
                onClick={() => setIsBeveragesOpen(!isBeveragesOpen)}
              >
                Beverages
              </a>
              {isBeveragesOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#food-menu">Coffee</a>
                  </li>
                  <li>
                    <a href="#food-menu">Tea</a>
                  </li>
                  <li>
                    <a href="#food-menu">Juice</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a href="#contact-form">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
