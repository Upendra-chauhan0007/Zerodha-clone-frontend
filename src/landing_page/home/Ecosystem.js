import React from 'react';
import {Link} from 'react-router-dom';
function Ecosystem() {
    return ( 
       <div className='container-fluid px-3'style={{marginTop:"150px"}}>
        <div className='row justify-content-evenly'>
            <div className='col-md-5'>
            <h2 className='fs-4'style={{color: "#424242"}}>Trust with confidence</h2>
                <h2 className='fs-5 pt-4'style={{color: "#424242" }}>Customer-first always</h2>
                <p className='fs-6 lh-lg'style={{color: "#666" }}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br/>lakh crores of equity investments, making us India&#8216;s<br/> largest broker; contributing to 15% of daily retail<br/> exchange volumes in India.</p>

                <h2 className='fs-5 pt-4'style={{color: "#424242" }}>No spam or gimmicks</h2>
                <p className='fs-6 lh-lg'style={{color: "#666" }}>No gimmicks, spam, "gamification", or annoying push<br/> notifications. High quality apps that you use at your<br/> pace, the way you like. <a href="#!" className='text-decoration-none'>Our philosophies.</a></p>
                
                <h2 className='fs-5 pt-4'style={{color: "#424242" }}>The Zerodha universe</h2>
                <p className='fs-6 lh-lg'style={{color: "#666" }}>Not just an app, but a whole ecosystem. Our investments<br/> in 30+ fintech startups offer you tailored services<br/> specific to your needs.</p>

                <h2 className='fs-5 pt-4'style={{color: "#424242" }}>Do better with money</h2>
                <p className='fs-6 lh-lg'style={{color: "#666" }}>With initiatives like <a href='#!'className='text-decoration-none'>Nudge</a> and <a href='#!' className='text-decoration-none'>Kill Switch</a>, we don't just<br/> facilitate transactions, but actively help you do better<br/> with your money.</p>
            </div>
            <div className='col-md-5'>
                <div className='pt-5'>
                    <img src="media/image/ecosystem.png" className='img-fluid' alt='ecosystem'/>
                    
                </div>
                 <p className=' d-flex justify-content-center align-item-center pt-4 anchor-tag' style={{color:"#424242",fontSize:"1.25rem",lineHeight:"1.8"}}>
                    <a className='text-decoration-none me-4 pe-4' href="#!"> Explore Our Product <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a className='text-decoration-none demo-link' href="#!"> Try kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </p> 
            </div>
        </div>
        <div className='row'>
            <div className='col-12 text-center pt-5'>
               <Link to={'/products'} >
                 <img src="media/image/pressLogos.png" className='img-fluid' alt='presslog0'/>
               </Link>
            </div>
        </div>
       </div>
    );
}

export default Ecosystem;