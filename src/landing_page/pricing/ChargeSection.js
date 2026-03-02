import React from 'react'

function ChargeSection() {
  return (
    <div className='container-fluid'>
         <div className='row justify-content-around'>
         <div className="col-md-3 p-5 mt-5 text-center">
          <img src="media/image/pricingMF.svg" style={{width:"230.62px",height:"170.45px"}} alt="" />
          <h4 style={{color:"#424242"}}>Free equity delivery</h4>
          <p className="pt-3 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-md-3 p-5 mt-5 text-center">
          <img src="media/image/other-trades.png" style={{width:"230.62px",height:"170.45px"}} alt="" />
          <h4 style={{color:"#424242"}}>Intraday and F&O trades</h4>
          <p className="pt-3 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

         <div className="col-md-3 p-5  mt-5 text-center">
          <img src="media/image/pricingMF.svg" style={{width:"230.62px",height:"170.45px"}} alt="" />
          <h4 style={{color:"#424242"}}>Free direct MF</h4>
          <p className="pt-3 text-muted">
           All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChargeSection