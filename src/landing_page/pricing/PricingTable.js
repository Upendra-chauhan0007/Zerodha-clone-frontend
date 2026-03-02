import React from 'react'

function PricingTable() {
  return (
    <div className="container mt-5">
  <h4 className="mb-4">Equity Currency Commodity</h4>
  
  <div className="table-responsive">
    <table className="table table-bordered align-middle">
      <thead className="table-light">
        <tr>
          <th scope="col"></th>
          <th scope="col">Equity delivery</th>
          <th scope="col">Equity intraday</th>
          <th scope="col">F&O - Futures</th>
          <th scope="col">F&O - Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="text-secondary">Brokerage</th>
          <td>Zero Brokerage</td>
          <td>0.03% or Rs. 20/executed order whichever is lower</td>
          <td>0.03% or Rs. 20/executed order whichever is lower</td>
          <td>Flat Rs. 20 per executed order</td>
        </tr>
        <tr>
          <th scope="row" className="text-secondary">STT/CTT</th>
          <td>0.1% on buy & sell</td>
          <td>0.025% on the sell side</td>
          <td>0.02% on the sell side</td>
          <td>
            <ul>
              <li>0.125% of the intrinsic value...</li>
              <li>0.1% on sell side (on premium)</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row" className="text-secondary">GST</th>
          <td>18% on (brokerage + SEBI charges + transaction)</td>
          <td>18% on (brokerage + SEBI charges + transaction)</td>
          <td>18% on (brokerage + SEBI charges + transaction)</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  )
}

export default PricingTable