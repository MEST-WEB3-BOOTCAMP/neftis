import React, {useState} from 'react';
import NftiCards from "~~/components/dashboard/NftiCards";
import CollectionCards from "~~/components/dashboard/CollectionCards";
import CreateAsset from "~~/components/dashboard/CreateAsset";
import CreateCollection from "~~/components/dashboard/CreateCollection";

const ProfileSection: React.FC = () => {
    const assets = [{
        image: 'https://picsum.photos/200/200',
        title: 'Design your apps in your own way',
        likes: 33,
        comments: 8,
        description: 'What a beautiful Nefti. Design it your own way'
    }, {
        image: 'https://picsum.photos/200/200',
        title: 'How apps are changing the IT world',
        likes: 83,
        comments: 75,
        description: 'What a beautiful Nefti. Design it your own way'
    }];

    const [subMenu, setSubMenu] = useState('assets');
    const handleSubMenuClicked = (pageName: string) => setSubMenu(pageName);

    return (
        <section className="section mt-60">
            <div className="container mt-lg-3">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
                        <div className="sidebar sticky-bar p-4 rounded shadow">
                            <div className="widget pb-4 border-bottom">
                                <h5 className="widget-title">Community</h5>
                                <div className="row mt-4">
                                    <div className="col-6 text-center">
                                        <i data-feather="user-plus" className="fea icon-ex-md text-primary mb-1"/>
                                        <h5 className="mb-0">2588</h5>
                                        <p className="text-muted mb-0">Followers</p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <i data-feather="users" className="fea icon-ex-md text-primary mb-1"/>
                                        <h5 className="mb-0">454</h5>
                                        <p className="text-muted mb-0">Following</p>
                                    </div>
                                </div>
                            </div>

                            <div className="widget mt-4">
                                <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                                    <li className="navbar-item account-menu px-0">
                                        <a onClick={e => {
                                            e.preventDefault()
                                            handleSubMenuClicked('assets')
                                        }} href="#"
                                           className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span className="h4 mb-0"><i className="uil uil-transaction"/></span>
                                            <h6 className="mb-0 ms-2">Assets</h6>
                                        </a>
                                    </li>

                                    <li className="navbar-item account-menu px-0 mt-2">
                                        <a onClick={e => {
                                            e.preventDefault()
                                            handleSubMenuClicked('collections')
                                        }} href="#"
                                           className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span className="h4 mb-0"><i className="uil uil-users-alt"/></span>
                                            <h6 className="mb-0 ms-2">Collections</h6>
                                        </a>
                                    </li>

                                    {/*<li className="navbar-item account-menu px-0 mt-2">*/}
                                    {/*    <a onClick={e => {*/}
                                    {/*        e.preventDefault()*/}
                                    {/*        handleSubMenuClicked('settings')*/}
                                    {/*    }} href="#"*/}
                                    {/*       className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">*/}
                                    {/*        <span className="h4 mb-0"><i className="uil uil-setting"/></span>*/}
                                    {/*        <h6 className="mb-0 ms-2">Settings</h6>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-8 col-12">
                        <div className="border-bottom pb-2 d-flex justify-content-between align-items-center">
                            <h5 className="text-capitalize">{subMenu}</h5>

                            {subMenu === 'assets' && (<button
                                onClick={() => handleSubMenuClicked('asset')}
                                className="btn btn-outline-primary text-capitalize">
                                add asset
                            </button>)}

                            {subMenu === 'collections' && (<button
                                onClick={() => handleSubMenuClicked('collection')}
                                className="btn btn-outline-primary text-capitalize">
                                add collection
                            </button>)}
                        </div>


                        <div className="row">
                            {subMenu === 'assets' && (<div className="">
                                <NftiCards nftis={assets}/>
                                <div className="col-12 mt-4 pt-2">
                                    <button type="button" className="btn btn-primary">Explore
                                        <i className="uil uil-angle-right-b align-middle"/>
                                    </button>
                                </div>
                            </div>)}

                            {subMenu === 'asset' && (<div className="">
                                <CreateAsset/>
                            </div>)}

                            {subMenu === 'collections' && (<CollectionCards/>)}
                            {subMenu === 'collection' && (<CreateCollection/>)}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
