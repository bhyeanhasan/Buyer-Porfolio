import React from "react";
import "./Music.scss";
import Marquee from "react-fast-marquee";
import {ExtraCurricularActivities,ExtraCurricularActivities2} from "../../utils/Data";

export const Music = () => {
    return (
        <div id="Music" className="pt-5">
            <div className="container ">
                <div className="row">
                    <h1 className="my-5 text-center">My Music</h1>

                    <div className="col-md-12">

                        <div className="row">

                            <h3 className="mb-3">ABSOLooT</h3>

                            <Marquee speed={75} gradient={false}>
                                {ExtraCurricularActivities?.map(({image, designation, institution}, index) => {
                                    return (
                                        <div>
                                            <div className="music-box  mx-4" key={index}>
                                                <iframe className="project-panel" width="400" height="250"
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
                        <div className="row">

                            <h3 className="my-3">Next2U Music</h3>

                            <Marquee speed={75} gradient={false}>
                                {ExtraCurricularActivities2?.map(({image, designation, institution}, index) => {
                                    return (
                                        <div>
                                            <div className="music-box  mx-4" key={index}>
                                                <iframe className="project-panel" width="400" height="250"
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

                    </div>


                </div>


            </div>
        </div>
    )
}
export default Music;