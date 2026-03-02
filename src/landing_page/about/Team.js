import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Team() {
  useGSAP(()=>{
    gsap.from(".my-element",{ 
    duration: 2,
    x: -200,
    rotation: 360,
    repeat:2,
    
  })

  gsap.from('.My-name',{
    x:-50,
    delay:0.5,
    opacity:0.5,
    duration:0.5
  })
  gsap.from('.my-profession',{
    x:50,
    delay:0.5,
    opacity:0.5,
    duration:0.5
  })
})
  return (
    <div className="container-fluid">
      <div className="row">
       <div className="col-12 text-center">
         <h2 className="fs-3 mt-5 text-decoration-underline my-element"style={{ color: "#424242" }}>
          People
        </h2>
       </div>
      </div>
      <div className="row justify-content-evenly mb-5">
        <div className="col-md-5 mt-5 text-center">
          <img src="media/image/my-image.png" className="img-fluid" alt="myprofile" />
          <h2 className="pt-3 My-name">Upendra Chauhan</h2>
          <p className="fs-5 my-profession">Frontend,Developer</p>
        </div>
        <div className="col-md-5 mt-5">
          <p className="lh-medium text-muted font-Poppines" style={{fontSize:"18px"}}>
            This project is a frontend clone developed by Upendra Chauhan to recreate the user interface of a modern financial platform. The aim was to gain hands-on experience in real-world web design and understand how professional websites are structured and styled.
          </p>

          <p className="lh-medium text-muted" style={{fontSize:"18px"}}>
           The clone was built using HTML, CSS, Bootstrap, and React, focusing on responsive layout, reusable components, and proper alignment using grid systems. Key sections such as the navigation bar, landing page, and content areas were designed to closely match the original interface.
          </p>

          <p className="lh-medium text-muted" style={{fontSize:"18px"}}>
           <u className="fw-bold text-black">Learning:</u> Through this project, I learned component-based development, responsive design techniques, layout structuring, and how to convert real-world UI designs into functional code. It also improved my understanding of clean coding practices and practical frontend workflow used in industry.
          </p>

          <p className="lh-medium text-muted" style={{fontSize:"18px"}}>
            Connect on <Link to={"/"} style={{textDecoration:"none"}}>HomePage</Link> / <a href="s" style={{textDecoration:"none"}}>TradingQnA</a> / <Link to={"https://x.com/Upendra60991424"} target="_block" style={{textDecoration:"none"}}>Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
