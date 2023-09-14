import React from 'react';

const ProfileHero: React.FC = () => {
    return (
        <section
            className="bg-profile d-table w-100 bg-primary"
            style={{background: "url('assets/images/account/bg.png') center center"}}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card public-profile border-0 rounded shadow" style={{zIndex: 1}}>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-3 text-md-start text-center">
                                        <img
                                            src="assets/images/client/052.jpg"
                                            className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                                            alt=""
                                        />
                                    </div>

                                    <div className="col-lg-10 col-md-9">
                                        <div className="row align-items-end">
                                            <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                                                <h3 className="title mb-0">0x0938232ee</h3>
                                                <small className="text-muted h6 me-2">0ETH</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileHero;
