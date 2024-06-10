import React from "react";
import "./Store.scss";

import { BsAmazon } from "react-icons/bs";
import Amazon from  "../../asset/img/amazon.webp"
export const Store = () => {
    return (
        <div id="Store" className="pt-5">
            <div className="container my-5">
                <div className="row">
                    <h1 className="mb-5">My Store</h1>

                    <div className="col-md-6 mb-5">
                        <h3>Store Name</h3>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquid architecto
                            aspernatur assumenda commodi consequuntur dolor earum incidunt molestiae, nam nulla quidem
                            quisquam, quod reiciendis repudiandae unde ut voluptate.</h5>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquid architecto
                            aspernatur assumenda commodi consequuntur dolor earum incidunt molestiae, nam nulla quidem
                            quisquam, quod reiciendis repudiandae unde ut voluptate.</h5>
                    </div>
                    <div className="col-md-6 bg-light mb-5 store-image">
                        <img className="store-image img-fluid" src={Amazon}/>
                    </div>
                    <div className="col-md-12 text-center">
                        <a className="btn p-3" href="https://ransomsolution.com/"><BsAmazon/> Visit My Store</a>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Store;

