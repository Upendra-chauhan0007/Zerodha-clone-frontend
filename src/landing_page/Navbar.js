import React from "react";
import {Link} from "react-router-dom";
import gsap from 'gsap';
import{useGSAP} from'@gsap/react';
function Navbar() {

  // Gsap animation 
  useGSAP(()=>{
    gsap.from('.navbar-brand>*',{
      x:-100,
      opacity:0,
      delay:0.5,
      scale:0.1,
      duration:0.5
    })
    gsap.from('.nav-link',{
      y:-90,
       opacity:0,
      duration:0.8,
      stagger:0.2,
    })
  })
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 border-bottom sticky-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="media/image/logo.png"
            alt="nav-logo"
            style={{width: "129.41px", height: "17px"}}
          />
        </Link>
        <button
          className="navbar-toggler shadow-none border-0 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link mx-2  text-dark link-primary hover-underline font-Questrial fw-medium" to={"/"}>
              Home
            </Link>
            <Link className="nav-link mx-2 text-dark link-primary hover-underline font-Questrial fw-medium" to={"/signup"}>
              Signup
            </Link>
            <Link className="nav-link mx-2 text-dark link-primary hover-underline font-Questrial fw-medium" to={"/about"}>
              About
            </Link>
            <Link className="nav-link mx-2 text-dark link-primary hover-underline font-Questrial fw-medium" to={"/products"}>
              Products
            </Link>
            <Link className="nav-link mx-2 text-dark link-primary hover-underline font-Questrial fw-medium" to={"/pricing"}>
              Pricing
            </Link>
            <Link className="nav-link mx-2 text-dark link-primary hover-underline font-Questrial fw-medium" to={"/support"}>
              Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
