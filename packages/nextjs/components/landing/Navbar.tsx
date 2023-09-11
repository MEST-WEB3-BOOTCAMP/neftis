import React from "react";

const Navbar: React.FC = () => {
  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <a className="logo" href="/">
          <img src="assets/images/logo-dark.png" height="24" className="logo-light-mode" alt="" />
          <img src="assets/images/logo-dark.png" height="24" className="logo-dark-mode" alt="" />
        </a>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span/>
                <span/>
                <span/>
              </div>
            </a>
          </div>
        </div>

        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item mb-0">
            <div className="dropdown">
              <button
                type="button"
                className="btn dropdown-toggle p-0"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="uil uil-search text-dark fs-5 align-middle"/>
              </button>
              <div
                className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                style={{ width: "300px" }}
              >
                <div className="search-bar">
                  <div id="itemSearch" className="menu-search mb-0">
                    <form role="search" method="get" id="searchItemform" className="searchform">
                      <input
                        type="text"
                        className="form-control border rounded"
                        name="s"
                        id="searchItem"
                        placeholder="Search..."
                      />
                      <input type="submit" id="searchItemsubmit" value="Search" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="list-inline-item ps-1 mb-0">
            <a
              href="https://1.envato.market/landrick"
              target="_blank"
              className="btn btn-icon btn-pills btn-primary"
              rel="noreferrer"
            >
              <i className="uil uil-wallet"></i>
            </a>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <a href="index-nft.html" className="sub-menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="nft-explore.html" className="sub-menu-item">
                Explore
              </a>
            </li>
            <li>
              <a href="nft-creators.html" className="sub-menu-item">
                Creators
              </a>
            </li>
            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">Pages</a>
              <span className="menu-arrow"/>
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
                <li>
                  <a href="page-error.html" className="sub-menu-item">
                    Error
                  </a>
                </li>
                <li>
                  <a href="page-thankyou.html" className="sub-menu-item">
                    Thank you
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="helpcenter-overview.html" className="sub-menu-item">
                Help Center
              </a>
            </li>
            <li>
              <a href="page-contact-one.html" className="sub-menu-item">
                Contact
              </a>
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
