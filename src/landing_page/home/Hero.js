import React from 'react';
// अपनी इमेज को इम्पोर्ट करें

const Hero = () => {
  return (
    <div className="container-fluid mt-5 ">
      <div className="row justify-content-center">
        {/* 1. Image Section */}
        <div className="col-12 text-center">
          <img 
            src="./media/image/ZerodhaHero.png" 
            className="img-fluid" 
            alt="Zerodha Hero" 
            style={{ maxWidth: '80%', height: 'auto' }} 
          />
        </div>
        {/* 2. Text Section */}
      </div>
      <div className='row'>
        <div className="col-12 text-center mt-5">
          <h2 className="text-dark text-muted" style={{ letterSpacing:'-1px',fontWeight:"500" }}>
            Invest in everything
          </h2>
          <p className="fs-4 text-muted mt-3">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          
          {/* Zerodha Style Blue Button */}
          <button 
            className="btn btn-primary btn-lg mt-4 px-5 fs-5 py-2 fw-bold singup" 
             style={{ backgroundColor: '#387ed1', border: 'none', borderRadius: '3px', }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;