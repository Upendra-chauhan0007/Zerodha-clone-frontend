import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Hero() {
  useGSAP(()=>{
    gsap.from('.Heading',{
      ease:"elastic",
      delay:0.5,
      duration:0.8,
      y:30,
    })
  })

  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-12">
            <h4 className=" text-center mb-5 Heading" style={{ color: "#424242" }}>
             We pioneered the discount broking model in India.
             <br /> Now, we are breaking ground with our technology.
            </h4>
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-md-5">
          <p className="lh-medium text-muted" style={{fontSize:"18px"}}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="pt-2 lh-medium text-muted" style={{fontSize:"18px"}}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="lh-medium text-muted" style={{fontSize:"18px"}}>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-md-5">
          <p className="lh-medium text-muted" style={{fontSize:"18px"}}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="lh-medium text-muted" style={{fontSize:"18px"}}>
            {" "}
           <a href="#!"> Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.{" "}
          </p>

          <p className="lh-medium text-muted" style={{fontSize:"18px"}}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="#!">blog</a> or see what the media is <a href="H">saying about
            us </a>or learn more about our business and product <a href="#!">philosophies.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

