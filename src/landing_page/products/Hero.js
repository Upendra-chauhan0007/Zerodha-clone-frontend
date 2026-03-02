import React from "react";

function Hero() {
    return (
        <div className="container-fluid pb-5 border-bottom">
            <div className="row text-center mt-5 mb-5 ">
                <div className="col-12">
                    <h3 className="mt-5 text-muted">Zerodha Products</h3>
                    <p className="fs-5 pt-3 text-muted">Sleek, modern, and intuitive trading platforms</p>
                    <p className="investment text-muted font-Questrial">Check out our <a href="d" style={{textDecoration:"none",fontSize:"1rem"}}>investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
