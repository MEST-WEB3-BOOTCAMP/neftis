import React from 'react';
import Image from 'next/image';

const NftiCards = ({ nftis }) => {
    return (
        <div className="row">
            {nftis.map((nfti, index) => (
                <div key={index} className="col-md-6 mt-4 pt-2">
                    <div className="card blog blog-primary rounded border-0 shadow">
                        <div className="position-relative">
                            <Image
                                src={nfti.image}
                                alt="..."
                                width={300}
                                height={300 + index + 50}
                                className="card-img-top rounded-top"
                            />
                            <div className="overlay rounded-top" />
                        </div>
                        <div className="card-body content">
                            <h5>
                                <a href={nfti.link} className="card-title title text-dark">
                                    {nfti.title}
                                </a>
                            </h5>
                            <div className="post-meta d-flex justify-content-between mt-3 d-flex align-items-center">
                                <ul className="list-unstyled mb-0">
                                    <li className="list-inline-item me-2 mb-0">
                                        <a href="#" className="text-muted like">
                                            <i className="uil uil-heart me-1" />
                                            {nfti.likes}
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-muted comments">
                                            <i className="uil uil-comment me-1" />
                                            {nfti.comments}
                                        </a>
                                    </li>
                                </ul>
                                <button className="btn btn-sm btn-primary">
                                    Details <i className="uil uil-angle-right-b align-middle" />
                                </button>
                            </div>
                        </div>
                        <div className="author">
                            <small className="date">
                                <i className="uil uil-edit" /> {nfti.description}
                            </small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NftiCards;
