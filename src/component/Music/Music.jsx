import React, {useState} from "react";
import "./Music.scss";
import Marquee from "react-fast-marquee";
import {ExtraCurricularActivities, ExtraCurricularActivities2} from "../../utils/Data";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import {FaArrowAltCircleRight} from "react-icons/fa";
import { TbSquareChevronsLeftFilled } from "react-icons/tb";

export const Music = () => {
    const [direction, setDirection] = useState('left');
    const [direction2, setDirection2] = useState('left');

    return (
        <div id="Music" className="pt-5">
            <div className="container ">

                <div className="row">
                    <h1 className="my-5 text-center">My Music</h1>
                </div>

                <div className="row">

                    <h3 className="mb-2">ABSOLooT</h3>

                    <div className="col-md-12">
                        <Marquee speed={75} gradient={false} direction={direction}>
                            {ExtraCurricularActivities?.map(({image, designation, institution}, index) => {
                                return (
                                    <div>
                                        <div className="music-box  mx-4" key={index}>
                                            <iframe className="project-panel" width="400" height="200"
                                                    src={image}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen>

                                            </iframe>
                                        </div>
                                    </div>


                                );
                            })}
                        </Marquee>
                    </div>


                    <div className="col my-3 text-center">
                        <button className="btn btn-large me-5" onClick={() => setDirection('left')}>
                            <FaArrowAltCircleLeft/></button>

                        <button className="btn btn-large ms-5" onClick={() => setDirection('right')}>
                            <FaArrowAltCircleRight/></button>
                    </div>


                </div>


                <div className="row">

                    <h3 className="my-2">Next2U Music</h3>

                    <div className="col-md-12">
                        <Marquee speed={75} gradient={false} direction={direction2}>
                            {ExtraCurricularActivities2?.map(({image, designation, institution}, index) => {
                                return (
                                    <div>
                                        <div className="music-box  mx-4" key={index}>
                                            <iframe className="project-panel" width="400" height="200"
                                                    src={image}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen>

                                            </iframe>
                                        </div>
                                    </div>


                                );
                            })}
                        </Marquee>


                    </div>
                    <div className="col my-3 text-center">
                        <button className="btn btn-large me-5" onClick={() => setDirection2('left')}>
                            <FaArrowAltCircleLeft/></button>
                        <button className="btn btn-large ms-5" onClick={() => setDirection2('right')}>
                            <FaArrowAltCircleRight/></button>
                    </div>

                </div>

            </div>
        </div>)
}
export default Music;