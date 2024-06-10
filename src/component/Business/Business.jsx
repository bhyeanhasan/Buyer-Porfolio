import React from "react";
import "./Business.scss";

export const Business = () => {
    return (
        <div id="Business" className="pt-5">
            <div className="container mt-5">
                <div className="row">
                    <h1 className="mb-5 text-center">My Business</h1>

                    <div className="col-md-7">
                        <h1 className="mb-4">Ransom Solution</h1>
                        <h5 className="">Ransom Solution specializes in AutoCAD drafting and design, offering services in
                            architecture, engineering, construction documentation, and project management. Led by Steven
                            Ransom, who has over 18 years of experience, the firm provides design and drafting services
                            for residential, commercial, and industrial projects. Their services include converting
                            paper drawings to CAD files and creating accurate as-built CAD drawings. They emphasize
                            cost-effectiveness, quality, and long-term client relationships.

                            For more details, visit Ransom Solution.</h5>
                    </div>

                    <div className="col-md-5 mt-5">
                        <img className="img-fluid"
                            src="https://i.vimeocdn.com/video/1804687923-47aab190d662408946af5f2594a842bdfc92126208b4017d9c1a8d277e303735-d"
                            alt="https://i.vimeocdn.com/video/1804687923-47aab190d662408946af5f2594a842bdfc92126208b4017d9c1a8d277e303735-d"
                            data-ux="Image" data-aid="HEADER_VIDEO_EMBED_INSET_POSTER"
                        />
                    </div>

                    <div className="col-md-12 text-center mt-3">
                        <a className="btn p-3" href="https://ransomsolution.com/">Visit Ransom Solution</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Business;