import React from "react";
import "./Profile.scss";
import {ImLinkedin} from "react-icons/im";
import {FaGlobe} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

export const Profile = () => {
    return (
        <div id="Profile" className="pb-5">
            <div className="container">
                <div className="row back-fix">
                    <div className="profile-txt col-md-7 px-5">
                        <h3 className="intro p-3 text-center">
                            Allow me to introduce Steven Barry Ransom, born on December 24, 1977.

                            <br></br>He is a multi-talented
                            individual, with expertise in the fields of authorship, music recording, composition,
                            musicianship, and investment.

                            <br></br><br></br> His guiding principle is "Live Your Best Life," and objective
                            is to educate, elevate, and excel.
                        </h3>
                    </div>
                    <div className="col-md-5"></div>

                    <div className="col text-center my-3">
                        <h1><a className="profile-link" href="https://www.linkedin.com/in/ransomsteven/"><ImLinkedin/> </a></h1>
                    </div>
                    <div className="col text-center my-3">
                        <h1><a className="profile-link" href="https://www.linkedin.com/in/ransomsteven/"><FaFacebookSquare/> </a></h1>
                    </div>
                    <div className="col text-center my-3">
                        <h1><a className="profile-link" href="#"><MdEmail/> </a></h1>
                    </div>
                    <div className="col text-center my-3">
                        <h1><a className="profile-link" href="https://ransomsolution.com/"><FaGlobe/> </a></h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;
