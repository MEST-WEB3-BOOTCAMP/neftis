import React from "react";

const Collections: React.FC = () => {
  const categoryData = [
    {
      title: "Arts",
      imageSrc: "assets/images/icon/paint-bucket.png",
    },
    {
      title: "Musics",
      imageSrc: "assets/images/icon/wave.png",
    },
    {
      title: "Domain",
      imageSrc: "assets/images/icon/domain.png",
    },
    {
      title: "Virtual World",
      imageSrc: "assets/images/icon/chatbot.png",
    },
    {
      title: "Trading Cards",
      imageSrc: "assets/images/icon/mail.png",
    },
    {
      title: "Collectibles",
      imageSrc: "assets/images/icon/cubes.png",
    },
  ];
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
            {categoryData.map((category, index) => (
                <div key={index} className="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                  <div className="card features feature-primary explore-feature shadow rounded text-center">
                    <div className="card-body">
                      <div className="icons rounded-circle shadow-lg d-inline-block">
                        <img src={category.imageSrc} className="avatar avatar-md-sm" alt="" />
                      </div>
                      <div className="content mt-3">
                        <h6 className="mb-0">
                          <a href="#" className="title text-dark">
                            {category.title}
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
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
