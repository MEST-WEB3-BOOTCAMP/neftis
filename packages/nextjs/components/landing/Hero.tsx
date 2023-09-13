import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section className="bg-home d-flex align-items-center background-effect bg-soft-primary" id="home">
      <div className="container z-index-1">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="title-heading">
              <h4 className="display-4 fw-bold text-dark mb-4">
                Discover, <br /> find and sell <br /> monster NFTs
              </h4>
              <p className="para-desc mx-auto text-muted mb-0">
                Launch your campaign and benefit from our expertise on designing and managing conversion centered
                bootstrap v5 html page.
              </p>
              <div className="mt-4">
                <a href="#" className="btn btn-primary">
                  <i className="uil uil-bitcoin"/> Connect Wallet
                </a>
                <a href="#" className="btn btn-soft-primary ms-1">
                  <i className="uil uil-file-bookmark-alt"/> Shop
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <img src="assets/images/nft/home.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <ul className="circles p-0 mb-0">
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
      </ul>
    </section>
  );
};

export default HomeSection;
