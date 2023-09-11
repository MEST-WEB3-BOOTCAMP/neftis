import React from "react";

const Collection: React.FC = () => {
  return (
    <section className="section" style={{ background: "url('assets/images/nft/bg.jpg') top center" }}>
      <div className="bg-overlay bg-linear-gradient-2" />
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-6 col-12">
            <div className="section-title">
              <h4 className="title text-white title-dark mb-4">Start your own collection today</h4>
              <p className="text-white-50 para-desc mb-0">
                Start working with Landrick that can provide everything you need to generate awareness, drive traffic,
                connect.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="text-md-end">
              <a href="#" className="btn btn-primary d-flex align-items-center">
                <i className="uil uil-bookmark" />
                Create your collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
