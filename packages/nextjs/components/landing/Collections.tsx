import React from "react";
import CollectionCards from "~~/components/dashboard/CollectionCards";

const Collections: React.FC = () => {
  return (
      <>
        <div className="container mt-100">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-4">Browse by Categories</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <CollectionCards/>
          </div>
        </div>

        <section className="section" style={{ background: "url('assets/images/nft/bg1.jpg') top center" }}>
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
                  <a href="#" className="btn btn-primary">
                    <i className="uil uil-bookmark" />
                    Create your collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Collections;
