import React from 'react';

const Explore: React.FC = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    {Array.from({ length: 16 }, (_, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card nft nft-primary nft-creator border-0 rounded-md shadow">
                                <div className="card-body p-3">
                                    <div className="pb-3 border-bottom">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="badge bg-soft-primary rounded-pill">{`No. #${index + 1}`}</span>
                                            <a href="nft-explore.html" className="text-dark h5 mb-0 read-more">
                                                <i className="uil uil-arrow-circle-right"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="content mt-3">
                                        <div className="position-relative text-center">
                                            <img src={`assets/images/client/0${index + 1}.jpg`} className="avatar avatar-small rounded-pill shadow" alt="" />

                                            <div className="author mt-2">
                                                <a href="account-profile.html" className="text-dark h6 name">
                                                    {index % 2 === 0 ? 'Jordan Joo' : 'Sofia Malik'}
                                                </a>
                                                <small className="d-block fw-bold mt-1">
                                                    0.75<span className="text-muted">ETH</span>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                    Prev
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="javascript:void(0)">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)" aria-label="Next">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
