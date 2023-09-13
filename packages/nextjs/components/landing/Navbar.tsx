import React from "react";
import {RainbowKitConnectButton} from "~~/components/RainbowKitConnect";
import TopHeader from "~~/components/dashboard/TopHeader";

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
            <RainbowKitConnectButton/>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <a href="/#" className="sub-menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="/#collections" className="sub-menu-item">
                Collections
              </a>
            </li>
            <li>
              <a href="/#marketplace" className="sub-menu-item">
                Marketplace
              </a>
            </li>
            <li>
              <a href="/#creators" className="sub-menu-item">
                Creators
              </a>
            </li>
          </ul>
        </div>

        {/*<TopHeader/>*/}
      </div>
    </header>
  );
};

export default Navbar;

// Define the toggleMenu function here as needed.
function toggleMenu() {
  // Your toggleMenu function logic goes here
}
