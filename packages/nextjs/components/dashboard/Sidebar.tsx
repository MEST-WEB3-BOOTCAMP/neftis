import React from "react";

const Sidebar = () => {
    return (
        <div id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content" data-simplebar="init">
                <div className="simplebar-wrapper">
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"/>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" >
                            <div className="simplebar-content-wrapper" tabindex="0" role="region"
                                 aria-label="scrollable content">
                                <div className="simplebar-content">
                                    <div className="sidebar-brand">
                                        <a href="index.html">
                                            <img src="assets/images/logo-dark.png" height="24" className="logo-light-mode"
                                                 alt=""/>
                                            <img src="assets/images/logo-light.png" height="24" className="logo-dark-mode"
                                                 alt=""/>
                                            <span className="sidebar-colored">
                                                {/*<img src="assets/images/logo-light.png" height="24" alt=""/>*/}
                                            </span>
                                        </a>
                                    </div>

                                    <ul className="sidebar-menu">
                                        <li className="sidebar-dropdown">
                                            <a href=""><i className="ti ti-home me-2"/>Dashboard</a>
                                            <div className="sidebar-submenu">
                                                <ul>
                                                    <li><a href="#">Analytics</a></li>
                                                    <li><a href="#">Cryptocurrency <span
                                                        className="badge text-bg-danger">New</span></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown">
                                            <a href=""><i className="ti ti-browser me-2"/>Layouts</a>
                                            <div className="sidebar-submenu">
                                                <ul>
                                                    <li><a href="#">Dark Dashboard</a></li>
                                                    <li><a href="#">RTL Dashboard</a></li>
                                                    <li><a href="#">Dark RTL Dashboard</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

