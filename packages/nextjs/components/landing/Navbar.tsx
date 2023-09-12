import React from "react";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import {RainbowKitConnectButton} from "~~/components/RainbowKitConnect";

const Navbar: React.FC = () => {
  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <a className="logo" href="">
          <img src="assets/images/logo-dark.png" height="24" className="logo-light-mode" alt="" />
          <img src="assets/images/logo-dark.png" height="24" className="logo-dark-mode" alt="" />
        </a>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
          </div>
        </div>

        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item ps-1 mb-0">
            {/*<RainbowKitCustomConnectButton />*/}
            <RainbowKitConnectButton/>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <a href="" className="sub-menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="sub-menu-item">
                Categories
              </a>
            </li>
            <li>
              <a href="/products" className="sub-menu-item">
                Products
              </a>
            </li>
            <li>
              <a href="/creators" className="sub-menu-item">
                Creators
              </a>
            </li>
            <li className="has-submenu parent-menu-item">
              <a href="#">Pages</a>
              <span className="menu-arrow" />
              <ul className="submenu">
                <li>
                  <a href="auth-login-bg-video.html" className="sub-menu-item">
                    Login
                  </a>
                </li>
                <li>
                  <a href="auth-signup-bg-video.html" className="sub-menu-item">
                    Signup
                  </a>
                </li>
                <li>
                  <a href="auth-reset-password-bg-video.html" className="sub-menu-item">
                    Reset Password
                  </a>
                </li>
                <li>
                  <a href="page-comingsoon.html" className="sub-menu-item">
                    Coming Soon
                  </a>
                </li>
                <li>
                  <a href="page-maintenance.html" className="sub-menu-item">
                    Maintenance
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// Define the toggleMenu function here as needed.
function toggleMenu() {
  // Your toggleMenu function logic goes here
}
