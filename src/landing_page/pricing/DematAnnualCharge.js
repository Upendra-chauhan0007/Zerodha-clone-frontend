import React from "react";

function DematAnnualCharge() {
  return (
    <div className="container pt-5">
        <h4 className="pb-3">Demat AMC (Annual Maintenance Charge)</h4>
      <table className="table border ">
        <thead>
          <tr>
            <th scope="col" className="fw-medium">
              Value of holdings
            </th>
            <th scope="col" className="fw-medium">
              AMC
            </th>
          </tr>
        </thead>
        <tbody classname="table">
          <tr className="border-bottom-0">
            <th scope="row" className="border-bottom-0 fw-normal">
              Up to ₹4 lakh
            </th>
            <td className="border-bottom-0">Free</td>
          </tr>
          <tr className="border-bottom-0">
            <th scope="row" className="border-bottom-0 fw-normal bg-light">
              ₹4 lakh - ₹10 lakh
            </th>
            <td className="border-bottom-0 bg-light">
              &#8377; 100 per year, charged quarterly*
            </td>
          </tr>
          <tr>
            <th scope="row" className="fw-normal">
              Above ₹10 lakh
            </th>
            <td>&#8377; 300 per year, charged quarterly</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DematAnnualCharge;
