import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <header>
          <div className="logo-box">
            <Link className="logo">
              <img src="/logo.png" alt="logo" />
              <div>
                <p className="logo-text">
                  W.T.<span>F</span>
                </p>
                <p className="logo-bottom">WHAT THE FORGETTING</p>
              </div>
            </Link>
          </div>

          <nav>
            <ul className="nav-button">
              <li>
                <Link className="link home">
                  <i className="fa-solid fa-house"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link className="link project">
                  <i className="fa-solid fa-layer-group"></i>
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link about">
                  <i className="fa-solid fa-user-tie"></i>
                  About
                </Link>
              </li>
            </ul>

            <div className="multi-button">
              <a className="phone" href="tel:+998910055660">
                <i className="fa-solid fa-phone"></i> Call
              </a>
              <a className="telegram" href="https://telegram.me/abdulaxatov_8">
                <i className="fa-brands fa-telegram"></i> Telegram
              </a>
              <a className="instagram" href="https://instagram.com/a.unknown_2">
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
