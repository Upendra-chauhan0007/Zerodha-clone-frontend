import React from "react";

function RightSectionB() {
    return (
       <div className="container-fluid">
           <div className="row justify-content-evenly">
            <div className="col-md-5 pt-5">
                 <h4 className="text-muted pt-5">Console</h4>
            <p className="pt-4 text-muted" style={{lineHeight:"1.6",fontSize:"1rem"}}>The central dashboard for your Zerodha<br/> account. Gain insights into your trades and<br/> investments with in-depth reports and<br/> visualisations.</p>
            <a className="text-decoration-none me-4 pe-5 fw-medium" href="#!">Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" style={{height:"611.8px",width:"625.31px"}} src="media/image/products-console.png"alt="Console-image"/>
            </div>
           </div>
       </div>
    );
}

export default RightSectionB;
