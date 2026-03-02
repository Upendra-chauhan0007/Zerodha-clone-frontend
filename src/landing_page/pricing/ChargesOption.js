import React from "react";

function ChargesOption() {
  return (
    <div className="container pt-5">
      <h4 className="pb-3">Charges for optional value added services</h4>
      <table className="table border">
        <thead>
          <tr>
            <th scope="col" className="fw-medium">
              Service
            </th>
            <th scope="col" className="fw-medium">
              Billing Frquency
            </th>
            <th scope="col" className="fw-medium">
              Charges
            </th>
          </tr>
        </thead>
        <tbody className="table">
          <tr className="fw-normal border-bottom-0">
            <th scope="row" className="fw-normal border-bottom-0">
              Tickertape
            </th>
            <td className="border-bottom-0">Monthly / Annual</td>
            <td className="border-bottom-0">Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr className="border-bottom-0">
            <th scope="row" className="fw-normal border-bottom-0 bg-light">
              Smallcase
            </th>
            <td className="border-bottom-0 bg-light">Per transaction</td>
            <td className="border-bottom-0 bg-light">
              Buy & Invest More: 100 | SIP: 10
            </td>
          </tr>
          <tr>
            <th scope="row" className="fw-normal">
              Kite Connect
            </th>
            <td>Monthly</td>
            <td>Connect: 500 | Personal: Free</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ChargesOption;
