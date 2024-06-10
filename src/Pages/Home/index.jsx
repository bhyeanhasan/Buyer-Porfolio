import React from "react";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import Profile from "../../component/Profile/Profile"
import Music from "../../component/Music/Music"
import Business from "../../component/Business/Business";
import Gallery from "../../component/Gallery/Gallery";
import Store from "../../component/Store/Store"


const index = () => {
    return (
        <>
            <Header/>
            <Profile/>
            <Music/>
            <Business/>
            <Gallery/>
            <Store/>
            <Footer/>
        </>
    );
};

export default index;
