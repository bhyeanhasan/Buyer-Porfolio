import React from "react";
import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import {Link} from "react-router-dom";
import Logo from "../../asset/img/logo.jpg";
import "./Footer.scss";
import {HashLink} from "react-router-hash-link";
import {FcRight} from "react-icons/fc";

const Footer = () => {
    return (
        <>
            <footer className="main-footer py-5">
                <div className="container-xxl">
                  <div className="row px-md-5">

                    <div className="my-5 line"/>
                    <div className="col-6 col-md-4 mt-5 mt-md-0">
                      <div>
                        <h5 className="mb-4">Portfolio</h5>

                        <Link  to="/">
                          <img className="logo-footer text-center" src={Logo} />
                        </Link>

                      </div>
                    </div>
                    <div className="d-none d-md-block col-md-1">
                      <div className="line2"></div>
                    </div>
                    <div className="col-6 col-md-3 mt-5 mt-md-0">
                      <div>
                        <h5 className="mb-4">About Me</h5>



                        <HashLink className="text-black" to="/#Profile">
                          <h6> Profile</h6>
                        </HashLink>
                        <HashLink className="text-black" to="/#Music">
                          <h6> My Music</h6>
                        </HashLink>
                        <HashLink className="text-black" to="/#Gallery">
                          <h6> My Gallery</h6>
                        </HashLink>


                      </div>
                    </div>
                    <div className="col-6 col-md-2 mt-5 mt-md-0">
                      {/*<div>*/}
                      {/*  <h5 className="mb-4">Importance links</h5>*/}
                      {/*  /!* <Link to="/">*/}
                      {/*    <h6>Home</h6>*/}
                      {/*  </Link> *!/*/}
                      {/*  <Link to="/products">*/}
                      {/*    <h6>Products</h6>*/}
                      {/*  </Link>*/}
                      {/*  <Link to="/contact">*/}
                      {/*    <h6>Contact</h6>*/}
                      {/*  </Link>*/}
                      {/*  <Link to="/blog">*/}
                      {/*    <h6>Blog</h6>*/}
                      {/*  </Link>*/}
                      {/*  /!* <Link to="/about">*/}
                      {/*    <h6>About Us</h6>*/}
                      {/*  </Link> *!/*/}
                      {/*  <Link to="/investor-relation">*/}
                      {/*    <h6>Investor Relation</h6>*/}
                      {/*  </Link>*/}
                      {/*</div>*/}
                    </div>

                    <div className="col-6 col-md-2 mt-5 mt-md-0">
                      <div>
                        <h5 className="mb-4">Contact</h5>
                        <HashLink to="/#Business">
                          <h6>My Business</h6>
                        </HashLink>
                        <HashLink to="/#Store">
                          <h6>My Store</h6>
                        </HashLink>


                      </div>
                    </div>
                  </div>
                </div>
              <div className="mt-5 line"/>
            </footer>
        </>
    );
};

export default Footer;
