import React from 'react';
import {BlockieAvatar} from "~~/components/scaffold-eth";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <Link
            href={href}
            passHref
            className={`${
                isActive ? "bg-secondary shadow-md" : ""
            } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
        >
            {children}
        </Link>
    );
};

const ProfileIcon = ({account, chain, openChainModal, openAccountModal}) => {
    return (
        <div className="border-2">
            <ul className="list-unstyled mb-0">
                <li className="list-inline-item mb-0 ms-1">
                    <div className="dropdown dropdown-primary">
                        <button className="position-absolute top-50 translate-middle-x p-2 bg-success border border-light rounded-circle"/>
                        <button type="button" className="btn btn-soft-primary dropdown-toggle p-2"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <div className="flex-1 ms-2">
                                {/*<BlockieAvatar/>*/}
                                <span className="d-block">
                                    {account.displayName}
                                </span>
                            </div>
                        </button>
                        <div className="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3" style={{
                            minWidth: '200px',
                            position: 'absolute',
                            inset: '0px 0px auto auto',
                            margin: '0px',
                            transform: 'translate3d(0px, 40px, 0px)'
                        }} data-popper-placement="bottom-end">
                            <button className="dropdown-item d-flex align-items-center text-dark pb-3">
                                <span className="avatar avatar-md-sm rounded-circle border shadow d-flex align-items-center justify-content-center">
                                    <i className="uil uil-wallet"/>
                                </span>

                                <div className="flex-1 ms-2">
                                    <span className="d-block text-primary">{account.displayName}</span>
                                    <small className="text-muted">{account.displayBalance}</small>
                                </div>
                            </button>
                            <Link className="dropdown-item text-dark" href="dashboard">
                                <span className="mb-0 d-inline-block me-1">
                                    <i className="ti ti-settings"/></span> Profile
                            </Link>
                            <a onClick={openChainModal} className="dropdown-item text-dark" href="/dashboard">
                                <span className="mb-0 d-inline-block me-1"><i
                                    className="ti ti-settings"/></span> Switch Networks
                            </a>
                            <div className="dropdown-divider border-top"/>
                            <button onClick={openAccountModal} className="dropdown-item text-dark">
                                <span className="mb-0 d-inline-block me-1">
                                    <i className="ti ti-logout"/>
                                </span>
                                Disconnect
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProfileIcon;
