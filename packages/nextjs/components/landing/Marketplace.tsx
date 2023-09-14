import React from "react";
import contract from "~~/utils/neftis/contract";

const Marketplace = () => {
        const productData = [
            {
                id: 5,
                imgSrc: "assets/images/nft/1.jpg",
                clientImgSrc: "assets/images/client/01.jpg",
                title: "#01 nft title",
                stock: "12 in stock",
                price: "2.333ETH",
                likes: 231,
            },
            {
                id: 4,
                imgSrc: "assets/images/nft/2.jpg",
                clientImgSrc: "assets/images/client/02.jpg",
                title: "#02 nft title",
                stock: "12 in stock",
                price: "2.333ETH",
                likes: 232,
            },
            {
                id: 3,
                imgSrc: "assets/images/nft/3.jpg",
                clientImgSrc: "assets/images/client/03.jpg",
                title: "#03 nft title",
                stock: "12 in stock",
                price: "2.333ETH",
                likes: 233,
            },
            {
                id: 1,
                imgSrc: "assets/images/nft/4.jpg",
                clientImgSrc: "assets/images/client/04.jpg",
                title: "#04 nft title",
                stock: "12 in stock",
                price: "2.333ETH",
                likes: 234,
            },
            {
                id: 10,
                imgSrc: "assets/images/nft/5.jpg",
                clientImgSrc: "assets/images/client/05.jpg",
                title: "#05 nft title",
                stock: "12 in stock",
                price: "2.333ETH",
                likes: 235,
            },
            {
                id: 12,
                imgSrc: "assets/images/nft/6.jpg",
                clientImgSrc: "assets/images/client/06.jpg",
                title: "#06 nft title",
                stock: "12 in stock",
                price: "2.333ETH",
                likes: 236,
            },
            {
                id: 23,
                imgSrc: "assets/images/nft/7.jpg",
                clientImgSrc: "assets/images/client/07.jpg",
                title: "#07 nft title",
                stock: "12 in stock",
                price: "2.333ETH",
                likes: 237,
            },
            {
                id: 2,
                imgSrc: "assets/images/nft/8.jpg",
                clientImgSrc: "assets/images/client/08.jpg",
                title: "#08 nft title",
                stock: "12 in stock",
                price: "2.333ETH",
                likes: 238,
            },
        ];

        const handleBuyAsset = async (assetNumber: number) => {
            console.log("Buying asset number : ", assetNumber)
            try {
                const result = await contract.balanceOf();
                console.log('Contract Function Result:', result);
            } catch (error) {
                console.error('Error calling contract function:', error);
            }
        }

        return (
            <div className="container mt-100">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-4">Explore Hot Products</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">
                                Start working with <span className="text-primary fw-bold">Neftis</span> that can provide
                                everything you
                                need to make the best of your nfts.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {productData.map((product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card nft nft-item nft-primary rounded shadow overflow-hidden">
                                <div className="nft-image position-relative overflow-hidden">
                                    <img src={product.imgSrc} className="img-fluid item-img" alt=""/>
                                    <div className="overlay"/>
                                    <div className="bid-btn p-3 text-center">
                                        <button type="button" onClick={(event) => handleBuyAsset(product.id)}
                                                className="btn btn-pills">
                                            <i className="mdi mdi-gavel fs-6 me-2"/> Buy
                                        </button>
                                    </div>
                                    <div className="position-absolute top-0 start-0 m-2">
                                        <a href="#">
                                            <img src={product.clientImgSrc}
                                                 className="avatar avatar-sm-sm rounded-pill shadow-md" alt=""/>
                                        </a>
                                    </div>
                                    <div className="position-absolute top-0 end-0 m-2">
                                        <a href="#" className="badge rounded-md bg-light shadow">
                                            <i className="mdi mdi-heart align-middle text-danger"/>{" "}
                                            <span className="text-dark">{product.likes}</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="card-body p-3">
                                    <a href="nft-item-detail.html" className="h5 title text-dark">
                                        {product.title}
                                    </a>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="text-muted">{product.stock}</span>
                                        <span className="text-dark">
                    Price: <span className="link">{product.price}</span>
                  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
;

export default Marketplace;
