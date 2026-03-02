import React from 'react'

function CreateTicket() {
  return (
    <div className='container-fluid px-5 pt-3'>
        <div className='row pt-5 justify-content-evenly'>
            <div className='col-md-7'>
                <select className="form-select py-3 mb-4" aria-label="Default select example">
                   <option selected>Account Opening</option>
                   <option value="1">Resident individual</option>
                   <option value="2">Minor</option>
                   <option value="3">Not Resident Indian (NRI)</option>
                   <option value='4'>Company Partnership,HUF and LLp</option>
                   <option value="5">Glossary</option>
                </select>
                <select className="form-select py-3 mb-4" aria-label="Default select example">
                   <option selected>Your Zerodha Account</option>
                   <option value="1">Your Profile</option>
                   <option value="2">Account modification</option>
                   <option value="3">Client Master Report(CMR) and Depository Partciant(DP)</option>
                   <option value="4">Nomination</option>
                   <option value="5">Transfer and conversion of securities</option>
                </select>
                <select className="form-select py-3 mb-4" aria-label="Default select example">
                   <option selected>Kite</option>
                   <option value="1">IPO</option>
                   <option value="2">Tranding FAQs</option>
                   <option value="3">Margin Trading Facility (MTF) and Margins</option>
                   <option value="4">Charts and order</option>
                   <option value="5">Alerts and Nudges</option>
                   <option value="6">Genral</option>
                </select>
                <select className="form-select py-3 mb-4" aria-label="Default select example">
                   <option selected>Founds</option>
                   <option value="1">Add Money</option>
                   <option value="2">Withdrw Money</option>
                   <option value="3">Add bank Accounts</option>
                   <option value="3">eMandates</option>
                </select>
                <select className="form-select py-3 mb-4" aria-label="Default select example">
                   <option selected>Console</option>
                   <option value="1">Pertfolio</option>
                   <option value="2">Corporates actions</option>
                   <option value="3">Found statement</option>
                   <option value="4">Reports</option>
                   <option value="5">Profile</option>
                   <option value="6">Segments</option>
                </select>
                <select className="form-select py-3 mb-4" aria-label="Default select example">
                   <option selected>Coin</option>
                   <option value="1">Mutual Pension Schems (NPS)</option>
                   <option value="2">Fixed Deposite (FD)</option>
                   <option value="3">Features on Coin</option>
                   <option value="4">Payment and Orders</option>
                   <option value="5">General</option>
                </select>
            </div>
            <div className='col-md-4 border-left'>
               <div className='p-3 pt-4 bg-light'>
                  <ul className='fs-6'>
                    <li><a href='#!' className='text-primary link-dark'>Revision in expiry dates of<br/> commodity futures contract</a></li>
                  </ul>
                  <ul className='fs-6'>
                    <li><a href='#!' className='text-primary link-dark'>Revision in expiry dates of Copper<br/> and Zinc March 2026 options<br/> contracts</a></li>
                  </ul>
               </div>
               <div className='mt-5'>
                <h5 className=''>Quicks Links</h5>
                <ol className=''>
                    <li className='mb-3'><a href='#!' className='text-decoration-none text-primary link-dark'>Track account opening</a></li>
                    <li className='mb-3'><a href='#!' className='text-decoration-none text-primary link-dark'>Track segment activation</a></li>
                    <li className='mb-3'><a href='#!' className='text-decoration-none text-primary link-dark'>Inraday margins</a></li>
                    <li className='mb-3'><a href='#!' className='text-decoration-none text-primary link-dark'>Kite user manual  </a></li>
                    <li className='mb-3'><a href='#!' className='text-decoration-none text-primary link-dark'>Learn how to create a ticket account opening</a></li>
                </ol>
               </div>
            </div>
        </div>
    </div>
  )
}

export default CreateTicket