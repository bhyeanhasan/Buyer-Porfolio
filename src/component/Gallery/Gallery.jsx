import React from "react";
import "./Gallery.scss";
import {ExtraCurricularActivities, SliderImage} from "../../utils/Data";

import imgSlider from "../../asset/img/1.jpg"

export const Gallery = () => {
    return (
        <div id="Gallery" className="pt-5">
            <div className="container ">
                <div className="row">
                    <h1 className="my-5">My Gallery</h1>

                    <div className="col-md-12">

                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner text-center">

                                <div className="carousel-item active" data-bs-interval="3000">
                                    <img src={imgSlider} className="customslider" alt="..."/>
                                </div>


                                {SliderImage?.map(({image, designation, institution}, index) => {
                                    return (
                                        <div className="carousel-item  text-center" data-bs-interval="3000">
                                            <img src={image} className="customslider" alt="..."/>
                                        </div>
                                    );
                                })}
                            </div>

                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default Gallery;

