import React from "react";

const Creators = () => {
  const creatorsData = [
    {
      rank: "No. #1",
      name: "Jordan Joo",
      eth: "0.75",
      imageSrc: "assets/images/client/01.jpg",
    },
    {
      rank: "No. #2",
      name: "Sofia Malik",
      eth: "0.75",
      imageSrc: "assets/images/client/02.jpg",
    },
    {
      rank: "No. #3",
      name: "Cristina Murphy",
      eth: "0.75",
      imageSrc: "assets/images/client/03.jpg",
    },
    {
      rank: "No. #4",
      name: "Jack Lili",
      eth: "0.75",
      imageSrc: "assets/images/client/04.jpg",
    },
    {
      rank: "No. #5",
      name: "Lilia Moris",
      eth: "0.75",
      imageSrc: "assets/images/client/05.jpg",
    },
    {
      rank: "No. #6",
      name: "Anderson",
      eth: "0.75",
      imageSrc: "assets/images/client/06.jpg",
    },
    {
      rank: "No. #7",
      name: "Joe Moris",
      eth: "0.75",
      imageSrc: "assets/images/client/07.jpg",
    },
    {
      rank: "No. #8",
      name: "John Carter",
      eth: "0.75",
      imageSrc: "assets/images/client/08.jpg",
    },
  ];

  return (
    <div className="container mt-100">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title mb-4 pb-2 text-center">
            <h4 className="title mb-4">Best Creators</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        {creatorsData.map((creator, index) => (
          <div key={index} className="col-lg-2 col-md-4 col-6 mt-4 pt-2">
            <div className="tiny-slide">
              <div className="card nft nft-primary nft-creator border-0 rounded-md shadow m-2">
                <div className="card-body p-3">
                  <div className="pb-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-soft-primary rounded-pill">{creator.rank}</span>
                      <a href="nft-explore.html" className="text-dark h5 mb-0 read-more">
                        <i className="uil uil-arrow-circle-right" />
                      </a>
                    </div>
                  </div>

                  <div className="content mt-3">
                    <div className="position-relative text-center">
                      <img src={creator.imageSrc} className="avatar avatar-small rounded-pill shadow" alt="" />
                      <div className="author mt-2">
                        <a href="account-profile.html" className="text-dark h6 name">
                          {creator.name}
                        </a>
                        <small className="d-block fw-bold mt-1">
                          {creator.eth}
                          <span className="text-muted">ETH</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creators;
