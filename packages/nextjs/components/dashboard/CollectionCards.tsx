import React from "react";

const CollectionCards: () => JSX.Element[] = () => {
    const collections = [
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
        collections.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6 mt-4 pt-2">
                <div className="card features feature-primary explore-feature shadow rounded text-center">
                    <div className="card-body">
                        <div className="icons rounded-circle shadow-lg d-inline-block">
                            <img src={category.imageSrc} className="avatar avatar-md-sm" alt=""/>
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
        ))
    );
}

export default CollectionCards;