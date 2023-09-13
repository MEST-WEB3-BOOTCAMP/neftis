import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header bg-primary">
            <div className="header-bar d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="search-bar p-0 d-none d-md-block ms-2">
                        <div id="search" className="menu-search mb-0">
                            <form role="search" method="get" id="searchform" className="searchform">
                                <div className="input-group">
                                    <input type="text" className="form-control border rounded" name="s" id="s" placeholder="Search Keywords..." />
                                    <button type="submit" id="searchsubmit" className="btn btn-primary">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <ul className="list-unstyled mb-0">
                    <li className="list-inline-item mb-0">
                        <a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <div className="btn btn-icon btn-soft-light"><i className="ti ti-settings"></i></div>
                        </a>
                    </li>

                    <li className="list-inline-item mb-0 ms-1">
                        <div className="dropdown dropdown-primary">
                            <button type="button" className="btn btn-icon btn-soft-light dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-bell"></i></button>
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>

                            <div className="dropdown-menu dd-menu shadow rounded border-0 mt-3 p-0" style={{ height: "320px", width: "290px" }}>
                                <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                                    <h6 className="mb-0 text-dark">Notifications</h6>
                                    <span className="badge bg-soft-danger rounded-pill">3</span>
                                </div>
                                <div className="p-3">
                                    <a href="#!" className="dropdown-item features feature-primary key-feature p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="icon text-center rounded-circle me-2">
                                                <i className="ti ti-shopping-cart"></i>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-dark title">Order Complete</h6>
                                                <small className="text-muted">15 min ago</small>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#!" className="dropdown-item features feature-primary key-feature p-0 mt-3">
                                        <div className="d-flex align-items-center">
                                            <img src="assets/images/client/04.jpg" className="avatar avatar-md-sm rounded-circle border shadow me-2" alt="" />
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-dark title"><span className="fw-bold">Message</span> from Luis</h6>
                                                <small className="text-muted">1 hour ago</small>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#!" className="dropdown-item features feature-primary key-feature p-0 mt-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icon text-center rounded-circle me-2">
                                                <i className="ti ti-currency-dollar"></i>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-dark title"><span className="fw-bold">One Refund Request</span></h6>
                                                <small className="text-muted">2 hour ago</small>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#!" className="dropdown-item features feature-primary key-feature p-0 mt-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icon text-center rounded-circle me-2">
                                                <i className="ti ti-truck-delivery"></i>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-dark title">Delivered your Order</h6>
                                                <small className="text-muted">Yesterday</small>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#!" className="dropdown-item features feature-primary key-feature p-0 mt-3">
                                        <div className="d-flex align-items-center">
                                            <img src="assets/images/client/15.jpg" className="avatar avatar-md-sm rounded-circle border shadow me-2" alt="" />
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-dark title"><span className="fw-bold">Cally</span> started following you</h6>
                                                <small className="text-muted">2 days ago</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="list-inline-item mb-0 ms-1">
                        <div className="dropdown dropdown-primary">
                            <button type="button" className="btn btn-soft-light dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/client/05.jpg" className="avatar avatar-ex-small rounded" alt="" /></button>
                            <div className="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3" style={{ minWidth: "200px" }}>
                                <a className="dropdown-item d-flex align-items-center text-dark pb-3" href="profile.html">
                                    <img src="assets/images/client/05.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <div className="flex-1 ms-2">
                                        <span className="d-block">Cristina Julia</span>
                                        <small className="text-muted">UI / UX Designer</small>
                                    </div>
                                </a>
                                <a className="dropdown-item text-dark" href="index.html"><span className="mb-0 d-inline-block me-1"><i className="ti ti-home"/></span> Dashboard</a>
                                <a className="dropdown-item text-dark" href="profile.html"><span className="mb-0 d-inline-block me-1"><i className="ti ti-settings"/></span> Profile</a>
                                <a className="dropdown-item text-dark" href="email.html"><span className="mb-0 d-inline-block me-1"><i className="ti ti-mail"/></span> Email</a>
                                <div className="dropdown-divider border-top"/>
                                <a className="dropdown-item text-dark" href="lock-screen.html"><span className="mb-0 d-inline-block me-1"><i className="ti ti-lock"/></span> Lockscreen</a>
                                <a className="dropdown-item text-dark" href="login.html"><span className="mb-0 d-inline-block me-1"><i className="ti ti-logout"/></span> Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopHeader;
