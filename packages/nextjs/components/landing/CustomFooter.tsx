import React from "react";
import {useRouter} from "next/router";

const CustomFooter = () => {
    const router = useRouter();
    const isDashboardPage = router.pathname.startsWith('/dashboard');

    return (
        // <div className={isDashboardPage ? 'footer fixed-bottom' : 'footer'}>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <p>
                                        Start working with Landrick that can provide everything you need to generate
                                        awareness, drive
                                        traffic, connect.
                                    </p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item mb-0">
                                            <a
                                                href="https://www.facebook.com/#"
                                                target="_blank"
                                                className="rounded"
                                                rel="noreferrer"
                                            >
                                                <i className="uil uil-facebook-f align-middle" title="facebook"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item mb-0 p-2">
                                            <a
                                                href="https://www.instagram.com/#"
                                                target="_blank"
                                                className="rounded"
                                                rel="noreferrer"
                                            >
                                                <i className="uil uil-instagram align-middle" title="instagram"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item mb-0">
                                            <a href="https://twitter.com/shreethemes" target="_blank"
                                               className="rounded" rel="noreferrer">
                                                <i className="uil uil-twitter align-middle" title="twitter"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item mb-0 p-2">
                                            <a href="mailto:support@shreethemes.in" className="rounded">
                                                <i className="uil uil-envelope align-middle" title="email"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Services</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li>
                                            <a href="/#collections" className="text-foot">
                                                <i className="uil uil-angle-right-b me-1"/> Collections
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#marketplace" className="text-foot">
                                                <i className="uil uil-angle-right-b me-1"/> Marketplace
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#creators" className="text-foot">
                                                <i className="uil uil-angle-right-b me-1"/> Creators
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Useful Links</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li>
                                            <a href="#" className="text-foot">
                                                <i className="uil uil-angle-right-b me-1"/> Terms of Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-foot">
                                                <i className="uil uil-angle-right-b me-1"/> Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-foot">
                                                <i className="uil uil-angle-right-b me-1"/> Documentation
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="text-light footer-head">Start creating your collection with
                                        Neftis</h5>
                                    <ul className="list-unstyled footer-list mt-4 mb-2">
                                        <li className="list-inline-item mx-1">
                                            <a href="#" className="btn btn-soft-primary">
                                                Create Collection
                                            </a>
                                        </li>
                                        <li className="list-inline-item mx-1">
                                            <a href="#" className="btn btn-primary">
                                                Connect Wallet
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-30 footer-border">
                            <div className="container text-center">
                                <div className="row align-items-center">
                                    <div className="col-sm-4">
                                        <div className="text-sm-start">
                                            <a href="#" className="logo-footer">
                                                <img src="assets/images/logo-dark.png" height="24" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-4 mt-sm-0 pt-2 pt-sm-0 d-flex justify-content-start">
                                        <ul className="list-unstyled footer-list terms-service text-sm-end mb-0">
                                            <li className="list-inline-item mb-0">
                                                <a href="#" className="text-foot me-2">
                                                    Privacy
                                                </a>
                                            </li>
                                            <li className="list-inline-item mb-0">
                                                <a href="#" className="text-foot me-2">
                                                    Terms
                                                </a>
                                            </li>
                                            <li className="list-inline-item mb-0">
                                                <a href="#" className="text-foot me-2">
                                                    FAQs
                                                </a>
                                            </li>
                                            <li className="list-inline-item mb-0">
                                                <a href="#" className="text-foot">
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 mt-4 mt-sm-0 pt-2 pt-sm-0 flex justify-content-end">
                      <span className="mb-0">
                        © 2023 Neftis.
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomFooter;
