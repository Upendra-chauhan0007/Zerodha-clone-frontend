import React from "react";

function ChargeOpenaccount() {
  return (
    <div className="container pt-5">
      <h4 className="pb-3">Charges for account opening</h4>
      <table class="table border ">
        <thead>
          <tr>
            <th scope="col" className="fw-medium">Type of account</th>
            <th scope="col" className="fw-medium">Charges</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-bottom-0">
            <th scope="row" className="border-bottom-0 fw-normal">Online account</th>
            <td className="border-bottom-0">Free</td>
          </tr>
          <tr className="border-bottom-0">
            <th scope="row" className="border-bottom-0 fw-normal bg-light">Offline account</th>
            <td className="border-bottom-0 bg-light">Free</td>
          </tr>
          <tr className="border-bottom-0">
            <th scope="row" className="border-bottom-0 fw-normal">NRI account (offline only)</th>
            <td className="border-bottom-0">&#8377;500</td>
          </tr>
          <tr>
            <th scope="row" className="fw-normal bg-light">
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </th>
            <td className="bg-light">&#8377;500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ChargeOpenaccount;
