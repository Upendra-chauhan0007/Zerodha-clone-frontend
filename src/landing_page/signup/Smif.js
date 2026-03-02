import React from 'react'

function Smif() {
  return (
    <div className='container pt-5 mb-5'>
        <h3 className='text-center pb-5'>Investment options with Zerodha demat account</h3>
        <div className='row justify-content-evenly'>
           <div className='col-md-5 text-center'>
            <img src='media/image/stocks-acop.png'alt='stock-img'/>
            <h4>Stocks</h4>
            <p>Invest in all exchange-listed<br/> securities</p>
           </div>
           <div className='col-md-5 text-center'>
            <img src='media/image/mf-acop.png'alt='stock-img'/>
            <h4>Mutual funds</h4>
            <p>Invest in commission-free direct<br></br> mutual funds</p>
           </div>
        </div>
        <div className='row justify-content-evenly mt-5'>
            <div className='col-md-5 text-center'>
            <img src='media/image/ipo-acop.png'alt='stock-img'/>
            <h4>IPO</h4>
            <p>Apply to the latest IPOs instantly<br/> via UPI</p>
           </div>
           <div className='col-md-5 text-center'>
            <img src='media/image/fo-acop.png'alt='stock-img'/>
            <h4>Futures & options</h4>
            <p>Hedge and mitigate market risk<br/> through simplified F&O trading</p>
           </div>
           <div className='text-center mt-4'>
             <button className="btn btn-primary w-25 py-2 fw-medium fs-5 singup mt-3">Explore Investments</button>
           </div>
        </div>
    </div>
  )
}

export default Smif