import React from "react";
import {Link} from "react-router-dom";
import { FcList } from "react-icons/fc";

import Logo from "../../asset/img/logo.jpg";
import "./Header.scss";
import {HashLink} from "react-router-hash-link";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className="header-wrapper  top-sticky shadow-sm sticky-top">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-xxl d-flex justify-content-between align-items-center">
                        {/* logo */}
                        <HashLink to="/#Profile">
                            <img src={Logo} className="newlogo navbar-brand" alt="Logo"/>
                            {/*<h3>Steven B Ransom</h3>*/}
                        </HashLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"><FcList /></span>
                        </button>
                        {/* navigations */}
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div
                                className="navbar-nav ms-auto gap-0 gap-lg-3 ps-sm-3 d-flex align-items-center align-items-sm-start align-items-lg-center">

                                <HashLink to="/#Profile" className="text-gold">
                                    Profile
                                </HashLink>
                                <HashLink to="/#Music" className="text-gold">
                                    My Music
                                </HashLink>
                                <HashLink to="/#Business" className="text-gold">
                                    My Business
                                </HashLink>
                                <HashLink to="/#Gallery" className="text-gold">
                                    My Gallery
                                </HashLink>
                                <HashLink to="/#Store" className="text-gold">
                                    Amazon store
                                </HashLink>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;